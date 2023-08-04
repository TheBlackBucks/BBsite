import React from 'react'

function WorkBanner() {
  return (
       <div className='p-0 sm:p-[50px]'>
            <div className='hidden sm:flex justify-center mt-10 mb-10'>
              <img src='https://d8it4huxumps7.cloudfront.net/uploads/images/63cfcda15edad_how_it_works.png' className='w-[80%]' alt='' />
            </div>

            <div className='flex sm:hidden justify-center mt-10 mb-10'>
              <img src='https://d8it4huxumps7.cloudfront.net/uploads/images/63cfce09bce17_how_it_works_mobile.png' className='w-[80%]' alt='' />
            </div>

       </div>
  )
}

export default WorkBanner