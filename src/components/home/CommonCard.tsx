import React from "react";
import { learn_practice_mentorship } from "../../Shared/HomeData";

const MainCard: React.FC = () => {
  return (
    <div className="grid lg:flex gap-6 justify-center sm:mt-16 relative p-6 sm:p-4">

      <div className='-mt-6 mb-16 sm:hidden flex relative bg-[#f2f8fe] w-full h-[70px] justify-center px-8 rounded-2xl items-center'>
       <span className="mr-[-15px] z-30">
         <img src='https://d8it4huxumps7.cloudfront.net/uploads/images/courses/courses-user1.svg' className="rounded-full " alt='' />
       </span>
       <span className="mr-[-15px] z-20" >
         <img src='https://d8it4huxumps7.cloudfront.net/uploads/images/courses/courses-user2.svg' className="rounded-full" alt='' />
       </span>
       <span className="z-10">
         <img src='https://d8it4huxumps7.cloudfront.net/uploads/images/courses/courses-user3.svg' className="rounded-full " alt='' />
       </span>
        <p className="ml-3 text-[13px] font-semibold">~6 Mn Bright Minds believe in us for their Bright Career!</p>
      </div>

      {learn_practice_mentorship.map((item, index) => (
        <div className="w-full sm:w-3/12" key={index}>
          <div className="relative imgHov transition-all cursor-pointer transform hover:translate-y-[-15px] duration-300">
            <h1
              className={`w-full ${item.textColor} text-center absolute top-[145px] sm:top-[155px] font-bold text-[16px] sm:text-[24px]
               
              `}
             
            >
              {item.text}
            </h1>
            <img src={item.image} className="" alt={`Photo ${index + 1}`} />
          </div>
        </div>
      ))}

              <span className="absolute top-[-50px] right-[40px] hidden lg:block">
                <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63de43bdce283_multi_color_dot.png" className='h-[102px]' alt="" />
            </span>
    </div>
  );
};

export default MainCard;

