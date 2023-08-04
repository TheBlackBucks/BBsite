import React, { useRef } from "react";
import Carousel from "react-multi-carousel";

function Mentors({ text }: any) {
  const carouselRef = useRef(null);
  const handleCarouselNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handleCarouselPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      className="mt-20
         lg:px-[150px] sm:p-none"
    >
      <div className="text-3xl pl-5">
        <h1>Ace competitions with 1-on-1 guidance from top mentors:</h1>
      </div>
      <div
        className="md:flex-grow sm:block gap-2 mt-3
         text-center justify-center sm:overflow-auto overflow-x-scroll
         "
      >
         <div className="hidden lg:flex absolute left-20 mt-[125px]">
            <button
              className="bg-white p-2 rounded-full mr-2 border border-[#dadce0] text-[#1c4980]"
              onClick={handleCarouselNext}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
             </svg>

            </button>
            
          </div>
        
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          autoPlay={false}
          showDots={false}
          arrows={false}
          infinite
          containerClass="carousel-container"
          itemClass="carousel-item"
        >

          {text.feature_imgs.map((feature_image: any, index: any) => (
            <div key={index} className="">
              <div className="max-w-[370px] max-h-[325px] mt-3 border border-[#FFBA00] rounded-2xl ml-3 mr-3">
                <img
                  className="h-[90px] object-cover border border-gray-300 rounded-t-2xl"
                  src={feature_image.image}
                  alt="green iguana"
                />
                <div className="justify-center w-full flex mt-[-50px]">
                  <img
                    src={feature_image.cirImg}
                    className="rounded-[50%] justify-center w-[100px] h-[100px]"
                    alt=""
                  />
                </div>

                <div className="p-2 flex justify-center mt-1">
                  <h5 className="text-xl">{feature_image.name}</h5>
                </div>
                <div className="pb-3">
                  <p className="text-sm">{feature_image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="hidden lg:flex absolute right-20 text-center mt-[-140px]">
            <button
              className="bg-white p-2 rounded-full border border-[#dadce0] text-[#1c4980]"
              onClick={handleCarouselPrev}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>

            </button>
          </div>
      </div>

      <div className="mt-7 flex justify-center">
        <a href="https://unstop.com/find-a-mentor">
          <button className="flex bg-white hover:bg-[#1c4980] hover:text-white text-[#1c4980] font-bold py-2 px-8 rounded-3xl border border-[#1c4980]">
            Explore All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-6 ml-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Mentors;