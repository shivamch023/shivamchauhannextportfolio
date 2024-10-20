import mongoose, { Schema, model } from "mongoose";

// Defining the schema for Portfolio Model
const PortfolioSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: false, // Additional description (optional)
  },
  videoImg: {
    type: String,
    required: false, // Optional, as it's related to video
  },
  github: {
    type: String,
    required: true, // GitHub repository URL
  },
  live: {
    type: String,
    required: true, // Live URL of the project
  },
  nestedData: {
    images: {
      type: [String], // Array of image URLs
      required: true,
    },
    video: {
      type: String, // Video URL (like YouTube embed)
      required: false,
    },
  },
  nestedSkill: {
    html: {
      type: String,
      required: true,
    },
    css: {
      type: String,
      required: true,
    },
    javascript: {
      type: String,
      required: true,
    },
    react: {
      type: String,
      required: true,
    },
    tailwind: {
      type: String,
      required: true,
    },
    apiIntegration: {
      type: String,
      required: true,
    },
  },

}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

// Creating the model
const PortfolioModel = mongoose.models.Portfolio || model("Portfolio", PortfolioSchema);

export default PortfolioModel;
