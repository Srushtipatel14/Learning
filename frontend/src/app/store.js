import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

const Store = configureStore({
    reducer: {
        counter: counterSlice
    }
});

export default  Store;