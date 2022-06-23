import PlusIcon from '../../assets/plus-solid.svg'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import { addJob } from '../../features/job-list/jobList.slice'

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
        <div className='mb-4'>
            <h3 className='text-2xl mb-4'>Create New Job</h3>
            <form 
                className='flex justify-between items-end' 
                onSubmit={(e) => handleSubmit(e)}
            >
                <div className='w-3/5'>
                    <label htmlFor='job-name' className='block text-sm text-gray-700'>
                        Job Name
                    </label>
                    <input 
                        type='text' 
                        id='job-name' 
                        className='block h-10 w-full border rounded pr-2'
                        onChange={(e) => handleInputs(e, 'jobName')}
                        value={formField.jobName}
                    />
                </div>  
                <div className='w-1/4'>
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
