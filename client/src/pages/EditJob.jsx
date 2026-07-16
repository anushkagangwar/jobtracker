import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getJobById, updateJob } from "../services/api";

const EditJob = () => {
  const { id } = useParams();
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

  // Fetch Job Details
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await getJobById(id);

        const job = res.data.data;

        setFormData({
          companyName: job.companyName || "",
          jobRole: job.jobRole || "",
          location: job.location || "",
          salary: job.salary || "",
          status: job.status || "Applied",
          applicationDate: job.applicationDate
            ? job.applicationDate.substring(0, 10)
            : "",
          jobLink: job.jobLink || "",
          notes: job.notes || "",
        });
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch job.");
      }
    };

    fetchJob();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Update Job
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateJob(id, formData);

      toast.success("Job updated successfully!");

      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update job.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-8 shadow-xl">
      <h1 className="mb-8 text-3xl font-bold text-white">
        Edit Job
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
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
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
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
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
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
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
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
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
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
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
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
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
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
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
            className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-green-600 py-4 text-lg font-semibold text-white hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Job"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJob;