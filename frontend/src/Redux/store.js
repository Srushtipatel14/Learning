import {configureStore} from "@reduxjs/toolkit";
import CouterReducer from "./counterSlice";

export const Store=configureStore({
    reducer:{
        counter:CouterReducer
    }
})