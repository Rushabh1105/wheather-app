import React from 'react';
import partialcloudy from '../Assets/partialcloudy.png';
import cloudy from '../Assets/cloudy.png';
import rain from '../Assets/rain.png'

function Forecast({title}) {
  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>{title} forecast</p>
      </div>
      <hr className='my-2' />
      <div className='flex flex-row items-center justify-between text-white'>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-light text-sm'>04:30 PM</p>
          <img src={cloudy} alt='wheather-sts' className='w-12 my-1'/>
          <p className='font-medium'>22°</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-light text-sm'>04:30 PM</p>
          <img src={partialcloudy} alt='wheather-sts' className='w-12 my-1'/>
          <p className='font-medium'>22°</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-light text-sm'>04:30 PM</p>
          <img src={rain} alt='wheather-sts' className='w-12 my-1'/>
          <p className='font-medium'>22°</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-light text-sm'>04:30 PM</p>
          <img src={cloudy} alt='wheather-sts' className='w-12 my-1'/>
          <p className='font-medium'>22°</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='font-light text-sm'>04:30 PM</p>
          <img src={cloudy} alt='wheather-sts' className='w-12 my-1'/>
          <p className='font-medium'>22°</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast