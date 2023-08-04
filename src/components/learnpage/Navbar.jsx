import React from 'react';
import { certificationcourse, placementlist } from '../../api/learn.api';

const Navbar = () => {

  return (
    <nav className="bg-white-500 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-13">
        <div className='flex space space-x-4'>
          <div className='flex pr-3 cursor-pointer lg:relative'>
            <p className='pr-2 text-sm font-medium'> Crash Course to Placements </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-5 font-normal leading-4 inline-block ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            {/* <div className='bg-white lg:absolute top-9 rounded-b-xl shadow-lg w-64'>
              {
                placementlist.map((value, index) => (
                  <ul key={index} className='flex items-center'>
                    <li className='p-3'>
                      <a href='/' className='flex items-center w-64'>
                        <img src={value.image} alt='image1' className='h-auto w-16'/>
                        <p className='text-sm ml-2 whitespace-nowrap'> {value.item} </p>
                      </a>
                    </li> 
                  </ul>
                ))
              }
            </div> */}
          </div>

          <div className='flex pr-3 cursor-pointer lg:relative'>
            <p className='pr-2 text-sm font-medium' x-data="{dropdownOpen:false}"> Certification Course </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-5 font-normal leading-4 inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            <div className='bg-white lg:absolute top-9 rounded-b-xl shadow-lg w-64'>
              {
                certificationcourse.map((values, index) => (
                  <ul className='lg:w-48' key={index}>
                    <li className='flex hover:bg-slate-100 hover:w-64'>
                      <a href='#'>
                        <p className='cursor-pointer text-sm p-3.5 font-medium mr-2'> {values.names} </p>
                      </a>
                    </li>  
                  </ul>
                ))
              } 
            </div>
          </div>
        </div>

        <div>
          <a href='/'>
            <button type='button' className="rounded-full text-xs font-medium w-24 h-8 border border-blue-600 hover:bg-blue-600 hover:text-white"> 
              My Course 
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

{/* <ul>     
  <li className='flex hover:bg-slate-100 rounded-b-xl'>
    <a href='#'>
      <p className='cursor-pointer text-sm p-3.5 font-medium'> Business and Management </p>
    </a>
  </li>
</ul> */}