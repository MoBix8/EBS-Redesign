import React from 'react'
import Image from 'next/image'
import Logo from '../../public/logo.png'
import Favourite from '../../utils/favourite'

export const Background = ({ index, image }) => {
    // console.log(Favourite[1].title);
    // console.log(typeof(index));
    // console.log(Favourite[Number(index)].title);
    // console.log(img);
  return (
    <header className=''>
           <div className={` h-2/3 w-full bg-cover bg-no-repeat cursor-default`} style={{backgroundImage: `url(${image})`}}>
            <div className=" bg-gradient-to-l from-from-c to-to-c h-2/3 w-full">
                 <div className=' flex flex-col h-96 w-full lg:w-2/4 px-10'>
                    <div className=' flex flex-col lg:flex-row text-xl items-center pt-36 pb-3'>
                    <Image 
                        src={Logo}
                        layout="fixed"
                        width={40}
                        height={40}
                        />
                    <div className=" cursor-default text-center">EBS Tv</div>
                    </div>
                    <div className=" cursor-default text-4xl pb-3">{Favourite[Number(index)].title}</div>
                    <div className=' text-green text-2xl pb-3'>{Favourite[Number(index)].airTime}</div>
                    <div className=' hidden lg:block lg:text-xl lg:font-sans lg:font-thin lg:text-light-gray'>
                        <h1>{Favourite[Number(index)].description.slice(0, 250).concat('...')} </h1>
                    </div>
                </div>
                <div className=' h-4' />
                <div className=" bg-gradient-to-t from-bg-c to-transparent h-20"></div>
            </div>
           </div>
    </header>
  )
}
