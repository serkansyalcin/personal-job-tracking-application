import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import { editJobPriority } from "../../features/job-list/jobList.slice"
import { toggleEditModal } from "../../features/modal/modal.slice"

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

const JobEditModal = ({ eachJob }) => {
    const { id, jobName } = eachJob

    const jobEditModal = useSelector(state => state.modals.editModal)

    const [selectPriority, setSelectPriority] = useState({
        id: '',
        selectedPriority: '',
    })

    const dispatch = useDispatch()

    const handleSelectedPriority = (e) => {
        setSelectPriority({...selectPriority, id, selectedPriority: e.target.value})
    }

    const handleSaveButton = (id, selectedPriority) => {
        dispatch(toggleEditModal())
        dispatch(editJobPriority({ id, selectedPriority }))
    }

    const handleCancelButton = () => {
        dispatch(toggleEditModal())
    }

    return (
        jobEditModal &&
        <div className='modal bg-black bg-opacity-50'>
            <div className="modal flex flex-col justify-center items-center rounded-lg w-4/5 md:w-2/5 h-80 bg-white">
                <h2 className="text-3xl mb-4 font-semibold">Job Edit</h2>
                
                <div className="w-full px-8 mb-2">
                    <label htmlFor='job-name' className='block text-sm text-gray-700'>
                            Job Name
                    </label>
                    <input 
                        type='text' 
                        id='job-name' 
                        className='block h-10 border rounded text-gray-600 w-full 
                            cursor-not-allowed focus:outline-none select-none pl-2'
                        value={jobName}
                        readOnly
                    />
                </div>

                <div className="w-full px-8 mb-8">
                    <label htmlFor='job-priority' className='block text-sm text-gray-700'>
                        Job Priority
                    </label>
                    <select 
                        id="job-priority" 
                        className='h-10 rounded bg-white border w-full pl-2'
                        value={selectPriority.selectedPriority}
                        onChange={e => handleSelectedPriority(e)}
                    >
                    {
                        options.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))
                    }    
                    </select>
                </div>
                
                <div className='flex gap-12'>
                    <button
                        className='px-8 py-3 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded'
                        onClick={handleCancelButton}
                    >
                        Cancel
                    </button>
                    <button 
                        className='bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700'
                        onClick={() => handleSaveButton(id, selectPriority.selectedPriority)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default JobEditModal