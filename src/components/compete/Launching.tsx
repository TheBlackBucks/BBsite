import React from 'react'

function Launching() {
  return (
    <div className='flex justify-center relative mt-10 '>

          <div className="hidden lg:flex justify-center">
          <span className="absolute top-[430px] left-[40px] hidden lg:block">
              <img src="./CompeteImages/blue_dot_center.png" alt="" />
            </span>

            <span className="absolute top-[-50px] right-[40px] hidden lg:block">
              <img src="./CompeteImages/blue_dot_center.png" alt="" />
            </span>
            
            <div className='max-w-[80%] '>
              <img src='https://d8it4huxumps7.cloudfront.net/uploads/images/63e0c2eddb135_industry_veterans.png?d=2360x912' className='max-h-[600px]' alt='' />
            </div>

            <div>
              <button className="px-5 flex text-3xl py-2 text-white bg-[#1c4980] rounded-md shadow-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 absolute top-[330px] left-[260px]">
              Subscribe 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-8 ml-3 mt-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              </button>
            </div>
          </div>

            <div className="sm:block lg:hidden justify-center p-5">
              <div className='max-w-full '>
                <img src='https://d8it4huxumps7.cloudfront.net/uploads/images/63e0c2fdd32de_industry_veterans_mobile.png?d=684x1094' className='max-h-[600px]' alt='' />
              </div>
              <div>
                <button className="px-4 flex text-4xl py-2 text-white bg-[#1c4980] rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 absolute top-[200px] left-[45px]">
                Subscribe <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-8 ml-3 mt-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </button>
              </div>
            </div>

    </div>
  )
}

export default Launching;
