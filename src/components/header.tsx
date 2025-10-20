import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";


export default function header() {
     const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='w-full h-[100px] flex absolute top-0 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm justify-between items-center z-50'>
      <main className='w-full md:w-[1240px] h-[100px] mx-auto flex items-center justify-between px-4 md:px-0'>
        <div className='z-50'>
          <Image src="/horizontal-logo.svg" alt='logo' width={120} height={41} />
        </div>

        <div className='md:hidden z-50'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className='text-white' size={30} /> : <AlignJustify className='text-white' size={30} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className='font-outfit text-base text-white hidden md:flex gap-[70px] items-center'>
          <Link href="/" className='font-semibold'>Home</Link>
          <Link href="/" className='font-normal'>Closet</Link>
          <Link href="/" className='font-normal'>Creator center</Link>
          <Link href="/" className='font-normal'>Vendor center</Link>
        </nav>

        <Button className='bg-app-black px-[18px] py-[13px] h-[50px] rounded-[40px] text-app-white font-semibold text-base hidden md:block'>
          Contact us
        </Button>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg
            transform transition-transform duration-500 ease-in-out
            ${isOpen ? 'translate-y-0' : '-translate-y-full'}
          `}
        >
          <nav className='font-outfit text-base text-white flex flex-col items-center justify-center h-full gap-8'>
            <Link href="/" className='font-semibold text-2xl' onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/" className='font-normal text-2xl' onClick={() => setIsOpen(false)}>Closet</Link>
            <Link href="/" className='font-normal text-2xl' onClick={() => setIsOpen(false)}>Creator center</Link>
            <Link href="/" className='font-normal text-2xl' onClick={() => setIsOpen(false)}>Vendor center</Link>
            <Button className='bg-white text-app-black px-[18px] py-[13px] h-[50px] rounded-[40px] font-semibold text-base mt-8'>
              Contact us
            </Button>
          </nav>
        </div>
      </main>
    </header>
  )
}

