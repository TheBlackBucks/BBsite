import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import { MdPeopleAlt } from "react-icons/md"
import { MdDateRange } from "react-icons/md"


function FeatureOpportunity({ text }:any) {
  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
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

  return (
    <div className="mt-5 sm:mt-20 w-full flex justify-center">
      <div className="lg:w-[80%] sm:w-full max-w-full text-[#1c4980] bg-white sm:bg-[#f5fafe] border border-white sm:border-[#dde5ea] p-8 rounded-3xl">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[16px] lg:text-3xl font-semibold">
                {/* {text.feature_heading} */}
                Featured Opportunities
            </h1>
            <p className="text-[12px] sm:text-[16px] mt-2">
                {/* {text.feature_paragraph} */}
                Participate in these exceptional opportunities curated for the exceptional you!

                </p>
          </div>

          <div className="hidden lg:block">
            <button
              className="bg-white p-2 rounded-full mr-2 border border-[#dadce0] text-[#1c4980]"
              onClick={handleCarouselNext}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
             </svg>

            </button>
            <button
              className="bg-white p-2 rounded-full border border-[#dadce0] text-[#1c4980]"
              onClick={handleCarouselPrev}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>

            </button>
          </div>

        </div>

        <div className="mt-3">
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            autoPlay
            showDots={false}
            arrows={false}
            infinite
            containerClass="carousel-container"
            itemClass="carousel-item"
          >
            {text.feature_imgs.map((feature_image:any, index:any) => (
              <div key={index}>
                  <div className=" max-w-[370px] max-h-[365px] mt-3 rounded-3xl border border-[#d7d7d7]">
                  <img
                    className="w-full h-full object-cover rounded-3xl"
                    src={feature_image.image}
                    alt="green iguana"
                  />
                  <div className="p-2 mt-1">
                    <p className="text-[14px] px-3">{feature_image.title}</p>
                    <p className="text-sm">{feature_image.sub_title}</p>
                  </div>

                  <div className=" flex p-6 gap-2 mt-5 sm:mt-3">
                    <button className="flex px-3 py-1 rounded-3xl bg-[#e5f1fc] text-[#1c4980] text-lg sm:text-sm">
                    <MdPeopleAlt className="mt-1 mr-2" size={15} />
                        <span className="text-[11px] sm:text-[13px]">{feature_image.reg}</span>
                    </button>
                   <button className="flex px-4 py-1 rounded-3xl bg-[#e5f1fc] text-[#1c4980] text-lg sm:text-sm">
                    {/* < svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg> */}
                    <MdDateRange className="mt-1 mr-2" size={14} />

                    <span className="text-[11px] sm:text-[13px]">{feature_image.day}</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <span className="absolute top-[2310px] right-[40px] hidden lg:block">
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63de48d55dbba_yellow_dot.png" className='h-[100px]' alt="" />
        </span>
      </div>
    </div>
  );
}

export default FeatureOpportunity;
