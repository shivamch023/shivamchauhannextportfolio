"use client";
import React, { useState } from "react";
import Link from "next/link";
import ModalCard from "../ModalCard/ModalCard";
import { BiRefresh, BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
import Image from "next/image";

type Card = {
  title: string;
  imgUrl: string;
  description: string;
};

type TechStackProps = {
  cards: Card[];
  showSeeAll?: boolean;
  showSearch?: boolean;
};

const TechStack: React.FC<TechStackProps> = ({
  cards,
  showSeeAll = true,
  showSearch = false,
}) => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="container flex flex-col justify-center items-center gap-2 mx-auto px-2  py-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mt-6 gap-2 flex flex-col justify-center items-center mb-4"
      >
        <h1 className="text-[1.6rem] font-bold text-[#ededed]">
          Technical <b className="text-[#008080]">Skills</b>
        </h1>
        <p className="text-[#b3b9cd] px-2 xl:w-[70%] w-[100%] lg:w-[65%] md:w-[75%] text-center text-[14px] lg:text-[1rem] xl:text-[1rem] md:text-[1rem] mb-4">
          As a web developer, I&aposve honed a variety of skills that allow me
          to create beautiful and functional web interfaces.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="px-4 mb-[0.7rem]  w-full"
      >
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="py-5 bg-[#0f141d5a] px-4 rounded-[10px] flex items-center w-[100%] xl:w-[20rem] lg:w-[20rem] md:w-[20rem] h-[28px] border-gray-700 border"
          >
            <BiSearch className="text-[#ededed] text-[1rem]" />
            <input
              type="text"
              placeholder="Search Skills"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-[#ededed] w-full p-2 text-[1rem] bg-transparent outline-none rounded-md"
            />
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full flex justify-center items-center flex-col"
      >
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-7 w-full p-4">
            {filteredCards.map((card, index) => (
              <motion.div
                key={index}
                className="border border-gray-800 bg-[#10141d52] flex flex-wrap justify-center items-center rounded-xl transition shadow-sm cursor-pointer w-full md:w-[180px] lg:w-[180px] xl:w-[180px] xl:h-[160px] lg:h-[160px] md:h-[160px] h-[130px] mx-auto hover:bg-[#10141d70]"
                onClick={() => handleCardClick(card)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col justify-center gap-3 w-full items-center">
                  <Image
                    src={card.imgUrl}
                    alt={card.title}
                    className="w-[40px] h-[40px] object-contain"
                    height={30}
                    width={30}
                  />
                  <h2 className="text-[#f4f5fb] text-[16px] font-bold text-center">
                    {card.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-[200px] bg-gray-900 border border-gray-700 rounded-lg shadow-lg mt-4">
            <p className="text-[#ededed] text-[1.2rem] font-semibold mb-4">
              No skills found
            </p>
            <button
              onClick={handleRefresh}
              className="flex items-center justify-center text-[#ededed] text-[2rem] bg-[#008080] p-2 rounded-full hover:bg-[#297171f1] transition"
            >
              <BiRefresh />
            </button>
          </div>
        )}
      </motion.div>

      {showSeeAll && (
        <div className="mt-[2rem] mb-[2rem] text-center">
          <Link href="/skill">
            <div className="px-8 py-2 bg-gray-900 border border-gray-800 text-white rounded-xl transition-all hover:bg-gray-700">
              See All
            </div>
          </Link>
        </div>
      )}

      {selectedCard && (
        <ModalCard
          isOpen={Boolean(selectedCard)}
          onClose={handleCloseModal}
          card={selectedCard}
        />
      )}
    </div>
  );
};

export default TechStack;
