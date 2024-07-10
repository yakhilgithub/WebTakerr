import React from "react";

function Contributor() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="max-w-md bg-green-500 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 transform hover:scale-105 relative">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Akhilesh"
              className="w-full h-64 object-cover"
            />
          </figure>
          <div className="absolute inset-x-0 bottom-0 p-4 bg-black bg-opacity-50 text-white">
            <h2 className="text-xl font-serif ">
              <a
                href="https://www.linkedin.com/in/yakhilesh/"
                target="_NayaPage"
              >
                Akhilesh
              </a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contributor;
