"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = ({ projects }: { projects: any[] }) => {
  if (!projects || projects.length === 0) {
    return <div>No projects available</div>;
  }

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {projects.map((project) => (
        <div key={project.id}>
          <Image
            src={project.image}
            alt={project.title}
            height={100}
            width={100}
          />
          <h2>{project.title}</h2>
          <Link href={`/projects/${project.id}`}>
            <a>
              <button>View Details</button>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
