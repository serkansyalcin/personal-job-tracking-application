import CircleExclamationIcon from '../../assets/circle-exclamation-solid.svg'
import '../../index.css'

import { useSelector, useDispatch } from 'react-redux'
import { deleteJob } from '../../features/job-list/jobList.slice'

import { toggleConfirmModal } from '../../features/modal/modal.slice'

const ConfirmModal = (props) => {
    const { id } = props

    const dispatch = useDispatch()
    const confirmModal = useSelector(state => state.modals.confirmModal)

    const handleCancelButton = () => {
        dispatch(toggleConfirmModal())
    }

    const handleApproveButton = (id) => {
        dispatch(toggleConfirmModal())
        dispatch(deleteJob({ id }))
    }

    return (
        confirmModal &&
        <div 
            className='modal bg-black bg-opacity-50'    
        >
            <div className='flex flex-col justify-center items-center gap-6 rounded-lg modal w-2/5 h-60 bg-white'>
                <img 
                    src={CircleExclamationIcon} 
                    alt='circle exclamation icon' 
                    className='w-12' 
                />
                <h4 className='text-3xl font-semibold'>Are you sure you want to delete it?</h4>
                <div className='flex gap-8'>
                    <button
                        className='px-8 py-3 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded'
                        onClick={handleCancelButton}
                    >
                        Cancel
                    </button>
                    <button 
                        className='bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700'
                        onClick={() => handleApproveButton(id)}
                    >
                        Approve
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal