import { useSelector } from 'react-redux'
import IndividualJob from '../individual-job/InividualJob.component'

const JobListItems = () => {
    const jobListArray = useSelector(state => state.jobs.jobListArray)
    
    return (
        <div className='shadow rounded-br rounded-bl'>
            <div className="flex text-gray-800 bg-gray-200 py-1 px-2 font-semibold ">
                <span className="w-2/4">Name</span>
                <span className="w-1/4">Priority</span>
                <span className="w-1/4">Action</span>
            </div>
            {
                jobListArray && (
                    jobListArray.map(eachJob => (
                        <IndividualJob eachJob={eachJob}  key={eachJob.id}/>
                    ))
                )
            }
            
        </div>
    )
}

export default JobListItems