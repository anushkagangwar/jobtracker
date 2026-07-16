// import Job from "../models/Job.js";

// // Create a new job
// export const createJob = async (req, res) => {
//   try {
//     const job = await Job.create({
//       ...req.body,
//       user: req.user.id,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Job created successfully",
//       data: job,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Get all jobs
// export const getAllJobs = async (req, res) => {
//   try {
//     const jobs = await Job.find().sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: jobs.length,
//       data: jobs,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Get a single job by ID
// export const getJobById = async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.id);

//     if (!job) {
//       return res.status(404).json({
//         success: false,
//         message: "Job not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: job,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Update a job
// export const updateJob = async (req, res) => {
//   try {
//     const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!job) {
//       return res.status(404).json({
//         success: false,
//         message: "Job not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Job updated successfully",
//       data: job,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// // Delete a job
// export const deleteJob = async (req, res) => {
//   try {
//     const job = await Job.findByIdAndDelete(req.params.id);

//     if (!job) {
//       return res.status(404).json({
//         success: false,
//         message: "Job not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Job deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

import Job from "../models/Job.js";

// Create a new job
export const createJob = async (req, res) => {
  try {
    const job = await Job.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all jobs of logged-in user
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: jobs.length,
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get single job of logged-in user
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update job of logged-in user
export const updateJob = async (req, res) => {
  try {
    const job = await Job.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete job of logged-in user
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};