import PlusIcon from '../../assets/plus-solid.svg'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'
import { addJob, updateCartListFromLocalStorage } from '../../features/job-list/jobList.slice'

const options = [
    {
        value: null,
        label: 'Choose'
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

const defaultFormFields = {
    jobName: "",
    priority: '',
    id: null,
}

const CreateJob = () => {
    const [formField, setFormField] = useState(defaultFormFields)
    const dispatch = useDispatch()
    const jobList = useSelector(state => state.jobs.jobListArray)
    const jobListFromLocalStorage = JSON.parse(localStorage.getItem('jobs'))

    useEffect(()=>{
        dispatch(updateCartListFromLocalStorage(jobListFromLocalStorage))
    },[])

    const handleInputs = (e, type) => {
        setFormField(prevFormField => ({ ...prevFormField, [type]: e.target.value, id: nanoid() })
    )}

    const handleSubmit = (e) => {
        e.preventDefault()

        const {id, jobName, priority} = formField

        if(priority && jobName){
            dispatch(addJob({ id, jobName, priority }))
            setFormField(defaultFormFields)
        }
    }

    return(
        <div className='mb-8'>
            <h3 className='text-2xl mb-4'>Create New Job</h3>
            <form 
                className='grid sm:grid-cols-4 md:grid-cols-5 grid-cols-1 gap-8 justify-between items-end' 
                onSubmit={(e) => handleSubmit(e)}
            >
                <div className='col-span-3 md:grid-cols-2'>
                    <label htmlFor='job-name' className='block text-sm text-gray-700'>
                        Job Name
                    </label>
                    <input 
                        type='text' 
                        id='job-name' 
                        className='block h-10 w-full border rounded pl-2'
                        onChange={(e) => handleInputs(e, 'jobName')}
                        value={formField.jobName}
                    />
                </div>  
                <div className='col-span-1'>
                    <label htmlFor='job-priority' className='block text-sm text-gray-700'>
                        Job Priority
                    </label>
                    <select 
                        id="job-priority" 
                        className='block h-10 w-full rounded pl-2'
                        onChange={(e) => handleInputs(e, 'priority')} 
                        value={formField.priority}
                    >
                        {
                            options.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            )
                        )}
                    </select>
                </div>
                
                <button 
                    className='bg-blue-500 flex justify-center items-center gap-2 
                    text-white rounded-md px-6 hover:bg-blue-600 h-10 cursor-pointer'
                    type='submit'
                >
                    <img src={PlusIcon} alt="plus icon" className='w-4'/>
                    Create
                </button>
            </form>
        </div>       
    )
}

export default CreateJob
