import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createJob } from "../services/api";

const AddJob = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    jobRole: "",
    location: "",
    salary: "",
    status: "Applied",
    applicationDate: "",
    jobLink: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.companyName || !formData.jobRole) {
      toast.error("Company Name and Job Role are required.");
      return;
    }

    try {
      setLoading(true);

      await createJob(formData);

      toast.success("Job added successfully!");

      navigate("//dashboard/add-job");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add job.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-8 shadow-xl">
      <h1 className="mb-8 text-3xl font-bold text-white">
        Add New Job
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 md:grid-cols-2"
      >
        {/* Company */}
        <div>
          <label className="mb-2 block text-slate-300">
            Company Name
          </label>

          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Job Role */}
        <div>
          <label className="mb-2 block text-slate-300">
            Job Role
          </label>

          <input
            type="text"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="mb-2 block text-slate-300">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Salary */}
        <div>
          <label className="mb-2 block text-slate-300">
            Salary
          </label>

          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Status */}
        <div>
          <label className="mb-2 block text-slate-300">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Selected</option>
            <option>Rejected</option>
          </select>
        </div>

        {/* Application Date */}
        <div>
          <label className="mb-2 block text-slate-300">
            Application Date
          </label>

          <input
            type="date"
            name="applicationDate"
            value={formData.applicationDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Job Link */}
        <div className="md:col-span-2">
          <label className="mb-2 block text-slate-300">
            Job Link
          </label>

          <input
            type="url"
            name="jobLink"
            value={formData.jobLink}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Notes */}
        <div className="md:col-span-2">
          <label className="mb-2 block text-slate-300">
            Notes
          </label>

          <textarea
            rows="5"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-blue-500"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Job"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;