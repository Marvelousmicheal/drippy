import Image from "next/image";
import { Button } from "./ui/button";


export default function Features() {
    return (
        <section className=" w-full py-[80px] justify-center items-center flex ">
            <article className="w-full max-w-[1240px] px-8 flex flex-col gap-10 text-app-black">
                <main className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8 lg:gap-0 text-app-black">
                    <h1 className="font-black text-[23px] font-akira leading-[34.5px]">Built for the people <br /> powering fashion — not just <br /> the brands on top.</h1>
                    <p className="font-dmsan font-medium text-base max-w-xl">A platform that gives voice to creators, shoppers, and communities — elevating contribution over hierarchy, because true innovation starts from the ground up.</p>
                </main>
                <main className="flex flex-col lg:flex-row items-center gap-[17px]">
                    <div className="w-full lg:w-[402px] h-auto lg:h-[439px] rounded-[4px] bg-gradient-to-r from-[#FFDEDE] to-[#FFF1A4]">
                        <main className="w-full h-[302px] rounded-[4px]">
                            <Image src="/sell-screen.png" alt="sell through content" width={402} height={302} className="w-full h-full object-cover"/>
                        </main>
                        <main className="p-6 font-dmsan flex flex-col gap-4">
                            <h5 className=" font-semibold text-[19px]">Sell Through Content</h5>
                            <p className="font-medium text-base">Vendors connect their products to creators’ content and track real sales.</p>
                        </main>
                    </div>
                    <div className="w-full lg:w-[402px] h-auto lg:h-[439px] rounded-[4px] bg-gradient-to-r from-[#DEDFFF] to-[#D5A4FF]">
                        <main className="w-full h-[302px] rounded-[4px]">
                             <Image src="/monetize-screen.png" alt="sell through content" width={402} height={302} className="w-full h-full object-cover"/>
                        </main>
                        <main className="p-6 font-dmsan flex flex-col gap-4">
                            <h5 className=" font-semibold text-[19px] capitalize">Monetize your creativity</h5>
                            <p className="font-medium text-base">List your b-roll, captions and try-ons. Earn per asset, no brand deals required.</p>
                        </main>
                    </div>
                    <div className="w-full lg:w-[402px] h-auto lg:h-[439px] rounded-[4px] bg-gradient-to-r from-[#DEFFE8] to-[#A4A6FF]">
                        <main className="w-full h-[302px] rounded-[4px]">
                             <Image src="/shop-screen.png" alt="sell through content" width={402} height={302} className="w-full h-full object-cover"/>
                        </main>
                        <main className="p-6 font-dmsan flex flex-col gap-4">
                            <h5 className=" font-semibold text-[19px] capitalize">Shop with Support</h5>
                            <p className="font-medium text-base">Save looks, invite opinions, and buy with confidence all in one place  — Driply.</p>
                        </main>
                    </div>
                </main>
                <div className="flex items-center justify-center">

                <Button className="w-[153px] px-6 py-4 rounded-[60px] border border-app-black " variant="outline">Explore Driply</Button>
                </div>
                
            </article>
        </section>
    )
}

