import { useEffect, useState } from "react";
import { getJobs } from "../services/api";
import StatsCard from "../components/StatsCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import JobCard from "../components/JobCard";
import EmptyState from "../components/EmptyState";
import Loader from "../components/Loader";


const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  // const fetchJobs = async () => {
  //   try {
  //     const response = await getJobs();
  //     setJobs(response.data.data);
  //   } catch (error) {
  //     console.error("Error fetching jobs:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchJobs = async () => {
  try {
    const response = await getJobs();

    console.log("Full Response:", response);
    console.log("Response Data:", response.data);
    console.log("Jobs Array:", response.data.data);

    setJobs(response.data.data);
  } catch (error) {
    console.error("Error fetching jobs:", error);
  } finally {
    setLoading(false);
  }
};

const filteredJobs = jobs.filter((job) => {
  const search = searchTerm.toLowerCase();

  const matchesSearch =
    (job.companyName || "").toLowerCase().includes(search) ||
    (job.jobRole || "").toLowerCase().includes(search) ||
    (job.location || "").toLowerCase().includes(search);

  const matchesFilter =
    selectedFilter === "All" || job.status === selectedFilter;

  return matchesSearch && matchesFilter;
});


  useEffect(() => {
    fetchJobs();
  }, []);

  const totalJobs = jobs.length;
  const applied = jobs.filter(job => job.status === "Applied").length;
  const interview = jobs.filter(job => job.status === "Interview").length;
  const selected = jobs.filter(job => job.status === "Selected").length;

 console.log("Search:", searchTerm);
console.log("Jobs:", jobs);
console.log("Filtered Jobs:", filteredJobs);

  return (
    <div className="space-y-8">

      {/* Welcome Section */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8">
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-blue-100">
          Track every application and land your dream job.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard title="Total Jobs" value={totalJobs} />
        <StatsCard title="Applied" value={applied} />
        <StatsCard title="Interview" value={interview} />
        <StatsCard title="Selected" value={selected} />
      </div>

      {/* Search */}
     <SearchBar
       searchTerm={searchTerm}
       setSearchTerm={setSearchTerm}
       />

      {/* Filter */}
      <FilterBar
  selectedFilter={selectedFilter}
  setSelectedFilter={setSelectedFilter}
/>

      {/* Recent Jobs */}
      <div>
        <h2 className="mb-6 text-2xl font-bold">
          Recent Applications
        </h2>

        {loading ? (
          <Loader />
        ) : jobs.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredJobs.map(job => (
              <JobCard
                key={job._id}
                job={job}
                refreshJobs={fetchJobs}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default Dashboard;