// components/Modal.tsx
import React from "react";
import { RxCross2 } from "react-icons/rx";

const ModalVideo = ({
  isOpen,
  onClose,
  videoSrc,
  titleProjec,
}: {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  titleProjec: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
      <div className="bg-[#03060F] border-2 border-gray-800 p-4 rounded-lg w-full md:w-3/4 lg:w-1/2">
        <div className="mb-4 flex relative items-center flex-col gap-3">
          <button onClick={onClose} className="absolute right-1 top-1">
            <RxCross2 className="text-[2rem] text-[#008080]" />
          </button>
          <h2 className="text-[2rem] font-bold text-[#008080]">
            {titleProjec}
          </h2>
          <iframe
            className="w-full h-[auto]"
            src={videoSrc}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;
