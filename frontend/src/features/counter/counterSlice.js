import { createSlice } from "@reduxjs/toolkit";

const counterSlice=new createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        }
    }
})

export const {increment,decrement} =counterSlice.actions;
export default counterSlice.reducer;