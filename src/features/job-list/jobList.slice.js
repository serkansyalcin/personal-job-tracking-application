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
            localStorage.setItem('jobs', JSON.stringify(state.jobListArray))
        },
        deleteJob: (state, action) => {
            const { id } = action.payload
            state.jobListArray = state.jobListArray.filter(eachJob => eachJob.id !== id)
            
            let jobsLocalStorage = JSON.parse(localStorage.getItem('jobs'))
            jobsLocalStorage = jobsLocalStorage.filter(job => job.id !== id)
            localStorage.setItem('jobs', JSON.stringify(jobsLocalStorage))
        },
        editJobPriority: (state, action) => {
            const { id, selectedPriority } = action.payload
            const matchingJob = state.jobListArray.find(job => job.id === id)
            
            matchingJob.priority = selectedPriority

            let jobsLocalStorage = JSON.parse(localStorage.getItem('jobs'))
            const matchingJobFromLocalStorage = jobsLocalStorage.find(job => job.id === id)
            matchingJobFromLocalStorage.priority = selectedPriority
            localStorage.setItem('jobs', JSON.stringify(jobsLocalStorage))
        },
        updateCartListFromLocalStorage: (state, action) => {
            state.jobListArray = action.payload
        }
    }
})


export default jobList.reducer

export const { addJob, deleteJob, editJobPriority, updateCartListFromLocalStorage } = jobList.actions