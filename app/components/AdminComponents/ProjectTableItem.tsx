import Image from "next/image";
import React from "react";
import { MdDelete } from "react-icons/md";

interface ProjectTableItemProps {
  title: string;
  author?: string;
  date: string;
  deleteBlog: (mongoId: string) => void;
  mongoId: string;
}

const ProjectTableItem: React.FC<ProjectTableItemProps> = ({
  title,
  author = "Shivam Chauhan",
  date,
  deleteBlog,

  mongoId,
}) => {
  const BlogDate = new Date(date);

  console.log(date, title);

  return (
    <tr className="border border-gray-600">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          src="/assets/shivam.jpg"
          width={40}
          height={40}
          alt={author}
          className="rounded-full"
        />
        <p className="text-white">{author}</p>
      </th>
      <td className="px-6 py-4 text-white">{title || "Shivam chauhan"}</td>
      <td className="px-6 py-4">{BlogDate.toDateString()}</td>
      <td
        onClick={() => deleteBlog(mongoId)}
        className="px-6 py-4 cursor-pointer"
      >
        <p className="border border-gray-600 flex items-center justify-center py-1 px-2 rounded hover:bg-gray-900 hover:text-white">
          <MdDelete className="text-white text-[1.5rem]" />
        </p>
      </td>
    </tr>
  );
};

export default ProjectTableItem;
