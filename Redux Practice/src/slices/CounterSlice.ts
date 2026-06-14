import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const CounterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },  
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer