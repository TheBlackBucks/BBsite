import React from "react";

function OurNumbers({ text }: any) {
  return (
    <div className="p-5 mt-10 sm:mt-16 sm:mb-[50px] mb-10">
      <div className="flex
        pl-2 sm:pl-[170px] sm:mb-10 mb-5
       ">
        <h1 className="text-3xl sm:text-[56px]">Our</h1>
        <h1 className=" font-normal sm:font-bold text-3xl sm:text-[56px] ml-3">Numbers</h1>
        <img
          src="https://cdn.unstop.com/uploads/images/home/graph-icon.svg?d=38x27"
          className="ml-3 sm:ml-3 sm:mt-2 h-5 mt-2 sm:h-6"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center">
        {text.num_texts.map((section: any, index: any) => (
          <div
            key={index}
            className={`
            p-4 sm:p-8 border border-gray-110 h-[100px] w-[120px] sm:h-[220px] sm:w-[320px] flex relative
            ${index === 0 ? 'rounded-tl-3xl  lg:rounded-l-3xl' : ''}
            ${index === 2 ? ' rounded-tr-3xl lg:rounded-tr-3xl' : ''}
          `}
          >
            <div
              className={`${section.cir_background} h-20 w-20 sm:h-[130px] sm:w-[130px] rounded-full m-5 sm:m-0 absolute`}
            ></div>
            <p className={`${section.color} text-3xl sm:text-5xl font-bold z-10 absolute left-[32px] top-[42px] sm:left-[55px] sm:top-[95px]`}>
              {section.number}
            </p>
            <p className={`${section.color} text-lg sm:text-2xl z-10 text-28px absolute left-[20px] top-[70px] sm:left-[60px] sm:top-[160px] `}>
              {section.text}
            </p>
          </div>
        ))}
        <div className="hidden lg:block ml-2">
          <img src={text.image_right} alt="#" className="w-[200px]" />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="hidden lg:flex justify-center items-center mr-2">
          <img src={text.image_left} alt="#" className="w-[200px]" />
        </div>
        {text.num_texts.map((section: any, index: any) => (
          <div
            key={index}
            className={`
            p-4 sm:p-8 border border-gray-110 h-[100px] w-[120px] sm:h-[220px] sm:w-[300px] flex relative
            ${index === 0 ? 'rounded-bl-3xl lg:rounded-bl-3xl' : ''}
            ${index === 2 ? 'rounded-br-3xl lg:rounded-r-3xl' : ''}
          `}
          >
            <div
              className={`${section.cir_background} h-20 w-20 sm:h-[130px] sm:w-[130px] m-5 sm:m-0 rounded-full absolute`}
            ></div>
            <p className={`${section.color} text-3xl sm:text-5xl font-bold  z-10 absolute left-[32px] top-[42px] sm:left-[55px] sm:top-[95px]`}>
              {section.number}
            </p>
            <p className={`${section.color} text-lg sm:text-2xl z-10 text-28px absolute left-[20px] top-[70px] sm:left-[60px] sm:top-[160px] `}>
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurNumbers;