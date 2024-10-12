import { createSlice } from "@reduxjs/toolkit";


let id = 0;
const employeeSlice = createSlice({
    name: 'employees',
    initialState: [],
    //action: funcrion
    reducers: {
        addEmp : (state, action) => {
            state.push({
                id: ++id,
                name: action.payload.name
            })
        },
    
        remEmp: (state, action) => {
            const i = state.findIndex(emp = emp.id = action.payload.id)
            state.splice(i, 1)
        }
    }
})

export const {addEmp, remEmp} = employeeSlice.actions;
export default employeeSlice.reducer;