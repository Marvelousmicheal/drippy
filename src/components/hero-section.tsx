"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

interface ImageSliderProps {
    images: {
        src: string
        alt: string
        title: string
        description: string
    }[]
    autoPlayInterval?: number
}


export default function HeroSection({ images, autoPlayInterval = 5000 }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlay, setIsAutoPlay] = useState(true)

    // Auto-play effect
    useEffect(() => {
        if (!isAutoPlay) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, autoPlayInterval)

        return () => clearInterval(interval)
    }, [isAutoPlay, images.length, autoPlayInterval])

    // Handle dot click
    const handleDotClick = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlay(false)
        // Resume auto-play after 10 seconds of inactivity
        setTimeout(() => setIsAutoPlay(true), 10000)
    }

    const currentImage = images[currentIndex]
    return (
        <section className="w-full h-[1024px] ">
            <div className="relative w-full h-full">
                <Image
                    src={currentImage.src || "/placeholder.svg"}
                    alt={currentImage.alt}
                    fill
                    className="object-cover transition-opacity duration-500"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <article className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-row w-full max-w-[1280px] px-8 justify-between items-center gap-8 lg:gap-0">

                <div className=" flex flex-col justify-center items-start gap-[32px] text-white">
                    <h1 className="font-akira text-4xl lg:text-[63px]">{currentImage.title}</h1>
                    <p className="text-lg md:text-xl max-w-xl text-balance">{currentImage.description}</p>
                    <div className="flex flex-col sm:flex-row gap-8">
                        <Button className="w-[220px] h-[66px] bg-white rounded-[10px] flex gap-3 text-app-black" >
                            <div>
                                <Image src="google-play.svg" alt="google play" width={40} height={40} />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-[11px]">Available on</p>
                                <p className="font-semibold text-[19px]">Google Play</p>
                            </div>
                        </Button>
                        <Button className="w-[220px] h-[66px] rounded-[10px] flex gap-3 text-black bg-white" >
                            <div>
                                <Image src="apple-store-white.svg" alt="apple-store" width={40} height={40} />
                            </div>
                            <div className="text-left">
                                <p className="font-semibold text-[11px]">Available on</p>
                                <p className="font-semibold text-[19px]">App Store</p>
                            </div>
                        </Button>
                    </div>
                </div>

                {/* Dot Navigation - Right Side */}
                <div className=" flex flex-row lg:flex-col gap-4 z-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={index === currentIndex}
                        />
                    ))}
                </div>
            </article>

            {/* Slide Counter */}
            <div className="absolute bottom-8 right-8 text-white text-sm font-medium">
                {currentIndex + 1} / {images.length}
            </div>


        </section>
    )
}

