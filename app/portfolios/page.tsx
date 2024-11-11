"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Loader from "../components/Loader/Loader";

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
      <div>
        <Loader />
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
