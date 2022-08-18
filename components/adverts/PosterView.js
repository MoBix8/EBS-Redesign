import React from 'react'
import Poster from '../../utils/poster'
import Card from './Card'

const PosterView = () => {
  return (
    <div>
        <div className='flex pt-5 snap-x space-x-5 overflow-x-scroll scrollbar-hide '>
        {Poster.map((res, idx)=>{
          return (
            <Card img={res.img} index={res.id} key={idx} url={res.url} />
          )
        })}
    </div>
    </div>
  )
}

export default PosterView