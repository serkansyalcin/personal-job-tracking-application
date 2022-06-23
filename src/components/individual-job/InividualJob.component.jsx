import Penlogo from '../../assets/pen-solid.svg'
import TrashCanLogo from '../../assets/trash-can-solid.svg'

const IndividualJob = ({ eachJob }) => {
    const { id, jobName, priority } = eachJob
    
    return (
        <div 
            className='flex text-gray-900 hover:bg-gray-100 bg-opacity-75 
            px-2 h-16 items-center shadow-sm' 
            key={id}
        >
            <div className='w-2/4'>{ jobName }</div>
            <div className='w-1/4'>{ priority }</div>
            <div className='flex gap-6 items-center'>
                <img 
                    src={Penlogo} 
                    alt='pen logo' 
                    className='p-2 h-10 w-10 bg-gray-200 cursor-pointer rounded-lg'
                />
                <img 
                    src={TrashCanLogo} 
                    alt='trash can logo'
                    className='p-2 h-10 w-10 bg-gray-200 cursor-pointer rounded-lg'
                />
            </div>
        </div>
    )
}

export default IndividualJob