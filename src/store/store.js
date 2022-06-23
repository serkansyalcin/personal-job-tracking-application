import { configureStore } from "@reduxjs/toolkit";
import jobListReducer from '../features/job-list/jobList.slice'

const store = configureStore({
    reducer: {
        jobs: jobListReducer
    }
})

export default store