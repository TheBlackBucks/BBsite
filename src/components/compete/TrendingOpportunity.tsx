import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import { trending_opportunity } from "../../Shared/CompeteData";

function TrendingOpportunity({ text }: any) {
  const carouselRef = useRef(null);
  const handleCarouselNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handleCarouselPrev = ({text}:any) => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  const buttonData = [
    "Competitions",
    "Hackathons",
    "Quizzes",
    "Scholarship",
    "Workshops",
    "Conference",
    "Cultural Events",
  ];
  

  return (
    <div
      className="mt-20
         lg:px-[150px] sm:p-none"
    >
      <div  className="mt-10 pl-5">
        <h1 className="font-normal text-3xl xs:text-base ">{text.trending_heading}</h1>
        <h1 className="mt-2">{text.trending_paragraph}</h1>
      </div>

       <div className="overflow-x-scroll sm:overflow-hidden">
      <div className="flex sm:grid-cols-7 gap-4 m-5 h-14 ">
        {buttonData.map((button, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${index === 0 ? "bg-[#e5f1fc]" : "bg-white"} hover:bg-[#e5f1fc] text-[#1c4980] rounded-lg transition-colors duration-300 border hover:border-[#0073e6] cursor-pointer`}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
    

      <div
        className="md:flex-grow sm:block gap-2 
         text-center justify-center 
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
              <div className="max-w-[400px] max-h-[325px] mt-3 border border-geay rounded-2xl ml-3 mr-3">
                <img
                  className="h-[90px] object-cover border border-gray-300 rounded-t-2xl"
                  src={feature_image.image}

                  alt="green iguana"
                />
                <div className="justify-center w-full flex mt-[-65px]">
                 <div className="border border-gray-300 rounded-xl">
                 <img
                    src={feature_image.sqrImg}
                    className="justify-center w-[90px] h-[85px] rounded-xl border-white border-8"
                    alt=""
                  />
                 </div>
                </div>

                <div className="mt-3">
                  <p className="text-2xl sm:text-lg">{feature_image.title}</p>
                </div>
                <div className="flex justify-center ">
                  <h5 className="text-lg sm:text-xs ">{feature_image.paragraph}</h5>
                </div>

                <div className="p-5 flex space-x-5 justify-center">
                    <button className="flex px-3 py-1 rounded-3xl bg-[#e5f1fc] text-[#1c4980]">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-1 mt-0.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                      <span className="sm:text-[13px] mt-0.5">{feature_image.reg}</span>
                    </button>
                    <button className="flex px-3 py-1 rounded-3xl bg-[#e5f1fc] text-[#1c4980]">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-1 mt-0.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>

                    <span className="sm:text-[13px] mt-0.5">{feature_image.day}</span>
                    </button>
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

    </div>
  );
}

export default TrendingOpportunity;