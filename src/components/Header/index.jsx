import Link from "next/link";

export default function Header ({ children, className, ...props}) {
    return (
        <header className={` ${className}` } {...props}>{children}
            FluentFocus
            <nav className="w-[50%] ">
                <ul className="flex justify-around">                
                    <li><Link className="border-2 border-[#070F2B] p-[20px] py-[8px] rounded-[8px] text-[#070F2B] shadow-xl hover:text-[#cad1d8] hover:bg-[#070F2B] hover:shadow-lg"  href="/topics">Topics</Link></li>
                    <li><Link className="border-2 border-[#070F2B] p-[20px] py-[8px] rounded-[8px] text-[#070F2B] shadow-xl hover:text-[#cad1d8] hover:bg-[#070F2B] hover:shadow-lg" href="/reading">Reading</Link></li>
                    <li><Link className="border-2 border-[#070F2B] p-[20px] py-[8px] rounded-[8px] text-[#070F2B] shadow-xl hover:text-[#cad1d8] hover:bg-[#070F2B] hover:shadow-lg" href="/about">About</Link></li>
                </ul>
            </nav>
            
        </header>
    )
}