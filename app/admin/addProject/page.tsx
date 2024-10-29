// /* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProjectUploadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    image: null,
    description: "",
    description1: "",
    github: "",
    live: "",
    skills: [""], // Initialize with an empty skill
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    setFormData((prevData: any) => {
      if (name === "image") {
        return {
          ...prevData,
          [name]: files ? files[0] : null,
        };
      } else if (name.startsWith("skill")) {
        const index = parseInt(name.split("-")[1], 10);
        const updatedSkills = [...prevData.skills];
        updatedSkills[index] = value; // Update skill at the specified index
        return {
          ...prevData,
          skills: updatedSkills,
        };
      } else {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const addSkill = () => {
    setFormData((prevData: any) => ({
      ...prevData,
      skills: [...prevData.skills, ""], // Add an empty string for a new skill
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    for (const key in formData) {
      const value = formData[key as keyof typeof formData];
      if (Array.isArray(value)) {
        // ऐरे के हर आइटम को अलग-अलग जोड़ें, JSON में बदलने के बजाए
        value.forEach((item) => form.append("skills", item));
      } else if (value) {
        form.append(key, value);
      }
    }

    try {
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
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
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
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">GitHub Link</label>
        <input
          type="url"
          name="github"
          placeholder="GitHub Link"
          value={formData.github}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Live Link</label>
        <input
          type="url"
          name="live"
          placeholder="Live Project Link"
          value={formData.live}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
        />
      </div>

      <h3 className="text-lg font-semibold mb-2">Skills</h3>
      {formData.skills.map((skill, index) => (
        <div className="mb-2" key={index}>
          <input
            type="text"
            name={`skill-${index}`}
            placeholder={`Skill ${index + 1}`}
            value={skill}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addSkill}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Another Skill
      </button>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
      >
        Upload Project
      </button>
    </form>
  );
};

export default ProjectUploadForm;
