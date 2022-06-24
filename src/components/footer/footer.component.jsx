const Footer = () => {
    const year = new Date()
    
    return (
        <footer className="py-4 px-2 rounded-sm bg-gray-200 flex justify-between mt-12">
            <div>
                <span className="bg-orange-300 text-orange-600 p-1 mr-1 rounded">git</span> 
                <a 
                    href="https://github.com/serkansyalcin/personal-job-tracking-application"
                    className='underline text-blue-400'
                >
                    repository
                </a>
            </div>
            <div className="text-gray-800">&copy; {year.getFullYear()} Serkan Yalcin</div>
        </footer>
    )
}

export default Footer