import React from 'react'
import Image from 'next/image'
import { fromJSON } from 'postcss';
import Moment from 'react-moment';
import Link from 'next/link';


const ContentCard = ({result, index}) => {

   
  return (
    <nav>
        
        <Link href={"#"}>
          <div className='flex flex-col hover:scale-110 hover:transition-all hover:duration-200 hover:ease-in ease-out duration-200'>
              <div className=' relative snap-center rounded-lg h-40 w-64  '>
              <Image 
                  src={result.snippet.thumbnails.standard?.url || result.snippet.thumbnails.medium?.url || result.snippet.thumbnails.high?.url}
                  layout="fill"
                  objectFit="cover"
                  className={`h-full w-full bg-cover rounded-lg bg-no-repeat`} />
              </div>
              <Moment className=' text-dark-gray' date={result.snippet.publishedAt} format={"MMM Do YY"}/>
              <div className=' text-sm font-thin font-serif text-med-gray'>{result.snippet.title.slice(0, 25).concat('...')}</div>
          </div>        
        </Link>
    </nav>
  )
}

export default ContentCard