import { createSlice } from "@reduxjs/toolkit";

interface ToDoState {
    value: string[]
}
const initialState: ToDoState = {
    value: [],
}

export const ToDoSlice = createSlice({
    name: "ToDo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.value.push(action.payload)
        },
        deleteToDo: (state, action) => {
            state.value.splice(action.payload, 1)
        },
        updateToDo: (state, action) => {
            state.value.splice(action.payload.index, 1, action.payload.newValue)
        },
    }
})


export const { addToDo, deleteToDo, updateToDo } = ToDoSlice.actions
export default ToDoSlice.reducer