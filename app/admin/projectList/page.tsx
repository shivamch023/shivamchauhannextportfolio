"use client";
import ProjectTableItem from "@/app/components/AdminComponents/ProjectTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Project {
  _id: string;
  title: string;
  author: string;
  createdAt: any;
}

const Page: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/api/portfolio");
      setProjects(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      toast.error("Failed to fetch Projects.");
    }
  };

  const deleteProject = async (projectId: string) => {
    try {
      const response = await axios.delete("/api/portfolio", {
        params: { id: projectId },
      });
      toast.success(response.data.msg);
      fetchProjects();
    } catch (error) {
      toast.error("Failed to delete Project.");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-white text-[1.5rem] font-[600] text-nowrap text-center">
        All Projects
      </h1>
      <div className="relative h-[80vh] max-w-[850px] rounded-[10px] overflow-x-auto mt-4 border border-gray-600 scrollbar-hide">
        <table className="w-full text-sm text-gray-100">
          <thead className="text-sm  text-gray-30 text-left uppercase bg-gray-800">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author name
              </th>
              <th scope="col" className="px-6 py-3">
                Project title
              </th>
              <th scope="col" className="px-6 py-3">
                Project Date
              </th>
              <th scope="col" className="px-2 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {projects?.length > 0 ? (
              projects.map((item) => (
                <ProjectTableItem
                  key={item._id}
                  mongoId={item._id}
                  title={item.title}
                  author={item.author}
                  date={item.createdAt}
                  deleteBlog={deleteProject}
                />
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
