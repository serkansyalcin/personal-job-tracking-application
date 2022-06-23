import Penlogo from '../../assets/pen-solid.svg'
import TrashCanLogo from '../../assets/trash-can-solid.svg'

import { useDispatch } from 'react-redux'
import { toggleConfirmModal, toggleEditModal } from '../../features/modal/modal.slice'

import ConfirmModal from '../confirm-modal/ConfirmModal.component'
import JobEditModal from '../job-edit-modal/JobEditModal.component'

const IndividualJob = ({ eachJob }) => {
    const { id, jobName, priority } = eachJob
    const dispatch = useDispatch()

    const handleConfirmModal = () => {
        dispatch(toggleConfirmModal())
    }

    const handleJobEditModal = () => {
        dispatch(toggleEditModal())
    }

    let priorityDynamicBackground = 'bg-black'

    if(priority === 'Urgent') {
        priorityDynamicBackground = 'bg-red-500'
    }

    if(priority === 'Trivial'){
        priorityDynamicBackground = 'bg-blue-500'
    }

    if(priority === 'Regular'){
        priorityDynamicBackground = 'bg-yellow-500'
    }

    return (
        <div 
            className='grid grid-cols-3 md:grid-cols-4 text-gray-900 hover:bg-gray-100 bg-opacity-75 
            px-2 h-16  shadow-sm justify-center items-center' 
        >
            <div className='col-span-1 md:col-span-2'>{ jobName }</div>
            <div 
                className={` ${priorityDynamicBackground} px-4 py-1 
                rounded-lg text-white text-center w-24`}
            >
                { priority }
            </div>
            <div className='flex gap-4 md:gap-6 items-center col-span-1'>
                <img 
                    src={Penlogo} 
                    alt='pen logo' 
                    className='p-2 h-8 w-8 md:h-10 md:w-10 bg-gray-200 cursor-pointer rounded-lg'
                    onClick={handleJobEditModal}
                />
                <img 
                    src={TrashCanLogo} 
                    alt='trash can logo'
                    className='p-2 h-8 w-8 md:h-10 md:w-10 bg-gray-200 cursor-pointer rounded-lg'
                    onClick={handleConfirmModal}
                />
            </div>
            <ConfirmModal id={id} />
            <JobEditModal eachJob={eachJob} />
        </div>
    )
}

export default IndividualJob