import Image from 'next/image';
import Logo from "../public/logo.png";

const Background = () => {
   // pt-64 sm:pt-72 md:pt-96

   //bg-[url(/EBS_final_cut.jpg)] 
    
  return (
    <header className=''>
           <div className="bg-[url(/EBS_final_cut.jpg)] h-2/3 w-full bg-cover bg-no-repeat">
            <div className=" bg-gradient-to-l from-from-c to-to-c h-2/3 w-full">
                 <div className=' flex flex-col h-96 w-full lg:w-2/3'>
                    <div className=' flex flex-col lg:flex-row text-7xl items-center pt-28'>
                    <Image 
                        src={Logo}
                        layout="fixed"
                        width={200}
                        height={200}
                        />
                    <div className=" cursor-default text-center">Your #1 Choice!</div>
                    </div>
                    <div className=' hidden lg:block lg:px-10 lg:text-xl lg:font-serif lg:font-thin lg:text-light-gray'>
                        <h1>EBS is a privately held media company established in 2008 in Silver Spring, Maryland, USA to provide a niche transmission programming that targets the booming Ethiopian market globally... </h1>
                    </div>
                </div>
                <div className=' h-4' />
                <div className=" bg-gradient-to-t from-from-gray to-transparent h-20"></div>
            </div>
           </div>
    </header>
  )
}

export default Background;

