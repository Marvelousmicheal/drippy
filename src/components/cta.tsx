import Image from 'next/image'
import React from 'react'

export default function Cta() {
    return (
        <section className=" w-full  justify-center items-center flex pb-[100px]  ">
            <article className="w-full max-w-[1240px] px-8 flex flex-col gap-10">
                <main className="flex flex-col items-center text-center gap-4">

                    <h1 className="font-akira text-lg md:text-[23px]">
                        This is how fashion moves now.
                    </h1>
                    <p className='font-dmsan font-medium text-base text-app-black'>Build your brand, Closet, or content business — where it all connects.</p>
                </main>
                <main className='relative w-full h-[300px] md:h-[500px] rounded-[16px]'>
<Image src="/cta-image.png" alt='cta image' fill className='object-cover rounded-[16px]'/>
                </main>
            </article>
        </section>
    )
}

