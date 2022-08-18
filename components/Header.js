import Image from "next/image";
import Logo from "../public/logo.png";
import NavBar from "./NavBar";
import { MenuAlt2Icon } from "@heroicons/react/outline";
import NavRoutes from "../utils/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const [bgShow, setBgShow] = useState(false);

  useEffect (() => {
    window.addEventListener("scroll", ()=> {
      if (window.scrollY > 100) {
        setBgShow(true);
      }
      else{setBgShow(false)}
    });
    return ()=> {
      window.removeEventListener("scroll", null);
    }
  }, []);
  
  return (                                                              
    <div className={`flex fixed w-full ${bgShow && "bg-bg-black"} content-center z-50 justify-between items-center transition-all ease-in duration-500`}>
      <div className="flex mt-2 items-center lg:whitespace-nowrap md:justify-between mx-10 md:mx-5 lg:mx-6 ">
        <div className="flex items- text-2xl items-center">
            <Image 
            src={Logo}
            width={50}
            height={50}
            />
          <div className="hidden lg:block cursor-default">Your #1 Choice!</div>
        </div>
        <div className="hidden cursor-pointer md:flex md:space-x-5 md:ml-5 lg:ml-10 text-sm font-thin">
          
          {NavRoutes.map((navs, index) => {
            //console.log(navs.title);
            // console.log('bhsjvhjvs');
            return (
              <NavBar title={navs.title} link={navs.link} key={index}/>
            )
          })}
        </div>
        <MenuAlt2Icon className="h-8 mb-1 ml-5 md:hidden" />
      </div>
      <div className="flex">
        <div className=" cursor-pointer mt-2 h-full text-center font-extralight hover:text-dark-gray ">
          <h1>Join EBS+</h1>
        </div>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mt-2 h-full w-20 rounded text-center mx-10 md:mx-5 lg:mx-6 ">
          <h1>Roku Tv</h1>
        </div>
      </div>
    </div>
  )
}

export default Header