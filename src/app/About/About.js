import React from 'react'
import AnChart from '../Chart/Chart'

export default function About() {
  return (
    <div>
      <div className='pt-20 flex flex-col sm:flex-row sm:justify-around'>
        <p className=' text-[25px] lg:text-[40px] text-black'>About us</p>
        <div>
          <p className='text-black text-[12px] lg:text-[20px] pt-3 sm:pt-0'>At Qovex, we specialize in innovative digital marketing strategies that drive <br className='hidden sm:block'/> results.Our team is dedicated to helping buisness grow and succeed online.</p>
          <p className=' pt-3 sm:pt-6 text-[#a0a09e] text-[12px] lg:text-[20px]'>With tailored solutions and a focus on measurable outcomes , we empower brands <br className='hidden sm:block'/> to connect with their audience and achieve their goals in the digital landscapes.</p>
        </div>
      </div>
      <div className='pt-10 w-[100%]'>
      <AnChart/>
      </div>
    </div>
  )
}
