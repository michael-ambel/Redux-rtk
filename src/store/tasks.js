import { createAction, createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../utils/http";
import { apiCallBegan } from "./genApiAction";

// //Actions
// export const addTask = createAction('ADD_TASK')
// export const removeTask = createAction('REMOVE_TASK')
// export const taskCompleted = createAction('TASK_COMPLETED')

//Reducer    
let id = 0;

// export default createReducer([], (buildesr) => {
//     builder
//     .addCase (addTask, (state, action)=> {
//         state.push({
//             id: ++id,
//             task: action.payload.task,
//             completed: false
//         })
//     })

//     .addCase (removeTask, (state, action) => {
//         const i = state.findIndex(task => task.id === action.payload.id)
//         state.splice(i, 1)
//     })

//    .addCase(taskCompleted, (state, action) => {
//         const i = state.findIndex(task => task.id === action.payload.id)
//         state[i].completed = true
//    })
// })

// export const fetchTasks = createAsyncThunk('fetchTask', async (_, {rejectWithValue}) => {
//     try {
//         const response = await axios('/tasks')
//         console.log(response);
//         return {tasks:response.data}
//     } catch (error) {
//         return rejectWithValue({error: error.message})
//     }
// }) 


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        loading: false,
        error: null
    },
    reducers: {
        //action: function
        apiRequested: (state, action) => {
            state.loading = true
        },
        apiRequestFailed: (state, action) => {
            state.loading = false
        },
        getTask: (state, action) => {
            state.tasks = action.payload
            state.loading = false
        }, 
        addTask: (state, action) => {
            console.log(action.payload);
            state.tasks.push(action.payload)
        },
        removeTask: (state, action) => {
            const i = state.tasks.findIndex(task => task.id === action.payload.id)
            state.tasks.splice(i, 1)
        },
        taskCompleted: (state, action) => {
            const i = state.tasks.findIndex(task => task.id === action.payload.id)
            state.tasks[i].completed = action.payload.completed
        }
    },
    // extraReducers: (builder) =>{
    //     builder
    //         .addCase(fetchTasks.pending, (state, action) => {
    //             state.loading = true;
    //             state.error = null;
    //         })
    //         .addCase(fetchTasks.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.tasks = [...state.tasks, ...action.payload.tasks]
    //         })
    //         .addCase(fetchTasks.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload.error || 'Somting went wrong';
    //         })
    // }
})

export const {apiRequested, apiRequestFailed, getTask, addTask, removeTask, taskCompleted} = tasksSlice.actions;
export default tasksSlice.reducer


//Action creators

const url = '/tasks'
export const loadTask = () => {
    return apiCallBegan({
        url,
        method: 'GET',
        onStart: apiRequested.type,
        onSuccess: getTask.type,
        onError: 'SHOW_ERROR',
        onFailed: apiRequestFailed.type
    })  
}

export const addNewTask = (task) => {
    return apiCallBegan({
        url,
        method: 'POST',
        data: task,
        onSuccess: addTask.type,
    }) 
}

export const completUpdater = (task) => {
    return apiCallBegan({
        url: `${url}/${task.id}`,
        method: 'PATCH',
        data: task, 
        onSuccess: taskCompleted.type
    })
}

export const taskDeleter = (task) => {
    return apiCallBegan({
        url: `/tasks/${task.id}`,
        method: 'DELETE',
        onSuccess: removeTask.type
    })
}
