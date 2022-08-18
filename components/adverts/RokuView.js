import React from 'react'
import Roku from '../../utils/roku'
import Card from './Card'

const RokuView = () => {
  return (
    <div>
        <div className='flex pt-5 snap-x space-x-5 overflow-x-scroll scrollbar-hide items-center justify-center '>
        {Roku.map((res, idx)=>{
          return (
            <Card img={res.img} index={res.id} key={idx} url={res.url} />
          )
        })}
    </div>
    </div>
  )
}

export default RokuView