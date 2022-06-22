import Navbar from "./components/navbar/navbar.component";
import CreateJob from "./components/create-job/CreateJob.component";
import JobList from "./components/job-list/JobList.component";

function App() {
  return (
    <div className="px-8">
      <Navbar />
      <CreateJob />
      <JobList />
    </div>
  );
}

export default App;
