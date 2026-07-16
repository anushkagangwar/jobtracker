import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(

{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    jobRole: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    salary: {
      type: Number,
    },

    status: {
      type: String,
      enum: ["Applied", "Interview", "Selected", "Rejected"],
      default: "Applied",
    },

    applicationDate: {
      type: Date,
      default: Date.now,
    },

    jobLink: {
      type: String,
      trim: true,
    },

    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;