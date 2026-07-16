import { useEffect, useState } from "react";
import { getJobs } from "../services/api";
import Loader from "../components/Loader";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const Analytics = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await getJobs();
      setJobs(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  const applied = jobs.filter(
    (job) => job.status === "Applied"
  ).length;

  const interview = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  const selected = jobs.filter(
    (job) => job.status === "Selected"
  ).length;

  const rejected = jobs.filter(
    (job) => job.status === "Rejected"
  ).length;

  const totalJobs = jobs.length;

  const averageSalary =
    jobs.reduce((sum, job) => sum + (job.salary || 0), 0) /
    (totalJobs || 1);

  const successRate =
    totalJobs === 0
      ? 0
      : ((selected / totalJobs) * 100).toFixed(1);


  const pieData = {
  labels: ["Applied", "Interview", "Selected", "Rejected"],
  datasets: [
    {
      data: [applied, interview, selected, rejected],

      backgroundColor: [
        "#3B82F6", // Blue
        "#F59E0B", // Yellow
        "#22C55E", // Green
        "#EF4444", // Red
      ],

      borderColor: [
        "#3B82F6",
        "#F59E0B",
        "#22C55E",
        "#EF4444",
      ],

      borderWidth: 2,
    },
  ],
};



  const barData = {
  labels: ["Applied", "Interview", "Selected", "Rejected"],

  datasets: [
    {
      label: "Applications",
      data: [applied, interview, selected, rejected],

      backgroundColor: [
        "#3B82F6",
        "#F59E0B",
        "#22C55E",
        "#EF4444",
      ],

      borderRadius: 8,
    },
  ],
};

  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold">
        Analytics
      </h1>

      {/* Cards */}

      <div className="grid md:grid-cols-4 gap-6">

        <div className="rounded-2xl bg-slate-900 p-6">
          <h3>Total Jobs</h3>
          <p className="text-4xl font-bold mt-3">
            {totalJobs}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6">
          <h3>Average Salary</h3>
          <p className="text-4xl font-bold mt-3">
            ₹ {averageSalary.toFixed(0)}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6">
          <h3>Success Rate</h3>
          <p className="text-4xl font-bold mt-3">
            {successRate}%
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-6">
          <h3>Interviews</h3>
          <p className="text-4xl font-bold mt-3">
            {interview}
          </p>
        </div>

      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="rounded-2xl bg-slate-900 p-6">
          <h2 className="text-xl font-bold mb-5">
            Status Distribution
          </h2>

          <Pie data={pieData} />
        </div>

        <div className="rounded-2xl bg-slate-900 p-6">
          <h2 className="text-xl font-bold mb-5">
            Applications Overview
          </h2>

          <Bar data={barData} />
        </div>

      </div>

    </div>
  );
};

export default Analytics;