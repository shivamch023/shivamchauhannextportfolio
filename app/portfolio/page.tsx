"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Loader from "../components/Loader/Loader";

const Page = () => {
  const [projects, setProjects] = useState([]); // State to hold project data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/portfolio"); // Adjust to your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse JSON response
        setProjects(data); // Set projects to the fetched data
      } catch (err:any) {
        console.error("Error fetching projects:", err);
        setError(err.message); // Set error message if any error occurs
      } finally {
        setLoading(false); // Set loading to false once fetching is done
      }
    };

    fetchProjects(); // Call the fetch function when component mounts
  }, []);

  if (loading) return <div><Loader/></div>; // Show loading text
  if (error) return <div>Error: {error}</div>; // Show error message if any

  return (
    <div className="container flex items-center justify-center pt-[6.5rem] pb-[3rem] ">
      <ProjectCard projects={projects} />{" "}
      {/* Pass the fetched projects to ProjectCard */}
    </div>
  );
};

export default Page;
