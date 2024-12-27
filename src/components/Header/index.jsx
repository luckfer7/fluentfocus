"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const HamburguerMenu = ({ isOpen, toggleMenu }) => (
    <nav className="lg:hidden flex flex-col items-start bg-[#070F2B] p-4 absolute top-[60px] left-0 w-full transition-transform duration-300 shadow-lg z-10"
    style={{ transform: isOpen ? "translateY(0)" : "translateY(-100%)" }}>
    <ul className="flex flex-col gap-4">
      <li><Link className="border-2 border-[#070F2B] p-2 py-[8px] rounded-[8px] text-[#FFFFFF] shadow-xl hover:text-[#cad1d8] hover:bg-[#FFFFFF] hover:shadow-lg"
          href="/topics"
          onClick={toggleMenu}
        >
          Topics
        </Link>
      </li>
      <li><Link className="border-2 border-[#070F2B] p-2 py-[8px] rounded-[8px] text-[#FFFFFF] shadow-xl hover:text-[#cad1d8] hover:bg-[#FFFFFF] hover:shadow-lg"
          href="/reading"
          onClick={toggleMenu}
        >
          Reading
        </Link>
      </li>
      <li><Link className="border-2 border-[#070F2B] p-2 py-[8px] rounded-[8px] text-[#FFFFFF] shadow-xl hover:text-[#cad1d8] hover:bg-[#FFFFFF] hover:shadow-lg"
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
        <header className={` ${className}` } {...props}>{children}
            FluentFocus
            <nav className={` hidden lg:flex w-[50%] ${isOpen ? "hidden" : "block"}` }>
                <ul className="flex justify-around w-[100%]">                
                    <li><Link className="border-2 border-[#070F2B] p-[20px] py-[8px] rounded-[8px] text-[#FFFFFF] shadow-xl hover:text-[#cad1d8] hover:bg-[#070F2B] hover:shadow-lg"  href="/topics">Topics</Link></li>
                    <li><Link className="border-2 border-[#070F2B] p-[20px] py-[8px] rounded-[8px] text-[#FFFFFF] shadow-xl hover:text-[#cad1d8] hover:bg-[#070F2B] hover:shadow-lg" href="/reading">Reading</Link></li>
                    <li><Link className="border-2 border-[#070f2b] p-[20px] py-[8px] rounded-[8px] text-[#FFFFFF] shadow-xl hover:text-[#cad1d8] hover:bg-[#070F2B] hover:shadow-lg" href="/about">About</Link></li>
                </ul>
            </nav>

            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-2xl focus:outline-none sm:block md:block " >{isOpen ? <FaTimes /> : <FaBars />}</button>
                {isOpen && <HamburguerMenu isOpen={isOpen} toggleMenu={toggleMenu} />}
            </div>
            
        </header>
    )
}