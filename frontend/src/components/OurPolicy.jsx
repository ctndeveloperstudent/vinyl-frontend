import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div>
        <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="Exchange Icon" />
        <p className='font-semibold'>Seamless Vinyl Exchange</p>
        <p className='text-gray-400'>Easily swap your records hassle-free.</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="Return Icon" />
        <p className='font-semibold'>7-Day Return Guarantee</p>
        <p className='text-gray-400'>Changed your mind? Return it within 7 days.</p>
      </div>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.support_img} alt="Support Icon" />
        <p className='font-semibold'>Dedicated Music Lovers Support</p>
        <p className='text-gray-400'>We're here for you 24/7 – real people, real help.</p>
      </div>


    </div>
  )
}

export default OurPolicy