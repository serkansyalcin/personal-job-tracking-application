import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobListArray: []
}

const jobList = createSlice({
    name: 'job list',
    initialState,
    reducers:{
        addJob: (state, action) => {
            const {id, jobName, priority} = action.payload
            
            state.jobListArray.push({ id, jobName, priority })
        }
    }
})


export default jobList.reducer

export const { addJob } = jobList.actions