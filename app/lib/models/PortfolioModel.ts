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
    required: true, 
  },
  github: {
    type: String,
    required: true, 
  },
  live: {
    type: String,
    required: true, 
  },
  skills: {
    type: [String], // Array of strings for skills
    required: true,
  },
}, { timestamps: true }); 

const PortfolioModel = mongoose.models.Portfolio || model("Portfolio", PortfolioSchema);

export default PortfolioModel;

