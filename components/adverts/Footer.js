import Image from 'next/image'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear(); 
  
  return (
    <div className='flex flex-col items-center overflow-hidden '>

      {/* first row item */}
      <div className='flex flex-col items-center pt-20'>
      <div className=' relative h-24 w-24'>
        <Image 
          src="/footer/logo.png"
          layout='fill'
          objectFit='cover'
          className=' h-full w-full'
        />
      </div>
      <h1 className=' text-4xl font-poppins'>YOUR #1 CHOICE!</h1>
      </div>

      {/* second row */}
      <div className='flex justify-evenly space-x-0 md:space-x-24 pt-16'>
        {/* 2nd row first items */}
        <div className='flex flex-col items-center'>
          <div className='relative  h-24 w-28'>
            <Image 
              src="/footer/ebs-hd.png"
              layout='fill'
              objectFit='cover'
              className=' h-full w-full'
            />
          </div>
         <h1>TV Shows ,Serious Movies , Latest News.</h1>
        </div>

        {/* 2nd row second items */}
        <div className='flex flex-col items-center'>
          <div className=' relative h-24 w-48'>
            <Image 
              src="/footer/ebs-cinema.png"
              layout='fill'
              objectFit='cover'
              className=' h-full w-full'
            />
          </div>
          <h1>Movie Showtimes, ethio Cinema </h1>
        </div>

        {/* 2nd row third items */}
        <div className='flex flex-col items-center'>
          <div className=' relative h-24 w-32'>
            <Image 
              src="/footer/music.png"
              layout='fill'
              objectFit='cover'
              className=' h-full w-full'
            />
          </div>
          <h1>Ethio Muisc, Reggae, Afro Beat</h1>
        </div>



      </div>

      {/* third row */}
      <div className='flex justify-evenly space-x-10 md:space-x-20 pt-16'>
        {/* 3rd row first item */}
        <div className='flex flex-col items-center'>
          <div className=' relative h-16 w-44'>
            <Image 
              src="/footer/dstv1.png"
              layout='fill'
              objectFit='cover'
              className=' h-full w-full'
            />
          </div>
          <h1 className=' font-poppins text-sm font-thin'>CHANNEL 365</h1>
        </div>

        {/* 3rd row second item */}
        <div className='flex flex-col items-center'>
          <div className=' relative h-16 w-44'>
            <Image 
              src="/footer/roku.png"
              layout='fill'
              objectFit='cover'
              className=' h-full w-full'
            />
          </div>
          <h1 className=' font-poppins text-sm font-thin'>iptv.ebstv.tv</h1>
        </div>

      </div>

      {/* fourth row item */}
      <div className='flex flex-col items-center pt-16'>
        <h1 className=' text-3xl font-poppins'>SMS</h1>
        <h1 className=' text-6xl font-poppins'>7696</h1>
      </div>

      {/* fifth row item */}
      <div className='flex flex-col items-center justify-between pt-16 space-y-2'>
        <h1 className='text-3xl font-poppins'>ETHIOSAT NSS 12 57°E</h1>
        <h1 className='text-xl font-poppins font-thin opacity-80'>FREQUENCY - 11105 | 11165</h1>
        <h1 className='text-xl font-poppins font-thin opacity-80'>POLARIZATION - H|V SYMBOL RATE - 45000</h1>
      </div>

      {/* final row item */}
      <div className=' w-full pt-10'>
        <div className='flex items-center justify-between px-5 pb-3'>
          <h1 className=' text-sm font-poppins font-thin'>Copyright &copy; {year}, All Rights Reserved <span className=' text-xs opacity-70'>(MoBix)</span></h1>
          <div className='flex'>
            <SocialIcon url="https://facebook.com/theEBStv/" bgColor='transparent' fgColor='white' style={{height: 45, width: 45}} />
            <SocialIcon url="https://youtube.com/jaketrent" bgColor='transparent' fgColor='white' style={{height: 45, width: 45}}/>
            <SocialIcon url="https://t.me/ebstvworldwide" bgColor='transparent' fgColor='white' style={{height: 45, width: 45}}/>
            <SocialIcon url="https://twitter.com/theebstv" bgColor='transparent' fgColor='white' style={{height: 45, width: 45}}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer