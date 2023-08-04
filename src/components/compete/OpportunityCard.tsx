import React from "react";

const OpportunityCard = ({ text }: any) => {
  return (
    <div className="p-6">

      <div  className="mt-10 lg:pl-[140px] sm:pl-2">
        <h1 className="font-semibold sm:text-3xl text-[16px] "> {text.exp_heading}</h1>
        <h1 className="mt-2 sm:text-[16px] text-[12px]">{text.exp_paragraph}</h1>
      </div>
       
      <div className="gap-0 sm:gap-4 mt-4 lg:flex sm:grid-2 justify-center grid grid-cols-2 md:grid-cols-4">
          {text.exp_imgs.map((expImage: any, index: number) => {
            console.log(expImage.backgroundColor,'backgroundColor')
           return <div key={index}
              //  className={style.imgHov} 
               className={`mt-4 transition-all cursor-pointer transform hover:translate-y-[-15px] duration-300
              ${expImage.bgColor}
           
              relative
              min-h-[100px]
              w-[155px]
              sm:min-h-[170px]
              sm:min-w-[290px]   
              rounded-xl`}
            >
              
              <img src={expImage.image} className="absolute right-0 bottom-0 h-[80px] sm:h-[130px] rounded-xl" alt="Photo" />


              <div
               className="relative mt-3 leading-6"
              >
                {expImage.text.map((txt: string, index: number) => (
                  <h2
                  className={`${expImage.textColor} 
                  ${
                    index === 0 ? 'text-[9px] lg:text-[14px]' : 'text-[12px] lg:text-[18px]'
                    }
                 pl-4`}
                    // className="text-[#81320e] text-[expImage.textColor] font-[{{ index !== 0 ? 'medium' : 'large' }}] pl-4 text-[11px] lg:text-[18px] "
                  >
                    {txt}
                  </h2>
                ))}
              </div>
            </div>
         })}
        </div>

        <span className="absolute top-[1470px] left-[40px] hidden lg:block transform rotate-180">
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63de48d55dbba_yellow_dot.png" className='h-[100px]' alt="" />
        </span>
    </div>
  );
};

export default OpportunityCard;
