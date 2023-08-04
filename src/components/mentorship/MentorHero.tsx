import React from "react";
import {
  hero_button,
  titles,
  compete_hero_right,
} from "../../Shared/MentorData";

const MentorHero = () => {
  return (
    <section className="overflow-hidden">
      <div className="container relative flex justify-between ">
        <div className="flex flex-col gap-4 mt-16 max-w-full">
          <div className="max-w-[690px] flex flex-col">
            <h1 className="font-bold text-5xl mb-5">{titles.heading}</h1>
            <h1 className="font-bold text-5xl mb-5">{titles.heading1}</h1>

            <p className="font-normal text-[20px]">{titles.para1}</p>
          </div>
          <div className="flex items-center gap-4 relative mt-8 md:flex-row sm:flex-col">
            <div className="w-36 h-auto">
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/6426ceb6e7dcc_mentees_icon_top.png" />
            </div>
            <span>
              <strong className="text-[#02a668]	">3000+</strong>
              <br />
              Mentorship sessions booked on Unstop
            </span>
          </div>

          <div className="flex gap-4">
            <button className="text-white hover:bg-blue-800 hover:text-white-800 p-2 shadow-none capitalize text-center font-semibold text-sm rounded-md bg-blue-600 px-8">
              Find a Mentor
            </button>
            <a href="https://unstop.com/auth/login">
              <button className="text-[#1c4980] border border-[#093a76] p-2 font-semibold text-sm rounded-md bg-transparent text-center hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-400 ease-in-out px-8 cursor-pointer">
                Be a mentor
              </button>
            </a>
          </div>
        </div>

        <div className="max-w-[719px] flex flex-col relative mr-[-100px] mt-10">
          <div className="hidden md:block  w-1/1 ml-16 mt-9">
            <img
              src="https://cdn.unstop.com/uploads/images/unstop/mentorship-desktop-banner-new.png?d=1200x834"
              alt="job postal hero"
            />
          </div>
        </div>
      </div>
      <div className="mt-36"></div>
    </section>
  );
};

export default MentorHero;
