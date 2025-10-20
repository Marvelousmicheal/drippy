import Image from "next/image";


export default function Stats() {
  return (
    <section className=" w-full py-[80px] justify-center items-center flex ">
      <article className="w-full max-w-[1240px] px-8 flex flex-col gap-10 ">

        <main className="flex flex-col lg:flex-row text-center lg:text-left justify-between text-app-black gap-4 lg:gap-0">
          <h1 className="font-black text-[23px] font-akira leading-[34.5px]">Trusted by Vendors, Creators And <br /> Shoppers Everywhere</h1>
          <p className="font-dmsan font-medium text-base ">Creators cash in, vendors sell out, shoppers find more — all without<br /> a single ad.</p>
        </main>
        <main className="flex flex-wrap justify-center lg:justify-between items-center gap-y-8 lg:gap-y-0">
         
          <div className="flex gap-[18px] items-center w-full sm:w-1/2 lg:w-auto">
            <div className="size-[88px] flex items-center justify-center">
              <Image src="vendors.svg" alt="vendor" width={82.5} height={82.79} />
            </div>
            <div>

              <p className="font-akira text-[11px] leading-7">
                <span className="text-[47px]">

                  200+
                </span>
                <br />
                vendors onboarded
              </p>
            </div>
          </div>
          <div className="flex gap-[18px] items-center w-full sm:w-1/2 lg:w-auto">
            <div className="size-[88px]  flex items-center justify-center">
              <Image src="upload.svg" alt="upload" width={72.71} height={76.6} />
            </div>
            <div>

              <p className="font-akira text-[11px] leading-7">
                <span className="text-[47px]">

                  800+ 
                </span>
                <br />
                creator uploads
              </p>
            </div>
          </div>
          <div className="flex gap-[18px] items-center w-full sm:w-1/2 lg:w-auto">
            <div className="size-[88px]  flex items-center justify-center">
              <Image src="closet.svg" alt="closet" width={75.43} height={88} />
            </div>
            <div>

              <p className="font-akira text-[11px] leading-7">
                <span className="text-[47px]">

                  2k+ 
                </span>
                <br />
                Closet saves
              </p>
            </div>
          </div>
           <div className="flex gap-[18px] items-center w-full sm:w-1/2 lg:w-auto">
            <div className="size-[88px]  flex items-center justify-center">
              <Image src="orders.svg" alt="order" width={67.54} height={72.42} />
            </div>
            <div>

              <p className="font-akira text-[11px] leading-7">
                <span className="text-[47px]">

                 5k+ 
                </span>
                <br />
                Order placed
              </p>
            </div>
          </div>
        </main>
      </article>
    </section>
  )
}

