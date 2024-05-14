'use client';

import Image from "next/image"
import Link from "next/link"
import Button from "../core/Button"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { InputAuth } from "../ui/inputAuth";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import ButtonFull from "../core/ButtonFull";
import { usePathname } from "next/navigation";
import { FaSun, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { RiMoonFill } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname()

  const [nav, setNav] = useState(false)
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [isOpenSign, setIsOpenSign] = useState(false)

  const topNavRemider = ["/home"]


 
  return (
    <> 
      {/* Top Nav Remider */}
      {topNavRemider.includes(pathname) && (
        <div className="hidden lg:flex flex-col justify-center items-end w-full h-full container mt-4 -mb-6">
          <div className="items-center  justify-between flex w-[730px] h-[50px]">
            <div className="flex gap-2">
              <FaSun size={20} className="text-theme"/>
              <p>Sunrise At : <span className="text-theme">6:10 AM</span></p>
            </div>
            <div className="flex gap-2">
              <RiMoonFill size={20} className="text-theme"/>
              <p>Sunset At : <span className="text-theme">3:55 PM</span></p>
            </div>
            <div className="flex items-center gap-4">
              <FaFacebookF size={20}/>
              <FaTwitter size={20}/>
              <FaInstagram size={20}/>
              <FaYoutube size={20}/>
              <FaLinkedinIn size={20}/>
              <FaGooglePlusG size={23}/>
            </div>

          </div>
          <div className="bg-gray-900 w-[730px] h-[2px] my-1"/>
        </div>
      )}
      {/* End Top Nav Remider */}

      {/* Navbar Desktop*/}  
      <div className="hidden lg:flex justify-between items-center w-full h-[125px] container">
        <div className="relative w-[90px] h-[90px]">
          <Link href="/">
            <Image 
              src="/images/logo.png"
              alt="logo"
              fill={true}
            />
          </Link>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex gap-6 text-lg">
            <Link href="/home">Home</Link>
            <Link href="/#theme">Themes</Link>
            <Link href="/#about">About Us</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
      </div>
      {/*End Navbar Desktop*/}


      {/* Hamburger On Mobile  */}
        <div className="fixed flex justify-between items-center w-full h-[125px] lg:hidden border-b border-theme px-[25px] bg-white z-10">
          <div className="relative w-[60px] h-[60px]">
            <Link href="/">
              <Image 
                src="/images/logo.png"
                alt="logo"
                fill={true}
              />
            </Link>
          </div>
          {nav ? 
            <AiOutlineClose size={30} onClick={() => setNav(!nav)} className="text-theme" />
          : <AiOutlineMenu size={30} onClick={() => setNav(!nav)} className="text-theme" />
          }
        </div>
      {/* End Hamburger On Mobile  */}

      {/* Dropdown Menu Mobile */}
      <div className={
        nav ?
          "fixed lg:hidden top-[125px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-700 z-[80]"
        :
          "fixed lg:hidden top-[-200%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-700 z-[80]"
      }>
        <div className="w-full h-full px-[25px]">
          <ul className="space-y-5 text-lg my-6 px-1" onClick={() => setNav(!nav)}>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/#theme">Theme</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>
      </div> 
      {/* End Dropdown Menu Mobile */}

    </>
  )
}

export default Navbar
