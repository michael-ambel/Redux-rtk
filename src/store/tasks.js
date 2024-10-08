//Action type
const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const COMPLETED = 'COMPLETED'

//Actions
export const addActions = (task) => {
    return{
            type: ADD_TASK,
            payload: {
                task: task
            }
        }
    }
    
   export const removeActions = (id) => {
        return {
            type: REMOVE_TASK,
            payload: {
                id:id
            }
        }
    }
    
  export  const completedAction = (id) => {
        return {
            type: COMPLETED,
            payload: {id: id}
        }
    }

    export const fetchTodo = () => async (dispatch, getState) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const task = await response.json()
        dispatch(addActions(task.title))
    }

//Reducer    
let id = 0;
export default function reducer(state=[], action){
    switch(action.type){
        case ADD_TASK:
            return [...state, {
                id: ++id,
                task: action.payload.task,
                completed: false
            }]
        
        case REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id)

        case COMPLETED:
            return state.map(task => task.id === action.payload.id? {...task, completed:true}: task)

        default:
            return state
    }
}