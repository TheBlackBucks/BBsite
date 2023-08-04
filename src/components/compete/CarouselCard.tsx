import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import { images } from '../../Shared/CompeteData';
// import { images } from '@/shared/urls';

function CardCarousel() {
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
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-white text-black sm:m-0 mt-16 md:mt-[110px] flex justify-center ">
     <span className="absolute top-[810px] left-[40px] hidden lg:block transform rotate-180">
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63de48d55dbba_yellow_dot.png" className='h-[100px]' alt="" />
        </span>
       {/* <span className="absolute top-[1030px] left-[40px] hidden lg:block">
          <img src="./CompeteImages/blue_dot_center.png" alt="" />
        </span> */}

        {/* <span className="absolute top-[800px] right-[40px] hidden lg:block">
          <img src="./CompeteImages/blue_dot_center.png" alt="" />
        </span> */}

      <div  className="min-h-[130px] min-w-[300px] sm:h-[250px] sm:w-[1200px] sm:p-0 px-3">
      <div className="hidden lg:flex absolute left-[115px] mt-[85px]">
            <button
              className="bg-white p-2 rounded-full mr-2 border border-[#dadce0] text-[#1c4980]"
              onClick={handleCarouselNext}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
             </svg>

            </button>
            
          </div>
        <Carousel
        ref={carouselRef}
          autoPlay={true}
          responsive={responsive}
          infinite={true}
          partialVisible={true}
          arrows={false}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          renderButtonGroupOutside={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          showDots={false}
        >
          {images.map((image, index) => (
            <div key={index} className="flex justify-center px-3">
              <div className="hidden sm:block">
                <img src={image.leftImage} alt={`Left Image ${index + 1}`} className="md:max-h-[140px] md:max-w-[400px] lg:max-h-[228px] lg:max-w-[600px]  rounded-lg" />
              </div>
              <div>
                <img src={image.rightImage} alt={`Right Image ${index + 1}`} className="md:max-h-[140px] md:max-w-[400px] lg:max-h-[228px] lg:max-w-[600px]  md:ml-5 rounded-lg" />
              </div>
            </div>
          ))}
        </Carousel>
        <div className="hidden lg:flex absolute right-[115px] text-center mt-[-140px]">
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
    </div>
  );
}

export default CardCarousel;
