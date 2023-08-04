import React from "react";

function MentorWorkBanner() {
  return (
    <div className="p-0 sm:p-[50px]">
      <div className=" text-center">
        <div className="flex justify-center">
          <div className="w-12 h-auto">
            <img
              className="w-[80%]"
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/mentor/join-icon.png"
            />
          </div>
          <h1 className="font-bold text-4xl mb-5 text-center ml-3">
            How does it Work?
          </h1>
        </div>

        <span className="text-[20px] mt-1 font-normal">
          Just a 3-step process: Find your mentor, select a slot and connect
          with them 1:1. It is that easy!
        </span>
      </div>
      <div className="hidden sm:flex justify-center mt-10 mb-10">
        <img
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/mentorship/how-does-it-work.png?d=2555x567"
          className="w-[90%]"
          alt=""
        />
      </div>

      <div className="flex sm:hidden justify-center mt-10 mb-10">
        <img
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/mentorship/how-does-it-work-mobile-banner.png?d=622x1762"
          className="w-[90%]"
          alt=""
        />
      </div>
    </div>
  );
}

export default MentorWorkBanner;
