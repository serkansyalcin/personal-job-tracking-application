import Navbar from "./components/navbar/navbar.component";
import CreateJob from "./components/create-job/CreateJob.component";
import JobList from "./components/job-list/JobList.component";
import Footer from './components/footer/footer.component'

function App() {
  return (
    <div className="px-3 md:px-6">
      <Navbar />
      <CreateJob />
      <JobList />
      <Footer />
    </div>
  );
}

export default App;
