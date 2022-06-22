import SearchIcon from '../../assets/magnifying-glass-solid.svg'

const JobList = () => {
    return (
        <div>
            <h3 className="text-2xl mb-4">Job List</h3>
            <div className="bg-gray-200 p-2 relative rounded flex gap-4">
                <input 
                    type='text' 
                    className='relative pl-8 h-10 rounded-sm w-2/3 border' 
                    placeholder='Job Name' 
                />
                <img alt='search icon' src={SearchIcon} className='absolute w-4 top-5 left-4'  />
                <select id="job-priority" className='h-10 w-1/3 rounded bg-white border pl-2'>
                    <option>Priorities(all)</option>
                    <option value="urgent">Urgent</option>
                    <option value="regular">Regular</option>
                    <option value="trivial">Trivial</option>
                </select>
            </div>
        </div>
    )
}

export default JobList