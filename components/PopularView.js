import React, { useState } from 'react'
import PopularCard from './PopularCard'
import Popular from '../utils/popular'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

const PopularView = () => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);

  const slideLeft = ()=>{
    var slider = document.getElementById('fav')
    slider.scrollLeft = slider.scrollLeft - 1000;
    setRight(true)
    
    const timer = setTimeout(()=>{
      setLeft(false)
    }, 500)
  }
  const slideRight = ()=>{
    var slider = document.getElementById('fav')
    slider.scrollLeft = slider.scrollLeft + 1000;
    setLeft(true)
    
    const timer = setTimeout(()=>{
      setRight(false)
    }, 500)
  }
  return (
    <div className='relative flex items-center'>
      <div className=' px-1'>
      {left ? <ChevronLeftIcon className=' h-10 w-10 opacity-40 hover:opacity-100' onClick={slideLeft}/>: <div className='h-10 w-10'/>}
      </div>
      <div id='fav' className='flex pt-5 space-x-3 overflow-x-scroll scroll whitespace-nowrap scroll-smooth overflow-y-hidden scrollbar-hide '>
          {Popular.map((pop, idx)=>{
              return (
                  <PopularCard Popular={pop} index={pop.id} key={idx}/>
              )
          })}
      </div>
      <div className=' px-1'>
        {right ? <ChevronRightIcon className=' h-10 w-10 opacity-40 hover:opacity-100' onClick={slideRight}/>: <div className='h-10 w-10'/>}
      </div>
    </div>
  )
}

export default PopularView