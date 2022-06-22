import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobList: []
}

const jobList = createSlice({
    name: 'job list',
    initialState,
    reducers:{
        addJob: (state, action) => {
            
        }
    }
})


export default jobList.reducer

