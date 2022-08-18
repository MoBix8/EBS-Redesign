import { Dialog } from "@headlessui/react";
import { useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { XIcon } from "@heroicons/react/outline";

export function Modal({ vid, onClose }) {
  
    let overlayRef = useRef(null);

    useEffect(()=>{
        let handler = (event) =>{
            console.log(overlayRef.current.contains(event.target));
            if (!overlayRef.current.contains(event.target)) {
                onClose(false)
            }
        }

        document.addEventListener("mousedown", handler);

        return ()=> document.removeEventListener("mousedown", handler)
    });
  return (
    <Dialog
      static
      open={true}
      onClose={onClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center bg-bg-black bg-opacity-70 backdrop-blur-sm"
    >
      <div ref={overlayRef} className="flex flex-col items-end justify-center">
        <button onClick={()=> onClose(false)} className=' pb-3'> 
            <XIcon className=" h-5 w-5 text-text-gray-color hover:accent-text-gray-color"/>
        </button>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${vid}`} controls={true} playing={true} config={{youtube: {playerVars: {showinfo: 1}}}} className=" min-w-max min-h-fit"/>
      </div>
    </Dialog>
  );

} export default Modal
