import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobList: []
}

const jobList = createSlice({
    name: 'job list',
    initialState,
    reducers:{
        addJob: (state, action) => {
            const {id, jobName, priority} = action.payload
            
            state.jobList.push({ id, jobName, priority })
        }
    }
})


export default jobList.reducer

export const { addJob } = jobList.actions