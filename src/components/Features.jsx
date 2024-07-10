import React from "react";
import feat from "../images/feature1.png";

const Features = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={feat} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00ce00] font-bold ">Why Webtaker?</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage your favourite website
          </h1>
          <p>
            How long will you keep searching for your favorite websites in
            browser history? You never know where they disappear. That's why
            WebTaker has come, which keeps your website along with its URL,
            keywords, date, and time. Whenever you feel like it, you can view
            that website. Whether you want to see it in a day or a year, your
            website will be safely saved with WebTaker. So why wait? <br />
            Try <span className="font-extrabold">WebTaker</span> now
          </p>
          <div>
            <button className="bg-black text-[#00ce00] w-[200px] rounded-md font-medium my-6 md:ml-auto md:mr-48 py-3 hover:bg-slate-900 hover:text-[#08f5aa]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
