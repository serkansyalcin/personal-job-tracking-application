import SearchIcon from '../../assets/magnifying-glass-solid.svg'
import JobListItems from '../job-list-items/JobListItems.component'
import { useState } from 'react'

const options = [
    {
        value: 'All',
        label: 'Priorities(all)'
    },
    {
        value: 'Urgent',
        label: 'Urgent'
    },
    {
        value: 'Regular',
        label: 'Regular'
    },
    {
        value: 'Trivial',
        label: 'Trivial'
    }
]

const JobList = () => {
    const [ searchField, setSearchField ] = useState({
        jobName: '',
        priority: ''
    })

    const handleSearchFields = (e, type) => setSearchField({ ...searchField, [type]: e.target.value })

    return (
        <div>
            <h3 className="text-2xl mb-4">Job List</h3>
            <div className="bg-gray-100 p-2 relative rounded-tr rounded-tl flex gap-4">
                <input 
                    type='text' 
                    className='relative pl-8 h-10 rounded w-2/3 border' 
                    placeholder='Job Name' 
                    value={searchField.jobName}
                    onChange={e => handleSearchFields(e, 'jobName')}
                />
                <img alt='search icon' src={SearchIcon} className='absolute w-4 top-5 left-4'  />
                <select 
                    id="job-priority" 
                    className='h-10 w-1/3 rounded bg-white border pl-2'
                    value={searchField.priority}
                    onChange={e => handleSearchFields(e, 'priority')}
                >
                {
                    options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))
                }    
                </select>
            </div>
            <JobListItems searchField={searchField} />
        </div>
    )
}

export default JobList
