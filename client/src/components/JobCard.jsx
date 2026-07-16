import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiDollarSign,
  FiCalendar,
  FiEdit,
  FiTrash2,
  FiEye,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { deleteJob } from "../services/api";

const JobCard = ({ job, refreshJobs }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Delete application for ${job.companyName}?`
    );

    if (!confirmDelete) return;

    try {
      await deleteJob(job._id);
      refreshJobs();
    } catch (error) {
      console.log(error);
      alert("Unable to delete job");
    }
  };

  const badgeColor = () => {
    switch (job.status) {
      case "Applied":
        return "bg-blue-600";

      case "Interview":
        return "bg-yellow-500";

      case "Selected":
        return "bg-green-600";

      case "Rejected":
        return "bg-red-600";

      default:
        return "bg-gray-600";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            {job.companyName}
          </h2>

          <p className="mt-1 text-slate-400">
            {job.jobRole}
          </p>
        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm text-white ${badgeColor()}`}
        >
          {job.status}
        </span>
      </div>

      {/* Details */}
      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-2 text-slate-300">
          <FiMapPin />
          {job.location}
        </div>

        <div className="flex items-center gap-2 text-slate-300">
          <FiDollarSign />
          {job.salary}
        </div>

        <div className="flex items-center gap-2 text-slate-300">
          <FiCalendar />
          {new Date(job.createdAt).toLocaleDateString()}
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-between">

        <Link
          to={`/job/${job._id}`}
          
          className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
        >
          <FiEye />
          View
        </Link>

        <div className="flex gap-3">

          <Link
            to={`/edit-job/${job._id}`}
            className="rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700"
          >
            <FiEdit />
          </Link>

          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-600 p-3 text-white hover:bg-red-700"
          >
            <FiTrash2 />
          </button>

        </div>

      </div>
    </motion.div>
  );
};

export default JobCard;