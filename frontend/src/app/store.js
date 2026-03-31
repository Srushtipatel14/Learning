import {configureStore} from "@reduxjs/toolkit";
import couterReducer from "../features/counter/couterSlice";

export default configureStore({
    reducer:{
      count:couterReducer
    }
})