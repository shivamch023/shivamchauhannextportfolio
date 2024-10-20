import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
};

const CftModal: React.FC<ModalProps> = ({ isOpen, onClose, imgUrl }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop with blur effect */}
      <div
        className="absolute inset-0  blur-lg"
        style={{ backdropFilter: "blur(10px)" }}
        onClick={onClose}
      />
      {/* Modal Content */}
      <button
        onClick={onClose}
        className="absolute top-10 right-5 text-white text-[2rem]"
      >
        &times;
      </button>
      <motion.div
        className="relative bg-[#10141da1] border-gray-600 border p-4 rounded-lg flex flex-col items-center justify-center shadow-lg w-[90%] md:w-[600px]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={imgUrl}
          alt="Certificate"
          width={300}
          height={200}
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default CftModal;
