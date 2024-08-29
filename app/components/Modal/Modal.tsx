import React from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0  bg-opacity-50 flex gap-[2rem] backdrop-blur-sm bg-white/8 items-center justify-center">
      <div
        className="bg-[#0F141D] border p-6 rounded-lg w-full max-w-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-[#ededed] text-[1.2rem] ">Interface Theme</h3>
        <p className="text-[#b3b9cd] text-[1rem] ">
          Change how Interface looks and feels in your browser.
        </p>
        <button
          className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-500 transition  border rounded-full p-1 text-gray-600 hover:text-white-500"
          onClick={onClose}
        >
          <IoClose className="text-[1.2rem] text-[white]" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
