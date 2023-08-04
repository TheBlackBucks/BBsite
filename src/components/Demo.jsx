import React, { useRef } from "react";
import Carousel from "react-multi-carousel";

function Mentors({ text }: any) {
  const carouselRef = useRef(null);

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
      className="mb-20 mt-10
         lg:px-[150px] sm:p-none"
    >
      <div className="text-3xl">
        <h1>Ace competitions with 1-on-1 guidance from top mentors:</h1>
      </div>
      <div
        className="md:flex-grow sm:block gap-2 mt-3
         text-center justify-center 
         "
      >
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
              <div className="max-w-[285px] max-h-[285px] mt-3 border border-[#FFBA00] rounded-2xl">
                <img
                  className="h-[90px] object-cover border border-gray-300 rounded-t-2xl"
                  src={feature_image.image}
                  alt="green iguana"
                />
                <div className="justify-center w-full flex mt-[-50px]">
                  <img
                    src="https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/6401dfa708db6.webp?d=240x240"
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

{
  /* <div className="grid grid-cols-8 gap-4 m-5 h-14 w-full">
      
        <button className="px-4 py-2 bg-[#e5f1fc] text-[#1c4980]  rounded-lg transition-colors duration-300 ease-in-out border border-[#0073e6] cursor-pointer">
         Competitions
        </button>

        <button className="px-4 py-2 bg-white hover:bg-[#e5f1fc] text-[#1c4980] rounded-lg transition-colors duration-300  border hover:border-[#0073e6] cursor-pointer">
         Hackathons
        </button>
        
        <button className="px-4 py-2 bg-white hover:bg-[#e5f1fc] text-[#1c4980]  rounded-lg transition-colors duration-300  border hover:border-[#0073e6] cursor-pointer">
          Quizzes
        </button>

        <button className="px-4 py-2 bg-white hover:bg-[#e5f1fc] text-[#1c4980]  rounded-lg transition-colors duration-300  border hover:border-[#0073e6] cursor-pointer">
          Scholorship
        </button>
        
        <button className="px-4 py-2 bg-white hover:bg-[#e5f1fc] text-[#1c4980]  rounded-lg  transition-colors duration-300  border hover:border-[#0073e6] cursor-pointer">
          Workshops
        </button>
      
        <button className="px-4 py-2 bg-white hover:bg-[#e5f1fc] text-[#1c4980]  rounded-lg transition-colors duration-300  border hover:border-[#0073e6] cursor-pointer">
          Conference
        </button>

        <button className="px-4 py-2 bg-white hover:bg-[#e5f1fc] text-[#1c4980]  rounded-lg transition-colors duration-300  border hover:border-[#0073e6] cursor-pointer">
         Culturalevents
        </button>
      </div> */
}

// indicatorContainerProps={{
//   style: {
//     marginTop: '-30px',
//   },
// }}

// indicatorIconButtonProps={{               //dot button
//   style: {
//   marginTop:'30px',

//   },
// }}

// activeIndicatorIconButtonProps={{
//   style: {
//     color: '#000000',
//   },
// }}

// indicatorIcon={
//   <div
//     style={{
//       width: '12px',
//       height: '12px',
//       borderRadius: '50%',
//       margin: '2px',
//     }}
//   />
// }
