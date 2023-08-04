import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselImages, responsive } from "../../Shared/CompeteData";
const SlidingBrand = ({ small, title }: any) => {
  return (
    <div className="gap-2 md:items-center md:h-[110px] lg:mt-[-105px] z-50 mt-20 mb-10 ">
      <h2 className="md:hidden sm:block text-2xl ml-6 font-semibold">
        {small}
        <span className="">{title}</span>
      </h2>

      <div className=" flex flex-row h-full w-full mt-3 bg-white p-5 border:none sm:border-t-2 sm:border-b-2 sm:border-[#DDE5EA] z-0 relative overflow-hidden">
        <div className=" flex flex-col">
          <h1 className="w-40 mt-2 hidden lg:block">
            {small}
            <p className="font-normal sm:font-bold">{title}</p>
          </h1>
        </div>

        <div className="flex-grow w-full flex-col">
          <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={2000}
            arrows={false}
            rewind
          >
            {carouselImages.map((image: any, index: any) => (
              <div
                key={index}
                className="w-[75px] h-[70px] px-2 py-1 border md:border-none sm:border-gray-500 rounded-3xl"
              >
                <img src={image} alt="error" className="img" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SlidingBrand;
