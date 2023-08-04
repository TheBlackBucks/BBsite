import React, { useRef } from "react";
import "../styles/showcase.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, , Navigation]);

const Showcase = ({ type }) => {
  const carouselRef = useRef(null);

  const handleCarouselNext = () => {
    if (carouselRef.current && carouselRef.current.swiper) {
      carouselRef.current.swiper.slideNext();
    }
  };

  const handleCarouselPrev = () => {
    if (carouselRef.current && carouselRef.current.swiper) {
      carouselRef.current.swiper.slidePrev();
    }
  };
  const banners = [
    "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63e11ac59ca18_Codegoda-2023-Unstop-1280x500.jpg?d=1266x494",
    "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63e0f87cc8f87_Rotating__5_.jpeg?d=1266x494",
    "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63e4c084079e8_Rotating__3_.jpg?d=1266x494",
    "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63a43fe8bb9b3_Rotating-Banner.jpg?d=1266x494",
    "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63f3487fee501_Homepage_Banner.png?d=1266x494",
    "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/63da58d8acba8_Rotating-Banner.jpg?d=1266x494",
  ];

  const swiperSettings = {
    spaceBetween: 1,
    navigation: {
      nextEl: ".custom-next-button",
      prevEl: ".custom-prev-button",
    },
    pagination: { clickable: true },
    autoplay: { delay: 3500 },
    loop: true,
    speed: 800,
    breakpoints: {
      1150: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <section className={`showcase ${type}-showcase`}>
      <div className="showcase-container container">
        <div className="hidden lg:flex absolute left-[120px] mt-[100px]">
          <button
            className="bg-white p-2 rounded-full mr-2 border border-[#dadce0] text-[#1c4980] custom-prev-button"
            onClick={handleCarouselNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <Swiper className="min-h-[200px] sm:min-h-[300px]" {...swiperSettings}>
          {banners.map((ele, i) => (
            <SwiperSlide key={i} className="">
              <img src={ele} alt={"brand"} />
            </SwiperSlide>
          ))}
          {/* Add the pagination outside the Swiper component */}
          <div className="swiper-pagination"></div>
        </Swiper>
        <div className="hidden lg:flex absolute right-[130px] text-center mt-[-195px]">
          <button
            className="bg-white p-2 rounded-full border border-[#dadce0] text-[#1c4980] custom-next-button"
            onClick={handleCarouselPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
