import React from 'react';
import{ AiOutlineInstagram } from "react-icons/ai";
import{ BsChevronRight } from "react-icons/bs";
import{ AiFillInstagram} from "react-icons/ai";
import{ AiFillLinkedin } from "react-icons/ai";
import{ AiFillTwitterCircle } from "react-icons/ai";
import{ AiFillRedditCircle } from "react-icons/ai";
import{ BsTelegram } from "react-icons/bs";
import{ AiFillYoutube } from "react-icons/ai";
import{ AiFillFacebook } from "react-icons/ai";
import{ AiFillHeart } from "react-icons/ai";







function DownloadApp() {
    const socialMediaIcons = [
        { icon: <AiFillLinkedin />, name: 'LinkedIn' },
        { icon: <AiFillInstagram />, name: 'Instagram' },
        
        { icon: <AiFillTwitterCircle />, name: 'Twitter' },
        { icon: <AiFillRedditCircle />, name: 'Reddit' },
        { icon: <BsTelegram />, name: 'Telegram' },
        { icon: <AiFillYoutube/>, name: 'YouTube' },
        { icon: <AiFillFacebook/>, name: 'Facebook' },
      ];
      const iconMargin = '5px';

  return (
    <div className="mt-50">
      <div className="sm:hidden">

        <div className="flex justify-center  p-5">
          <div className="relative max-w-[1180px]">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63db3b108e74e_download_app_mobile_new.png?d=684x1154" alt="" className='w-full' />
            <div className="flex absolute gap-5 justify-center top-[220px] w-full">
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63db3b3e19aa2_app_store.png?d=368x114" alt="" className='h-[44px]' />
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63db3b4dace41_play_store.png?d=368x114" alt="" className='h-[44px]' />
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <button
            className="bg-[#245DB0] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl min-w-[340px]"
          >
            <div className="flex  items-center py-2">
              <img src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/host-opportunity-icon.svg" className='h-[40px]' alt="" />
              <span className="ml-5 font-bold text-2xl">Host Opportunity</span>
              <BsChevronRight  strokeWidth={1} className='absolute right-12 text-[16px] font-bold ' />
            </div>
          </button>
        </div>
        <div className="border mt-[50px] border-[#dcdcdc] text-[#dcdcdc] bg-[#dcdcdc] p-[3px] w-full sm:w-[190px] mb-5"></div>
      </div>

      <div className="hidden sm:flex justify-center p-5">

        <div className="relative max-w-[1180px]">
          
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63db3ac0bfbd4_download_app_new.png?d=2360x912 " alt="" width="100%" />
          <div className="flex absolute gap-10 justify-center bottom-[50px] w-full">
          <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63db3b3e19aa2_app_store.png?d=368x114" alt="" className='h-[60px]' />
              <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63db3b4dace41_play_store.png?d=368x114" alt="" className='h-[60px]' />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 sm:hidden justify-center p-5 mb-20">
        <p className="text-[14px] mt-2">Follow us on :</p>
        <div className="flex gap-9 mt-5">
          {socialMediaIcons.map((socialMedia, index) => (
            <span key={index} className='text-4xl text-slate-400'>
              {socialMedia.icon}
            </span>
          ))}
        </div>
     
        <span className="flex text-[13px] mt-8 mb-5">
          Built with 
          <AiFillHeart className='m-1 text-[#f85b93] text-3xl' />
          {/* <Favorite className="text-pink-500" fontSize="small" /> */}
           in India for the world
        </span>
       
        
      </div>
    </div>
  );
}

export default DownloadApp;

