"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import FluentFocus from './logo.png';

const HamburguerMenu = ({ isOpen, toggleMenu }) => (
    <nav className="lg:hidden flex flex-col items-end bg-[#7869d8] p-4 absolute top-[80px] right-0 w-1/2  transition-transform duration-300 shadow-lg z-10 font-Inter"
    style={{ transform: isOpen ? "translateY(0)" : "translateY(-100%)" }}>
    <ul className="flex flex-col gap-4">
      <li><Link className="border-2 border-[#7869d8] p-2 py-[8px] rounded-[8px] text-[#FFFFFF]  hover:text-[#cad1d8] hover:bg-[#FFFFFF] hover:shadow-lg font-Inter"
          href="/topics"
          onClick={toggleMenu}
        >
          Topics
        </Link>
      </li>
      <li><Link className="border-2 border-[#7869d8] p-2 py-[8px] rounded-[8px] text-[#FFFFFF]  hover:text-[#cad1d8] hover:bg-[#FFFFFF] hover:shadow-lg font-Inter"
          href="/reading"
          onClick={toggleMenu}
        >
          Reading
        </Link>
      </li>
      <li><Link className="border-2 border-[#7869d8] p-2 py-[8px] rounded-[8px] text-[#FFFFFF]  hover:text-[#cad1d8] hover:bg-[#FFFFFF] hover:shadow-lg font-Inter"
          href="/about"
          onClick={toggleMenu}
        >
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default function Header ({ children, className, ...props}) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <header className={`  ${className}` } {...props}>{children}
          <Link href="/">
            <Image  width={150} height={120} src={FluentFocus} alt="logo" />
          </Link>
            
            <nav className={` hidden lg:flex w-[50%] ${isOpen ? "hidden" : "block"}` }>
                <ul className="flex justify-around items-center text-center w-[100%]">                
                    <li><Link  className="border-2 border-[#7869d8] p-[20px] py-[8px] rounded-[8px] text-[#FFFFFF] shadow-xl hover:text-[#cad1d8] hover:bg-[#7869d8] hover:shadow-lg hover:scale-105 transition-transform duration-300 font-Inter"  href="/topics">Topics</Link></li>
                    <li><Link className="border-2 border-[#7869d8] p-[20px] py-[8px] rounded-[8px] text-[#FFFFFF] shadow-xl hover:text-[#cad1d8] hover:bg-[#7869d8] hover:shadow-lg hover:scale-105 transition-transform duration-300 font-Inter" href="/reading">Reading</Link></li>
                    <li><Link className="border-2 border-[#7869d8] p-[20px] py-[8px] rounded-[8px] text-[#FFFFFF] shadow-xl hover:text-[#cad1d8] hover:bg-[#7869d8] hover:shadow-lg hover:scale-105 transition-transform duration-300 font-Inter" href="/about">About</Link></li>
                </ul>
            </nav>
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-2xl focus:outline-none sm:block md:block font-Inter" >{isOpen ? <FaTimes /> : <FaBars />}</button>
                {isOpen && <HamburguerMenu isOpen={isOpen} toggleMenu={toggleMenu} />}
            </div>
            
        </header>
    )
}