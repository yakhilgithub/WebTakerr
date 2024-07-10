import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import Modal from "./Modal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [hashtagInput, setHashtagInput] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleUrlChange = (e) => setUrlInput(e.target.value);
  const handleHashtagChange = (e) => setHashtagInput(e.target.value);

  const handleSave = () => {
    console.log("URL:", urlInput);
    console.log("Hashtag:", hashtagInput);

    closeModal();
  };
  return (
    <div className="text-white  ">
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 hidden md:block">
          <img
            src="https://assets-global.website-files.com/5e51c674258ffe10d286d30a/5e535d507371bb20aea29659_peep-100.png"
            alt="Chacha"
            className="w-full h-auto lg:h-[100%] object-cover"
          />
        </div>
        <div className="max-w-[800px] mt-[-88px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00ce00] font-bold p-2">
            Don't lose your Fav Websites
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">
            Be Smart
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-xl text-xl font-medium py-4">
              Save any{" "}
              <span className="sm:text-3xl text-lg text-[#05c405]">
                Website
              </span>{" "}
              with
            </p>
            <ReactTyped
              className="md:text-5xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 "
              strings={["LINK", "Hashtag", "Date"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Capture, Save, and Rediscover Your Favorite Websites with{" "}
            <span className="font-Bodoni Moda SC">Webtaker</span> – Where Your
            Online World Stays Safe and Accessible! and whenever you feel like
            it, easily find and browse your favorite websites{" "}
          </p>
          <button
            onClick={openModal}
            className="bg-[#00ce00] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-green-500 transition duration-150 ease-in-out"
          >
            Add Your Web Link
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onUrlChange={handleUrlChange}
        onHashtagChange={handleHashtagChange}
        onSave={handleSave}
      />
    </div>
  );
};

export default Hero;
