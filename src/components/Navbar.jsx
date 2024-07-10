import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    //
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <Link
        to="/"
        className="text-3xl font-bold text-[#00ce00] cursor-pointer ml-4"
      >
        WebTaker
      </Link>
      <ul className="hidden md:flex ml-32 cursor-pointer ">
        <li className="p-4 hover:text-green-600 ">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:text-green-600">
          <Link to="/">Features</Link>
        </li>
        <li className="p-4 hover:text-green-600">
          <Link to="/">Contributor</Link>
        </li>
        <li className="p-4 hover:text-green-600">
          <Link to="/savedurls">Saved URL</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00ce00] m-4 ">
          WebTaker
        </h1>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-slate-400">
          <Link to="#">Home</Link>
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-slate-400">
          <Link to="/">Features</Link>
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-slate-400">
          <Link to="/">Contributor</Link>
        </li>
        <li className="p-4 cursor-pointer hover:text-slate-400 ">
          <Link to="/">Saved URL</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
