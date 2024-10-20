import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBookReader } from "react-icons/fa";
import CftModal from "./CftModal/CftModal";

const educationData = [
  {
    degree: "B.Tech In Computer Science",
    institution: "BRCM College Of Engineering & Technology",
    duration: "2020 - 2024",
    description:
      "Focused on Full Stack Web Development, Software Engineering, and Data Structures.",
    imgUrl: "/assets/cft/result.jpg",
  },
  {
    degree: "12th Intermediate",
    institution: "Swami Dayananda S I C Surai Azamgarh",
    duration: "2020",
    description:
      "I passed 12th grade with PCM (Physics, Chemistry, Mathematics) as my core subjects.",
    imgUrl: "/assets/cft/inter.jpg",
  },
  {
    degree: "10th High School",
    institution: "Swami Dayananda S I C Surai Azamgarh",
    duration: "2018",
    description:
      "I completed my 10th grade with Science and Mathematics as key subjects.",
    imgUrl: "/assets/cft/high.jpg",
  },
  {
    degree: "Diploma In Computer Application",
    institution: "Baba Banwari Das Memorial Institute",
    duration: "6 Month - 2016 ",
    description:
      "I completed a (DCA), gaining foundational knowledge in computers and software applications.",
    imgUrl: "/assets/cft/dca.jpg",
  },
];

const Education: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpenModal = (imgUrl: string) => {
    setSelectedImage(imgUrl);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="container w-full">
      <CftModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imgUrl={selectedImage}
      />

      <motion.section
        className="my-8 flex flex-col p-2 justify-center items-center gap-[2.5rem]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl flex flex-wrap text-center justify-center items-center gap-[1rem] text-nowrap font-bold mb-2 text-[#f4f5fb]">
          My{" "}
          <b className="text-[#008080] flex justify-center items-center gap-[1rem]">
            <FaBookReader />
            Education
          </b>{" "}
          & Certificates
        </h2>
        <div className="flex flex-wrap gap-[1.6rem] w-full justify-center">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#10141d70] border flex flex-col gap-[1rem] border-gray-800 p-5 rounded-lg shadow-md w-[400px]"
            >
              <h3 className="text-[1.4rem] font-semibold text-[#f4f5fb]">
                {edu.degree}
              </h3>
              <p className="text-[1rem] text-[#b3b9cd]">
                {edu.institution} - {edu.duration}
              </p>
              <p className="text-[0.8rem] text-[#b3b9cd]">{edu.description}</p>
              <button
                onClick={() => handleOpenModal(edu.imgUrl)}
                className="mt-2 px-4 py-2 bg-[#008080] text-white rounded-md hover:bg-[#005f5f] transition"
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Education;
