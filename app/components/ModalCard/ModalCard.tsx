import Image from "next/image";
import React, { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  card: { title: string; imgUrl: string; description: string };
};

const ModalCard: React.FC<ModalProps> = ({ isOpen, onClose, card }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.classList.add("animate-open");
    } else {
      modalRef.current?.classList.add("animate-close");
      const timer = setTimeout(() => {
        modalRef.current?.classList.remove("animate-close");
        modalRef.current?.classList.remove("animate-open");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-md">
      <div
        ref={modalRef}
        className="bg-[#030711c7] border border-gray-600 p-4 rounded-md flex justify-center items-center gap-3 flex-col shadow-lg max-w-md md:w-full lg:w-full xl:w-full w-[90%] transition-transform duration-300 transform"
      >
        <div className="flex items-center px-2 justify-center">
          <div className="w-1/3 flex items-center justify-center">
            <Image
              src={card.imgUrl}
              alt={card.title}
              className="w-[60px] h-[60px] object-cover rounded-l-md"
              height={300}
              width={200}
            />
          </div>

          {/* Right Side: Title and Description */}
          <div className="w-2/3 p-2 flex flex-col justify-center">
            <h2 className="text-xl text-nowrap font-bold mb-2 text-[#f7f7f7eb]">
              {card.title}
            </h2>
            <p className="text-gray-400 w-[100%]   text-sm leading-relaxed mb-4">
              {card.description}
            </p>
          </div>
        </div>
        <div className="w-[100%] bg-gray-800 h-[2px]"></div>
        <div className="w-full flex justify-end">
          <button
            onClick={onClose}
            className="bottom-4 px-10 py-2 bg-gray-800 text-white rounded-[8px] text-sm hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
