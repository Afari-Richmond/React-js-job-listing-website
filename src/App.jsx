
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./ViewAllJobs";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero title="This is the Title" subTitle="Subtitle of props" />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />

     
    </>
  );
};

export default App;
