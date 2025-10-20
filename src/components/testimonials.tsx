"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const testimonialsData = [
  {
    quote: "One week on Driply brought me more sales than two months on IG — finally, a platform built for creators.",
    author: "Juliet Abraham",
    bgColor: "bg-gradient-to-r from-[#ffdede] to-[#fff1a4]",
    image: "/person1.png"
  },
  {
    quote: "The direct content purchasing is a game-changer. I've saved so much time and found amazing UGC for my brand.",
    author: "David Chen",
    bgColor: "bg-gradient-to-r from-[#DEDFFF] to-[#D5A4FF]",
    image: "/person2.png"
  },
  {
    quote: "As a shopper, the Closet feature is everything. I get real opinions from friends before I buy anything.",
    author: "Maria Rodriguez",
    bgColor: "bg-gradient-to-r from-[#DEFFE8] to-[#A4A6FF]",
    image: "/person3.png"
  },
  {
    quote: "Finally, a platform that values my b-roll and behind-the-scenes content. The earnings are consistent and fair.",
    author: "Samuel Green",
    bgColor: "bg-gradient-to-r from-[#ffdede] to-[#fff1a4]",
    image: "/person4.png"
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesInView, setSlidesInView] = useState(2.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSlidesInView(1.2);
      } else {
        setSlidesInView(2.5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lastValidIndex = testimonialsData.length > slidesInView
    ? testimonialsData.length - Math.ceil(slidesInView) + 1
    : 0;

  const handlePrev = () => {
    if (testimonialsData.length <= slidesInView) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? lastValidIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (testimonialsData.length <= slidesInView) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === lastValidIndex ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="w-full justify-center items-center flex pb-[100px]">
      <article className="w-full max-w-[1240px] px-8 flex flex-col gap-10">
        <main className="flex flex-col lg:flex-row items-center text-center lg:text-left justify-between gap-8 lg:gap-0">
          <h1 className="font-akira text-[23px]">
            TESTIMONIALS – <br /> REAL WORDS, REAL WINS
          </h1>
          <div className="flex gap-[32px]">
            <div
              onClick={handlePrev}
              className={`size-[60px] rounded-full shadow-[3.64px_3.64px_4.55px_rgba(16,49,40,0.1)] cursor-pointer flex items-center justify-center transition-all ${
                currentIndex === 0
                  ? "bg-[#E4E4E4]"
                  : "bg-gradient-to-r from-[#ffdede] to-[#fff1a4]"
              }`}
            >
              <Image src="/icons/left.svg" alt="left" width={11.25} height={15}/>
            </div>
            <div
              onClick={handleNext}
              className={`size-[60px] rounded-full shadow-[3.64px_3.64px_4.55px_rgba(16,49,40,0.1)] cursor-pointer flex items-center justify-center transition-all ${
                currentIndex === lastValidIndex
                  ? "bg-[#E4E4E4]"
                  : "bg-gradient-to-r from-[#ffdede] to-[#fff1a4]"
              }`}
            >
               <Image src="/icons/right.svg" alt="left" width={11.25} height={15}/>
            </div>
          </div>
        </main>

        <div className="w-full overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% / ${slidesInView}) - ${currentIndex} * 1rem))`,
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0" style={{ width: `calc(100% / ${slidesInView})`}}>
                <div className={`w-full h-[279px] rounded-[8px] p-8 ${testimonial.bgColor}`}>
                  <Image src="blockquote.svg" alt="blockquote" width={37} height={45} />
                  <main className="pl-[37px] pt-[24px] flex flex-col gap-6">
                    <div>
                      <p className="font-dmsan font-medium text-base">{testimonial.quote}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-[50px] rounded-full bg-gray-300 relative">
                        <Image src={testimonial.image} alt={testimonial.author} fill className="object-cover rounded-full"/>
                      </div>
                      <p className="font-dmsan font-medium text-[13px] text-black">{testimonial.author}</p>
                    </div>
                  </main>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-1 bg-[#E0E0E0]">
          <div
            className="h-1 bg-app-black transition-all duration-500 ease-in-out"
            style={{ width: `${((currentIndex + 1) / (testimonialsData.length - slidesInView + 1)) * 100}%` }}
          ></div>
        </div>
      </article>
    </section>
  );
}
