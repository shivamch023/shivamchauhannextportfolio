/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const skillsOptions = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "apiIntegration", label: "API Integration" },
];

const ProjectUploadForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    image: null,
    description: "",
    description1: "",
    videoImg: null, // Change to hold the selected image
    github: "",
    live: "",
    images: [],
    videoUrl: "",
    skills: [],
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else if (name === "images") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: Array.from(files).slice(0, 6), // Limit to 6 images
      }));
    } else if (name === "videoImg") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Set the selected video image
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSkillsChange = (selectedOptions: any[]) => {
    const selectedSkills = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setFormData((prevData: any) => ({
      ...prevData,
      skills: selectedSkills,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((file) => form.append(key, file));
      } else {
        form.append(key, formData[key]);
      }
    }

    const response = await fetch("/api/portfolio", {
      method: "POST",
      body: form,
    });

    if (response.ok) {
      toast.success("Project uploaded successfully!");
    } else {
      toast.error("Failed to upload project. Please try again.");
    }

    const data = await response.json();
    console.log(data);
  };

  return (
    <form
      className="max-w-lg mx-auto p-6 bg-white rounded shadow-md w-full"
      onSubmit={handleSubmit}
    >
      <ToastContainer />

      <h2 className="text-xl font-semibold mb-4">Upload Your Project</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Project ID</label>
        <input
          type="text"
          name="id"
          placeholder="Project ID"
          value={formData.id}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Project Title</label>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Main Image</label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Additional Description
        </label>
        <textarea
          name="description1"
          placeholder="Additional Description"
          value={formData.description1}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Video Thumbnail
        </label>
        <input
          type="file"
          name="videoImg" // Change to file input for image
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
        {/* Display the selected video thumbnail */}
        {formData.videoImg && (
          <img
            src={URL.createObjectURL(formData.videoImg)}
            alt="Video Thumbnail"
            className="mt-2 w-16 h-16 object-cover rounded border border-gray-300"
          />
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">GitHub Link</label>
        <input
          type="text"
          name="github"
          placeholder="GitHub Link"
          value={formData.github}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Live Link</label>
        <input
          type="text"
          name="live"
          placeholder="Live Link"
          value={formData.live}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Additional Images (up to 6)
        </label>
        <input
          type="file"
          name="images"
          onChange={handleChange}
          multiple
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
        <p className="text-sm text-gray-500">You can upload up to 6 images.</p>
      </div>

      {/* Display selected images */}
      <div className="mb-4">
        <h3 className="text-sm font-medium mb-1">Selected Images</h3>
        <div className="flex space-x-2 overflow-x-auto">
          {formData.images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Selected ${index + 1}`}
              className="w-16 h-16 object-cover rounded border border-gray-300"
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Skills</label>
        <Select
          options={skillsOptions}
          isMulti
          onChange={handleSkillsChange}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Video URL</label>
        <input
          type="text"
          name="videoUrl"
          placeholder="Video URL"
          value={formData.videoUrl}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default ProjectUploadForm;
