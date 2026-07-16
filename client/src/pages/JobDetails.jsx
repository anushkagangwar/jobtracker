import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiMapPin,
  FiDollarSign,
  FiCalendar,
  FiExternalLink,
  FiEdit,
  FiArrowLeft,
  FiBriefcase,
} from "react-icons/fi";
import { getJobById } from "../services/api";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

const JobDetails = () => {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await getJobById(id);
        setJob(res.data.data);
      } catch (error) {
        console.error(error);
        toast.error("Unable to load job.");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <Loader />;

  if (!job)
    return (
      <h2 className="text-center text-white text-2xl mt-10">
        Job not found.
      </h2>
    );

  const badgeColor = {
    Applied: "bg-blue-600",
    Interview: "bg-yellow-500",
    Selected: "bg-green-600",
    Rejected: "bg-red-600",
  };

  return (
    <div className="max-w-5xl mx-auto">

      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 mb-6 text-blue-400 hover:text-blue-300"
      >
        <FiArrowLeft />
        Back to Dashboard
      </Link>

      {/* Card */}
      <div className="rounded-3xl bg-slate-900 border border-slate-800 shadow-xl p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">

          <div>
            <h1 className="text-4xl font-bold text-white">
              {job.companyName}
            </h1>

            <p className="text-xl text-slate-400 mt-2">
              {job.jobRole}
            </p>
          </div>

          <span
            className={`mt-4 md:mt-0 px-5 py-2 rounded-full text-white font-semibold ${badgeColor[job.status]}`}
          >
            {job.status}
          </span>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="flex items-center gap-3 bg-slate-800 rounded-xl p-4">
            <FiMapPin className="text-blue-400 text-xl" />
            <div>
              <p className="text-slate-400 text-sm">Location</p>
              <p className="text-white">{job.location || "Not Provided"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-800 rounded-xl p-4">
            <FiDollarSign className="text-green-400 text-xl" />
            <div>
              <p className="text-slate-400 text-sm">Salary</p>
              <p className="text-white">
                {job.salary ? `₹ ${job.salary}` : "Not Provided"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-800 rounded-xl p-4">
            <FiCalendar className="text-orange-400 text-xl" />
            <div>
              <p className="text-slate-400 text-sm">Application Date</p>
              <p className="text-white">
                {new Date(job.applicationDate).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-800 rounded-xl p-4">
            <FiBriefcase className="text-cyan-400 text-xl" />
            <div>
              <p className="text-slate-400 text-sm">Status</p>
              <p className="text-white">{job.status}</p>
            </div>
          </div>

        </div>

        {/* Job Link */}
        {job.jobLink && (
          <div className="mt-8">
            <a
              href={job.jobLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              <FiExternalLink />
              Open Job Posting
            </a>
          </div>
        )}

        {/* Notes */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white mb-3">
            Notes
          </h3>

          <div className="rounded-xl bg-slate-800 p-5 text-slate-300">
            {job.notes || "No notes added."}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex gap-4">

          <Link
            to={`/edit-job/${job._id}`}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            <FiEdit />
            Edit Job
          </Link>

          <Link
            to="/"
            className="rounded-xl border border-slate-700 px-6 py-3 text-white hover:bg-slate-800"
          >
            Dashboard
          </Link>

        </div>

      </div>

    </div>
  );
};

export default JobDetails;
