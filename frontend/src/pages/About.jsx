import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Vinyls was created for music lovers who appreciate the rich, authentic sound of analog records. Our store is dedicated to curating a diverse collection of vinyl, from timeless classics to rare and exclusive releases, ensuring every collector finds their perfect spin.</p>
          <p>We believe in the magic of vinyl—how it connects generations, preserves musical history, and delivers an unmatched listening experience. Whether you're hunting for a legendary album or discovering a new favorite, our carefully selected records bring music to life.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Vinyls, our mission is to keep the spirit of analog music alive. We strive to make vinyl accessible, enjoyable, and a key part of your musical journey, offering a seamless shopping experience from discovery to delivery.</p>

        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Authentic Sound:</b>
          <p className='text-gray-600'>We carefully curate our collection to bring you high-quality vinyl records that deliver the warm, rich sound only analog can provide.</p>
        </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exclusive Selection:</b>
        <p className='text-gray-600'>From timeless classics to rare finds, our collection is handpicked to satisfy both seasoned collectors and new vinyl enthusiasts.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Passionate Support:</b>
        <p className='text-gray-600'>Our team shares your love for vinyl and is here to help, ensuring you find the perfect addition to your collection.</p>
      </div>

      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
