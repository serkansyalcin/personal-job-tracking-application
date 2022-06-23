import { useSelector } from 'react-redux'
import IndividualJob from '../individual-job/InividualJob.component'

const JobListItems = ({ searchField }) => {
    const jobListArray = useSelector(state => state.jobs.jobListArray)
    
    const filteredJobListName = jobListArray.filter(eachJob => eachJob.jobName.includes(searchField.jobName))

    let filteredJobList = filteredJobListName.filter(eachJob => eachJob.priority.includes(searchField.priority))

    if(searchField.priority === 'All'){
        filteredJobList = filteredJobListName
    }

    return (
        <div className='shadow rounded-br rounded-bl'>
            <div className="grid grid-cols-3 md:grid-cols-4 text-gray-800 
            bg-gray-200 py-1 px-2 font-semibold">
                <span className="cols-span-1 md:col-span-2">Name</span>
                <span className="col-span-1">Priority</span>
                <span className="col-span-1">Action</span>
            </div>
            {
                jobListArray && (
                    filteredJobList.map(eachJob => (
                        <IndividualJob eachJob={eachJob} key={eachJob.id}/>
                    ))
                )
            }
        </div>
    )
}

export default JobListItems