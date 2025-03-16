"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const Page = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/portfolio");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (err: any) {
        console.error("Error fetching projects:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-transparent">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-t-transparent border-blue-300 rounded-full animate-spin-slow"></div>
        </div>
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container flex items-center justify-center pt-[6.5rem] pb-[3rem] ">
      <ProjectCard projects={projects} />{" "}
    </div>
  );
};

export default Page;
