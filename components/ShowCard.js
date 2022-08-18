import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useContext } from 'react'
import Router, {useRouter} from 'next/router';

const ShowCard = ({img, index }) => {
  return (
    <div key={index}>
      
        <Link href={`/favourite/${index}`}>
        <div className=' relative snap-center h-44 w-80 rounded-xl hover:rounded-xl hover:scale-105 hover:transition-all hover:duration-200 hover:ease-in ease-out duration-200 '>
          <Image 
              src={img}
              layout="fill"
              objectFit="cover"
              className={`h-full w-full bg-cover snap-center bg-no-repeat rounded-xl hover:rounded-xl hover:scale-19 hover:transition-all hover:duration-200 hover:ease-in ease-out duration-200`} />
        </div>
        </Link>
    </div>
  )
}

export default ShowCard
