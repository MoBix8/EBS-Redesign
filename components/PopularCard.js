import React from 'react'
import Image from 'next/image'

const PopularCard = ({Popular, index}) => {
  return (
    <div key={index}>
      
        {/* <Link href={`/favourite/${index}`}> */}
        <div className=' relative snap-center h-64 w-44 rounded-lg hover:rounded-lg hover:bg hover:transition-all hover:duration-200 hover:ease-in ease-out duration-200 '>
          <Image 
              src={Popular.img}
              layout="fill"
              objectFit="cover"
              className={`absolute h-full w-full bg-cover snap-center bg-no-repeat rounded-lg hover:rounded-lg hover:scale-105 hover:bg-bg-black hover:opacity-20 hover:transition-all hover:duration-200 hover:ease-in ease-out duration-200`} />
          <div className=' pl-3 pb-3 opacity-0 hover:opacity-80 cursor-default duration-300 absolute inset-0 z-10 flex flex-col justify-end hover:bg-bg-black items-start text-white font-semibold'>
            <div>{Popular.title}</div>
            <div className=' text-sm font-thin'>{Popular.airTime}</div>
          </div>
        </div>
        {/* </Link> */}
    </div>
  )
}

export default PopularCard