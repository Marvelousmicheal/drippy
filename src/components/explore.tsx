import Image from "next/image";
import { Button } from "./ui/button";

export default function Explore() {
  return (
    <section className="w-full py-[80px] justify-center items-center flex">
      {/* Desktop View */}
      <article className="w-[1240px] relative hidden md:block">
        <main className="w-[539px] flex flex-col gap-6 text-app-black pt-16 ">
          <div className="flex flex-col gap-4">
            <h2 className="font-akira">tHE closet - Where <br/> decisions happens</h2>
            <p className="font-dmsan text-base font-medium">Save looks. Get opinions. Shop with confidence.</p>
          </div>
          <div className="flex gap-6">
            <Button className="w-[137px] h-[56px] p-4 rounded-[60px]" variant="default">Explore Driply</Button>
            <Button className="w-[191px] h-[56px] p-4 rounded-[60px] border border-app-black" variant="outline">See Trending Closets</Button>
          </div>
        </main>
        <main className="w-[1031px] h-[750px]">
          <main className="w-[1031px] h-[977px] flex gap-12 absolute right-0 top-0">
            <div className="flex items-end">
              <Image src="closet-screen.svg" alt="closet screen" width={311.37} height={674.87}/>
            </div>
            <div>
              <Image src="feed.svg" alt="feed" width={312} height={676}/>
            </div>
            <div className="flex items-center">
              <Image src="live-closet.svg" alt="live closet" width={311.37} height={674.87}/>
            </div>
          </main>
        </main>
      </article>

      {/* Mobile View */}
      <article className="w-full flex flex-col items-center md:hidden px-4">
        <main className="w-full flex flex-col gap-6 text-app-black items-center text-center">
          <div className="flex flex-col gap-4">
            <h2 className="font-akira text-2xl">tHE closet - Where <br/> decisions happens</h2>
            <p className="font-dmsan text-base font-medium">Save looks. Get opinions. Shop with confidence.</p>
          </div>
          <div className="flex flex-col gap-4">
            <Button className="w-[137px] h-[56px] p-4 rounded-[60px]" variant="default">Explore Driply</Button>
            <Button className="w-[191px] h-[56px] p-4 rounded-[60px] border border-app-black" variant="outline">See Trending Closets</Button>
          </div>
        </main>
        <main className="w-full flex flex-col items-center gap-8 mt-12">
          <Image src="closet-screen.svg" alt="closet screen" width={311.37} height={674.87}/>
          <Image src="feed.svg" alt="feed" width={312} height={676}/>
          <Image src="live-closet.svg" alt="live closet" width={311.37} height={674.87}/>
        </main>
      </article>
    </section>
  )
}