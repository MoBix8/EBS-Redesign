import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Card = ({img, index, url}) => {
    
  return (
    <nav key={index}>
      
      <Link href={`${url}`}>
        <a target="_blank">
            <div className=' relative snap-center h-56 w-25 rounded-3xl'>
            <Image 
                src={img}
                layout="fill"
                objectFit="cover"
                className={`h-full w-full bg-cover bg-no-repeat rounded-3xl`} />
        </div>
        </a>
      </Link>
  </nav>
  )
}

export default Card