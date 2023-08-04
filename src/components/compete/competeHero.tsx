import React from "react";
import { competitions, hero_button, titles, compete_hero_right } from "../../Shared/CompeteData";

const CompeteHero = () => {

  return (
    <section className="overflow-hidden">

      <span className="absolute top-[360px] left-[90px] hidden lg:block">
        <img src="./CompeteImages/blue_dot_center.png" alt="" />
      </span>

      <div className="container relative flex justify-between">
        <div className="flex flex-col gap-6 mt-10 max-w-full">

          <div className="max-w-[690px] flex flex-col">
            <h1 className="font-bold text-5xl mb-5">{titles.heading}</h1>
            <p className="font-normal text-[15px] sm:text-[20px]">{titles.para1}</p>
            <p className="font-normal text-[15px] sm:text-[20px]">{titles.para2}</p>
          </div>

          <div className="flex gap-4">
            <button className="sm:w-40 sm:h-12 w-[150px] h-[40px] text-white hover:bg-blue-800 hover:text-white-800 p-3 shadow-none capitalize text-center font-semibold text-sm rounded-md bg-blue-600 px-8">
              <span className="text-[15px]"> {hero_button.exp_button}</span>
            </button>
            <a href="https://unstop.com/auth/login">
              <button className="sm:w-[200px] sm:h-12 w-[170px] h-[40px] text-[#1c4980] border border-[#093a76] p-3 font-semibold text-sm rounded-md bg-transparent text-center hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-400 ease-in-out px-8 cursor-pointer">
                <span className="text-[15px]">{hero_button.host_button}</span>
              </button>
            </a>

            <span className="absolute top-35 left-[600px] transform -rotate-90 translate-x-[-50%] translate-y-[-50%] hidden lg:block">
              <img src={hero_button.dot_center} alt="" />
            </span>
          </div>


          <div className="items-center gap-4 relative mt-8 md:flex-row sm:flex-col grid grid-cols-2 md:grid-cols-4">

            {competitions.map((competition) => (
              <a
                key={competition.title}
                className={`block p-4 w-30 h-30 sm:w-40 sm:h-40 ${competition.backgroundColor} bg-cover flex flex-col justify-between bg-center rounded-lg transition-all cursor-pointer transform hover:translate-y-[-15px]  duration-300`}
                href={competition.link}
              >
                <strong className="text-[14px] sm:text-[16px]">{competition.title}</strong>
                <img src={competition.imageUrl} alt="" />
              </a>
            ))}
          </div>

        </div>


        <div className="max-w-[719px] flex flex-col relative mr-[-360px] mt-5">
          <div className="hidden md:block">
            <img src="./CompeteImages/compete_hero_right.png" alt="job postal hero" />
          </div>

          {compete_hero_right.map((data: any, index: any) => (
            <div
              key={index}
              className={`flex absolute bg-white rounded-[15px] p-2 px-2 ${data.top ? `${data.top}` : ''} ${data.left ? `${data.left}` : ''} ${data.right ? `${data.right}` : ''} ${data.bottom ? `${data.bottom}` : ''}`}
            >
              <img
                src={data.icon}
                alt={data.description}
                className="max-h-[35px] mt-2 mr-2 rounded-full bg-[#fff8e8]"
              />
              <h6 className="font-bold text-md  text-[#1c4980]">
                {data.count}
                <p className="font-normal text-xs  text-[#1c4980]">{data.title}</p>
              </h6>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default CompeteHero;

