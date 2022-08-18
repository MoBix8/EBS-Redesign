import React,{ useState, useEffect } from 'react'
import ShowCard from './ShowCard'
import Favourite from '../utils/favourite'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'

const ShowsView = () => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);

  const slideLeft = ()=>{
    var slider = document.getElementById('pop')
    slider.scrollLeft = slider.scrollLeft - 1500;
    setRight(true)
    
    const timer = setTimeout(()=>{
      setLeft(false)
    }, 500)

  }
  const slideRight = ()=>{
    var slider = document.getElementById('pop')
    slider.scrollLeft = slider.scrollLeft + 1500;
    //let max = slider.scrollWidth - slider.clientWidth;
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
      <div id='pop' className='flex pt-5 space-x-4 scroll-snap overflow-x-scroll overflow-y-hidden scrollbar-hide scroll scroll-smooth '>
        {Favourite.map((res, idx)=>{
          return (
            <ShowCard img={res.img} index={res.id} key={idx} />
          )
        })}
    </div>
    <div className=' px-1'>
        {right? <ChevronRightIcon className=' h-10 w-10 opacity-40 hover:opacity-100' onClick={slideRight}/>: <div className='h-10 w-10'/>}
      </div>
    </div>
  )
}

export default ShowsView