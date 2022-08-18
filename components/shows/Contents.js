import React, {useState } from 'react'

import Image from 'next/image'
import Moment from 'react-moment'
import Modal from './Modal'

const Contents = ({result , index}) => {

  const [modal, setModal] = useState("");
  const [openModal, setOpenModal] = useState(false)

 

  

    //console.log(result.items[1].snippet.title);
  return (
    <div>
      <div className='grid md:grid-cols-2 gap-y-6 place-items-center lg:grid-cols-4 px-5 pt-5'> 
        {openModal && <Modal vid={modal} onClose={setOpenModal}/>}
        {result.items && result.items.map((res, idx)=>{
            return (
                <div key={idx} onClick={()=> {setOpenModal(true), setModal(res.snippet.resourceId?.videoId)}}>
                  { res.snippet.title !== "Private video" &&
                    <div>
                    <div>
                      <div className='flex flex-col hover:scale-110 hover:transition-all hover:duration-200 hover:ease-in ease-out duration-200'>
                          <div className=' relative snap-center rounded-lg h-40 w-64  '>
                          <Image 
                              src={res.snippet.thumbnails.standard?.url || res.snippet.thumbnails.medium?.url || res.snippet.thumbnails.high?.url}
                              layout="fill"
                              objectFit="cover"
                              className={`h-full w-full bg-cover rounded-lg bg-no-repeat`} />
                          </div>
                          <Moment className=' text-dark-gray' date={res.snippet.publishedAt} format={"MMM Do YY"}/>
                          <div className=' text-sm font-thin font-serif text-med-gray'>{res.snippet.title.slice(0, 25).concat('...')}</div>
                      </div>     
                    </div>
                </div>  
                }
                </div>
            )
        })}
    </div>
    
    </div>
  )
}

export default Contents