import React from 'react'
import Carousel from 'react-elastic-carousel'
import { classroomImages, titles, coursesCards } from '../../api/learn.api';

const Banner = () => {
  const settings = {
    itemsToShow:1,
    itemsToScroll: 1,
    autoPlaySpeed:2000,
    showArrows:false,
    pagination:false,
    responsive:'responsive'
  }

  return (
    <div className='bg-orange-400 max-h-fit'>
      <div className="container mx-auto bg-green-300 p-10">
        <div className='px-10 bg-yellow-300 flex justify-center'> 
          <div className='bg-white flex-7/12 p-4'>
            <div>
              <div className='flex items-center'>
                <div>
                  <p className='font-bold text-4xl block'> Unstop </p>
                  <hr className="my-3 border-t-2 border-yellow-500 w-10/12" />
                </div>
                {/* <div>
                  <Carousel verticalMode enableAutoPlay showArrows={false}>
                  {
                    classroomImages.map((item, index) => (
                      <div key={index}>
                        <img src={item.langimages} alt='languages' className='h-auto max-w-full' />
                      </div>
                    ))
                  }
                  </Carousel>
                </div> */}
              </div>
              <div className='bg-white mb-5'>
                <p className='text-base font-medium'> {titles.title1} </p>
                <p className='text-base font-medium'> {titles.title2} </p>
              </div>
              <div className='bg-white flex items-center mb-5'> 
                <div className='mr-3'>
                  <img src='./assets/learnpage/course_avatar.png' alt='users' className='h-auto w-24'/>
                </div>
                <div>
                  <p className='font-bold text-lg/[20px] text-green-600 block'> ~50,324+ </p>
                  <span className='text-sm text-black font-light'> students are preparing with us for their placement journey </span>
                </div>
              </div>
              <div className='bg-white flex items-center pl-0'>
                {
                  coursesCards.map((items) => (
                    <div key={items.id} className='p-2.5 w-64 flex flex-col bg-center rounded-lg transition-all transform hover:-translate-y-3 duration-300'>
                      <img src={items.card} alt={items.name} className='cursor-pointer'/>
                      <p className='text-black absolute text-sm p-2 font-semibold'> {items.title} </p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className='bg-white flex-3/12'>
            <img 
              src='./assets/learnpage/classroom-banner.png' 
              alt='image' 
              className='h-auto max-w-sm'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
