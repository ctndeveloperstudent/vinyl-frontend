import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>Vinyls is the ultimate destination for record collectors and music lovers alike. We specialize in carefully curated vinyl records, from timeless classics to rare finds, bringing the warm, authentic sound of analog music to your collection. Whether you're a seasoned audiophile or just beginning your vinyl journey, our selection and passion for music make every visit an experience worth spinning.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>STORE</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>(02) 5550 7890</li>
            <li>Contact@vinyls.com.au</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ vinyls.com.au - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer