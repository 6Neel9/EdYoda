import { configureStore } from "@reduxjs/toolkit";
import instructorReducer from './instructorSlice'



const store = configureStore({
    reducer:{
        instrcutorpost:instructorReducer,
    }
})



export default store;