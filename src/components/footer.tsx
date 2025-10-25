"use client";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
     <footer className='w-full h-auto py-16 px-8 flex flex-col gap-12 items-center justify-center text-app-off-white font-outfit' style={{ backgroundImage: 'url(/footer-background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} >
      <main className='w-full max-w-[1240px] grid grid-cols-2 lg:grid-cols-5 gap-12 text-center md:text-left'>
        <div className='col-span-2 md:col-span-1 flex flex-col items-center md:items-start gap-4'>
          <Image src="/horizontal-logo-white.svg" alt='logo' width={120} height={41}/>
          <article className='font-medium text-base'>
            Driply is a trademark of Grascope Industries, dedicated to empowering African families.
          </article>
          <div className='flex gap-[13.64px]'>
            <a href="https://x.com/driplyhq" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/twitter.svg" alt='twiiter' width={32} height={32}/>
            </a>
            <a href="https://facebook.com/driply" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/facebook.svg" alt='facebook' width={32} height={32}/>
            </a>
            <a href="https://www.instagram.com/driplyhq" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/instagram.svg" alt='instagram' width={32} height={32}/>
            </a>
            <a href="https://linkedin.com/company/driply" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/linkedin.svg" alt='linkedin' width={32} height={32}/>
            </a>
          </div>

        </div>
        <div className='flex flex-col items-center md:items-start gap-[30px]'>
          <h4 className='font-semibold text-[19px]'>Quick links</h4>
          <Link href="/" className='font-medium text-base'>Home</Link>
          <Link href="#about" className='font-medium text-base'>About</Link>
          <Link href="#features" className='font-medium text-base'>Features</Link>
          <Link href="#waitlist" className='font-medium text-base'>Waitlist</Link>
        </div>
        <div className='flex flex-col items-center md:items-start gap-[30px]'>
          <h4 className='font-semibold text-[19px]'>Contact us</h4>
          <h4 className='font-medium text-base'>Phone: +234 800 123 4567</h4>
          <a href="mailto:contact@driply.net" className='font-medium text-base'>Email: contact@driply.net</a>
          <h4 className='font-medium text-base'>Address: 12 Prosperity Avenue, Lagos, NIG</h4>
          
        </div>
        <div className='flex flex-col items-center md:items-start gap-[30px]'>
          <h4 className='font-semibold text-[19px]' >Legal & Compliance</h4>
          <Link href="/terms" className='font-medium text-base'>Terms & Conditions</Link>
          <Link href="/privacy" className='font-medium text-base'>Privacy Policy</Link>
        </div>
        <div className='flex flex-col gap-[15px] items-center' >
          <h3 className='font-semibold text-[19px]'>FROM</h3>
          <Image src= "/vertical-logo.svg" alt='logo' width={80} height={94} />
        </div>
      </main>
      <main className='w-full max-w-[1240px] h-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left border-y-[0.6px] border-[#737373] py-8'>
        <div>
          <p className='text-[#737373] font-semibold text-base'>© 2025 Grascope. All rights reserved.</p>
        </div>
        <div className='lg:w-[355px]'>
          <p className='font-semibold text-base'>
            Stay in the loop. Smart drops, platform updates, and community invites — straight from the lab.
          </p>
        </div>
        <form
          className='bg-[#1E1E1E] w-full max-w-[303px] h-[60px] rounded-[60px] flex items-center py-2.5 pl-5 pr-2.5 '
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="email" placeholder='Enter your email address' className='w-full bg-transparent placeholder:text-[13px] placeholder:font-normal placeholder:font-outfit placeholder:text-[#737373]' />
          <button type="submit" className='size-10 flex-shrink-0 flex justify-center items-center rounded-full bg-app-white'>
            <Image width={18} height={18} alt='send-icon' src="/icons/send.svg"/>
          </button>
        </form>
      </main>
    </footer>
  )
}

