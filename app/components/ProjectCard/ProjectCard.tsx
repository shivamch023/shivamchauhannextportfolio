"use client";
import Image from "next/image";
import Link from "next/link";
import { FcBookmark } from "react-icons/fc";
import { FiLink2 } from "react-icons/fi";

const ProjectCard = ({ projects }: { projects: any[] }) => {
  const projectList = Array.isArray(projects) ? projects : [];

  if (projectList.length === 0) {
    return <div className="text-white">No projects available</div>;
  }

  return (
    <div className="container flex flex-col items-center justify-center gap-[2rem]">
      <h1 className="text-white flex items-center text-nowrap gap-2 font-[700] text-center text-[2rem]">
        My <FcBookmark /> <span className="text-[#008080]">Projects</span>
      </h1>
      <div className="flex flex-wrap gap-4 items-center justify-center p-2">
        {projectList.map((project) => (
          <Link key={project.id} href={`/projects/${project._id}`}>
            <div
              className="relative flex w-[300px] h-[200px] flex-col gap-[1rem] bg-[#10141d52] border  rounded-[10px] border-gray-700 px-4 py-4 overflow-hidden group"
              style={{ textAlign: "center" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                height={250}
                width={200}
                style={{ objectFit: "cover" }}
                className="w-[300px] h-[80%] rounded-[10px]"
              />

              <h2 className="text-gray-100 text-[1.2rem] mb-1">
                {project.title}
              </h2>

              <div className="absolute inset-0 flex items-center justify-center bg-[#10141dad] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[#4effff] items-center flex gap-2 text-[1.2rem] font-[600] transition-all hover:text-[#43ecff] hover:text-[1.5rem]">
                  View Details <FiLink2 />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
