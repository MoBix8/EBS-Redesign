import React from 'react'
import YouTube from 'react-youtube'
import { XIcon } from "@heroicons/react/outline";

const MyModal = ({ vid, onClose }) => {



  return (
    <div>
        <div className="flex flex-col items-end justify-center">
        <button onClick={()=> onClose(false)} className=' pb-3'> 
            <XIcon className=" h-5 w-5 text-text-gray-color hover:accent-text-gray-color"/>
        </button>
        <YouTube videoId={vid} opts={opts} className=""/>
        <div onClick={()=> onClose(true)} className=" bg-text-gray-color w-48 h-40">My Name is What?</div>
      </div>
    </div>
  )
}

export default MyModal