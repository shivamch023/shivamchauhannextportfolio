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
    <div className=" border items-center justify-center border-gray-600 w-[100%] flex flex-col gap-4">
      <h2 className="text-[2rem] w-full font-semibold p-5 text-white text-center">
        Upload Project
      </h2>
      <form
        className=" p-6 border  border-gray-600 flex flex-wrap gap-2 items-center  rounded shadow-md w-[80%]"
        onSubmit={handleSubmit}
      >
        <ToastContainer />

        <div className="mb-4 flex flex-col">
          <label className="block text-white text-sm font-medium mb-1 w-full">
            Project ID
          </label>
          <input
            type="text"
            name="id"
            placeholder="Project ID"
            value={formData.id}
            onChange={handleChange}
            required
            className="w-full border bg-transparent border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-400 text-gray-300 "
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-medium mb-1 w-full">
            Project Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border bg-transparent border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400 text-gray-300 "
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-sm font-medium mb-1 text-white w-full">
            Main Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            required
            className="w-full border text-gray-300  bg-transparent border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block w-full   text-sm font-medium mb-1 text-white">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border bg-transparent border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400 text-gray-300 "
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block w-full text-sm font-medium mb-1 text-white">
            Additional Description
          </label>
          <textarea
            name="description1"
            placeholder="Additional Description"
            value={formData.description1}
            onChange={handleChange}
            required
            className="w-full border text-gray-300  bg-transparent border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block w-full text-sm font-medium mb-1 text-white">
            GitHub Link
          </label>
          <input
            type="url"
            name="github"
            placeholder="GitHub Link"
            value={formData.github}
            onChange={handleChange}
            required
            className="w-full border text-gray-300  bg-transparent border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block w-full text-sm font-medium mb-1 text-white">
            Live Link
          </label>
          <input
            type="url"
            name="live"
            placeholder="Live Project Link"
            value={formData.live}
            onChange={handleChange}
            required
            className="w-full border text-gray-300  bg-transparent  border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
          />
        </div>

        <h3 className="text-lg w-full font-semibold mb-2 text-white">Skills</h3>
        {formData.skills.map((skill, index) => (
          <div className="mb-2" key={index}>
            <input
              type="text"
              name={`skill-${index}`}
              placeholder={`Skill ${index + 1}`}
              value={skill}
              onChange={handleChange}
              className="w-full border text-gray-300 bg-transparent border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addSkill}
          className="bg-gray-900 mb-3 transition-all  text-white px-6 py-0 h-[40px] text-center rounded hover:bg-gray-800"
        >
          Add Another Skill
        </button>

        <button
          type="submit"
          className="bg-gray-800 w-full text-white px-4 py-2 rounded mt-4 hover:bg-gray-900 transition-all"
        >
          Upload Project
        </button>
      </form>
    </div>
  );
};

export default ProjectUploadForm;
