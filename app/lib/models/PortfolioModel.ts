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
    required: true, // Additional description (optional)
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
      required: false,
    },
    video: {
      type: String, // Video URL (like YouTube embed)
      required: false,
    },
  },
  nestedSkill: {
    html: {
      type: String,
      required: false,
    },
    css: {
      type: String,
      required: false,
    },
    javascript: {
      type: String,
      required: false,
    },
    react: {
      type: String,
      required: false,
    },
    tailwind: {
      type: String,
      required: false,
    },
    apiIntegration: {
      type: String,
      required: false,
    },
  },

}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

// Creating the model
const PortfolioModel = mongoose.models.Portfolio || model("Portfolio", PortfolioSchema);

export default PortfolioModel;
