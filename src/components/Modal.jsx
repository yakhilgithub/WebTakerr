import React from "react";
import { format } from "date-fns";

const Modal = ({ isOpen, onClose, onUrlChange, onHashtagChange, onSave }) => {
  const currentDate = format(new Date(), "MMMM dd, yyyy hh:mm a");

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={onClose}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-center mb-4">
              <p className="text-xl font-bold">Add Your Web Link</p>
              <p className="text-sm text-gray-500">
                Current Date & Time: {currentDate}
              </p>
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-[#00df9a]"
                placeholder="Enter URL"
                onChange={(e) => onUrlChange(e.target.value)}
                autoFocus
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:border-[#00df9a]"
                placeholder="Enter Hashtag"
                onChange={(e) => onHashtagChange(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-[#00df9a] text-white rounded-md px-4 py-2 mr-2 hover:bg-[#00c48b] focus:outline-none"
                onClick={onSave}
              >
                Save
              </button>
              <button
                className="bg-gray-200 text-gray-700 rounded-md px-4 py-2 ml-2 hover:bg-gray-300 focus:outline-none"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
