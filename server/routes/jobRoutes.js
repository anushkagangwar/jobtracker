import express from "express";
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();

// Create Job
router.post("/", authMiddleware, createJob);

// Get All Jobs
router.get("/", authMiddleware, getAllJobs);

// Get Single Job
router.get("/:id", authMiddleware, getJobById);

// Update Job
router.put("/:id", authMiddleware, updateJob);

// Delete Job
router.delete("/:id", authMiddleware, deleteJob);

export default router;