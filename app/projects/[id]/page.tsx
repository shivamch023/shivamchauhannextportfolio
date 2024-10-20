/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use this hook to get params from the URL
import axios from "axios";
import Image from "next/image";
import { BsEyeFill } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { CiTextAlignLeft } from "react-icons/ci";
import Link from "next/link";

// Define the interface for your project type
interface Project {
  title: string;
  image: string;
  github: string;
  live: string;
  description: string;
  description1?: string; // Optional property
}

const ProjectDetailPage = () => {
  const { id } = useParams(); // Extract the project ID from the URL
  const [project, setProject] = useState<Project | null>(null); // State for project data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState<string | null>(null); // State for error handling

  const fetchProject = async () => {
    try {
      const response = await axios.get(`/api/portfolio?id=${id}`); // Fetch project data using the ID
      const data = response.data;

      if (data.success === false) {
        throw new Error(data.msg);
      }

      setProject(data); // Set the project data
    } catch (err: any) {
      console.error("Error fetching project:", err);
      setError(err.message); // Set error message if any error occurs
    } finally {
      setLoading(false); // Set loading to false once fetching is done
    }
  };

  useEffect(() => {
    fetchProject(); // Call the fetch function when component mounts
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show loading text
  if (error) return <div>Error: {error}</div>; // Show error message if any

  if (!project) return <div>No project found.</div>; // Handle case where project is null

  return (
    <div className="container flex flex-col w-full mx-auto pt-[7rem] gap-[3rem] pb-[2rem] px-[2rem]">
      <div className="flex justify-center items-center">
        <h1 className="text-[2.5rem] text-nowrap font-bold mb-[2.5rem] text-[#008080]">
          {project.title}
        </h1>
      </div>
      <div className="w-full flex justify-between">
        <div className="w-[65%]">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-[10px]"
            width={800}
            height={800}
          />
        </div>
        <div className="w-[33%] flex flex-col gap-[2rem] border rounded-[10px] px-[1rem] py-[2rem] border-gray-600">
          <div className="flex items-center justify-center gap-5">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 flex gap-2 items-center justify-center bg-gray-800 text-white rounded-lg transition-all hover:bg-gray-900"
            >
              <FaSquareGithub /> GitHub
            </Link>
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 gap-2 flex items-center justify-center bg-gray-800 transition-all text-white rounded-lg hover:bg-gray-900"
            >
              <BsEyeFill /> Preview
            </Link>
          </div>
          <ul className="flex list-disc flex-col gap-2 ">
            <p className="text-white flex gap-2 items-center text-[1.2rem] font-[600]">
              <CiTextAlignLeft /> Description:
            </p>
            <li className="mb-2 ml-5 text-[#d5d5d5]">{project.description}</li>
            {project.description1 && (
              <li className="mb-2 ml-5 text-[#d5d5d5]">
                {project.description1}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="flex border border-gray-600 flex-col gap-5 px-4 py-4 rounded-[10px]">
        <h2 className="text-[1.5rem] text-white font-bold flex items-center">
          Skills Used
        </h2>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
