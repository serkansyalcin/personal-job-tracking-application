import PlusIcon from '../../assets/plus-solid.svg'

const CreateJob = () => {
    return(
        <div className='mb-4'>
            <h3 className='text-2xl mb-4'>Create New Job</h3>
            <form className='flex justify-between items-end'>
                <div className='w-3/5'>
                    <label htmlFor='job-name' className='block text-sm text-gray-700'>
                        Job Name
                    </label>
                    <input type='text' id='job-name' className='block h-10 w-full border rounded pr-2'/>
                </div>  
                <div className='w-1/4'>
                    <label htmlFor='job-priority' className='block text-sm text-gray-700'>
                        Job Priority
                    </label>
                    <select id="job-priority" className='block h-10 w-full rounded pl-2'>
                        <option>Choose</option>
                        <option value="urgent">Urgent</option>
                        <option value="regular">Regular</option>
                        <option value="trivial">Trivial</option>
                    </select>
                </div>
                
                <button 
                    className='bg-blue-500 flex justify-center items-center gap-2 
                    text-white rounded-md px-6 hover:bg-blue-600 h-10 cursor-pointer'
                >
                    <img src={PlusIcon} alt="plus icon" className='w-4'/>
                    Create
                </button>
            </form>
        </div>       
    )
}

export default CreateJob