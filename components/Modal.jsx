import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleClose}
    >
      <div className="rounded-lg bg-white p-6 max-w-4xl w-full max-h-screen overflow-auto shadow-lg">
        <button
          className="absolute top-2 right-2 text-lg font-semibold"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
