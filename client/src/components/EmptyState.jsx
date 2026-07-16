import { Link } from "react-router-dom";
import { FiBriefcase, FiPlusCircle } from "react-icons/fi";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-700 bg-slate-900 py-20 px-6 text-center shadow-lg">
      
      {/* Icon */}
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600/20">
        <FiBriefcase className="text-5xl text-blue-500" />
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-3xl font-bold text-white">
        No Job Applications Yet
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-md text-slate-400">
        Start tracking your job applications by adding your first job.
        Stay organized and never miss an opportunity.
      </p>

      {/* Button */}
      <Link
        to="/dashboard/add-job"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold transition hover:bg-blue-700"
      >
        <FiPlusCircle size={20} />
        Add Your First Job
      </Link>
    </div>
  );
};

export default EmptyState;