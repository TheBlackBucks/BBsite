import React, { useState } from 'react';
import { home_section } from '../../Shared/HomeData';

function HeroHome() {


    return (
        <div className="grid  gap-4 mt-5 md:mt-8 bg-white md:grid-cols-2 md:justify-between  sm:px-[160px] px-5 ">
            <span className="absolute top-[180px] left-[40px] hidden lg:block">
                <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63d4b178b31d5_home_hero_before.svg" className='h-[95px]' alt="" />
            </span>

            <span className="absolute top-[440px] right-[40px] hidden lg:block">
                <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63de43bdce283_multi_color_dot.png" className='h-[102px]' alt="" />
            </span>

            <div className="flex items-center">
                <div className="mt-5 sm:mt-0 p-1">
                    <div className='leading-[36px] sm:leading-[60px]'>
                    <p className="sm:text-[40px] text-[30px] font-normal">{home_section.section_heading1}</p>
                    <p className="sm:text-[50px] text-[33px] font-bold">{home_section.section_heading2}</p>
                    </div>

                    <span className="absolute mt-[-90px] left-[670px] transform -rotate-90 translate-x-[-50%] translate-y-[-50%] hidden lg:block">
                        <img src='https://d8it4huxumps7.cloudfront.net/uploads/images/students/dotted-vector.svg' alt="" />
                    </span>
                    {/* <div className="border-t border-primary mt-2 mb-3"></div> */}
                    <div className="border border-yellow-500 text-[#f2c034] bg-[#f2c034] p-[0.4px] w-[130px] sm:w-[190px] mt-5 mb-5"></div>
                    <p className="mt-[15px] text-[15px] sm:text-[20px]">{home_section.section_paragraph}</p>
                </div>
            </div>


           
                <div className="grid gap-4 sm:gap-5 grid-cols-3 mt-10 sm:mt-0 p-1 sm:p-6">
                    {home_section.sectionData.map((item, index) => (
                        <div
                            key={index}
                            className="relative transition-all cursor-pointer transform hover:translate-y-[-15px] duration-300"

                        >
                            <p className="hidden sm:flex absolute left-[20px] top-[12px] sm:left-[20px] sm:top-[20px] sm:text-[18px] text-[13px] font-bold">
                                {item.content}
                            </p>
                            <p className=" flex sm:hidden justify-center sm:text-[18px] text-[13px] font-bold">
                                <span className='absolute top-[12px]'>{item.content}</span>
                            </p>
                            <img
                                src={item.image}
                                alt="Error"
                                className="w-full h-auto"

                            />
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default HeroHome;
