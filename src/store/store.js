import { configureStore } from "@reduxjs/toolkit";
import jobListReducer from '../features/job-list/jobList.slice'
import modalsReducer from '../features/modal/modal.slice'

const store = configureStore({
    reducer: {
        jobs: jobListReducer,
        modals: modalsReducer
    }
})

export default store