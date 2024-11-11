import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Link from "next/link";
import axios from "axios";
import Loader from "../Loader/Loader";

const Card = () => {
  const [cards, setCards] = useState([]); // State to hold the cards data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  const fetchCards = async () => {
    try {
      const response = await axios.get("/api/portfolio");
      const data = response.data;

      // Check if the fetched data is an array or if it contains an array
      const projectsArray = Array.isArray(data) ? data : data.portfolios || [];

      setCards(projectsArray); // Set cards to the fetched data (array of projects)
      console.log(projectsArray); // Log the fetched data
    } catch (err: any) {
      console.error("Error fetching cards:", err);
      setError(err.message); // Set error message if any error occurs
    } finally {
      setLoading(false); // Set loading to false once fetching is done
    }
  };

  useEffect(() => {
    fetchCards(); // Call the fetch function when component mounts
  }, []);

  if (loading)
    return (
      <div className="flex h-[200px] w-full flex-col justify-center items-center  ">
        <Loader />
      </div>
    ); // Show loading text
  if (error)
    return <div className="items-center text-white">Error: {error}</div>; // Show error message if any

  return (
    <div className="container flex flex-col gap-[2rem] items-center justify-center p-4">
      <ProjectCard projects={cards.slice(0, 8)} />{" "}
      {/* Display the first 8 projects */}
      <Link href="/portfolio">
        <button className="px-8 py-2 bg-gray-900 border border-gray-800 text-white rounded-xl transition-all hover:bg-gray-700">
          See All
        </button>
      </Link>
    </div>
  );
};

export default Card;
