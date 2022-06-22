import { configureStore } from "@reduxjs/toolkit";
import jobListReducer from '../features/job-list/jobList.slice'

const store = configureStore({
    reducer: {
        jobList: jobListReducer
    }
})

export default store