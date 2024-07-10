import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 lg:ml-36">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00ce00]">WebTaker</h1>
        <p className="py-4">Capture Your Web Experience, Anytime, Anywhere!</p>
        <div className="flex justify-between md:w-[75%] my-3 cursor-pointer ">
          <FaFacebookSquare
            size={30}
            className="hover:text-slate-500 active:text-slate-600"
          />
          <FaInstagram
            size={30}
            className="hover:text-slate-500 active:text-slate-600 "
          />
          <FaTwitterSquare
            size={30}
            className="hover:text-slate-500 active:text-slate-600"
          />
          <FaGithubSquare
            size={30}
            className="hover:text-slate-500 active:text-slate-600"
          />
          <FaDribbbleSquare
            size={30}
            className="hover:text-slate-500 active:text-slate-600"
          />
        </div>
      </div>

      <div className=" mx-auto md:mr-12 lg:mr-0 ">
        <h6 className="font-semibold text-gray-400">Mere</h6>
        <ul>
          <li className="py-1 text-sm">Contact</li>
          <li className="py-1 text-sm">Projects</li>
          <li className="py-1 text-sm">
            <a href="https://yakhilesh-portfolio.vercel.app/" target="_Dekhlo">
              Porfolio <span className="font-thin">(Since 2023)</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
