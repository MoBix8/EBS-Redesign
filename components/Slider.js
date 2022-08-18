import Image from 'next/image'
import React, { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

const Slider = () => {
    const [index, setIndex] = useState(0);
    const array = [
        '/shows/besentu.jpeg', '/shows/ebs-Cenima.jpeg', '/shows/adey.jpeg', '/shows/rakeb.jpeg', '/shows/roku-tv.jpeg' 
    ]

    function loop(count){
        if(count===array.length){
            return count=0;
        }
        if(count<0){
            return count=array.length-1;
        }
        return count;
    }


  return (
    <div className='flex items-center justify-between px-2 pt-3'>
        <ChevronLeftIcon className=' h-10 w-10' onClick={()=> setIndex(count=> loop(count-1))}/>
        <div className='relative w-11/12 h-80 md:h-600 rounded-2xl bg-cover'>
            <Image 
                src={array[index]}
                layout='fill'
                objectFit='cover'
                className={` h-full w-full bg-cover rounded-2xl bg-no-repeat`}
            />
        </div>
        <ChevronRightIcon className=' h-10 w-10' onClick={()=> setIndex(count=> loop(count+1))}/>
    </div>
  )
}

export default Slider