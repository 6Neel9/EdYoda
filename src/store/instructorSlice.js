import { createSlice } from "@reduxjs/toolkit";



const instructorSlice = createSlice({
    name:"post",
    initialState:{
        data:[]
    },
    reducers:{
        setInstructor(state,action){
            state.data = action.payload;
        }
    }
})


export const {setInstructor} = instructorSlice.actions;
export default instructorSlice.reducer;

//Thunk

export function fetchPosts() {
    return async function fetchPostThunk(dispatch) {
        try {
            const res = await fetch('https://dummyjson.com/products/1');
            const data = await res.json();
            dispatch(setInstructor(data));
        } catch (err) {
            console.log(err);
        }
    }
}