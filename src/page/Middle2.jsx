import React, { useState } from "react";
import HeroVideoDialog from "./HeroVideoDialog.jsx";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./Carousel";
import { features } from "./metadata";
import FeaturesCard from "./FeaturesCard";

export default function GamePlayVideos() {
    const [current, setCurrent] = useState(1);
    const slideData = [
        { src: "/slide-one.png" },
        { src: "/slide-two.png" },
        { src: "/slide-three.png" }
    ];

    return (
      <div className="min-h-screen h-full -mt-60">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen overflow-hidden">
    {/* Background Image - Covers everything */}
    <div className="absolute inset-0 w-full h-full">
        <img src="/car-bg-one.png" alt="car-bg-one" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-90"></div>
    </div>

    {/* Hero Content */}
    <div className="relative z-20 flex flex-col items-center text-white text-center px-4 sm:px-0 pt-24 sm:pt-32">
        <h1 className="text-3xl sm:text-4xl font-semibold my-5">Realistic Circuits</h1>
        <h3 className="opacity-70 max-w-2xl">
            Where every turn brings a new challenge on iconic tracks and urban streets
        </h3>

        {/* Carousel */}
        <div className="w-full relative max-w-5xl mx-auto mt-12">
            <Carousel>
                <CarouselContent>
                    {slideData.map((o, index) => (
                        <CarouselItem 
                            key={o.src} 
                            className={`sm:basis-1/2 lg:basis-1/3 ${current !== index ? "scale-75" : ""}`}
                        >
                            <div className="p-1">
                                <img src={o.src || "/placeholder.svg"} alt={`slide-${index}`} className="rounded-lg w-full h-auto" />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
    </div>

    {/* Large Background Text */}
    <h1 className="absolute top-0 mt-96 left-1/2 transform -translate-x-1/2 text-white text-[33rem] tracking-wider text-center opacity-10">
        OBIGIN
    </h1>

    {/* Game Play Video Section - Removed the white space */}
    <div className="relative py-8 text-white text-center z-20 -mt-32">
        <h1 className="text-3xl sm:text-4xl font-semibold mt-48">Game Play Video</h1>
        <h3 className="opacity-70 max-w-2xl mx-auto">
            Where every turn brings a new challenge on iconic tracks and urban streets
        </h3>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 mt-8">
            <HeroVideoDialog videoSrc="" thumbnailSrc="/video-thumbnail.png" thumbnailAlt="Hero Video" />
        </div>
    </div>
</div>



            {/* Competitive Gameplay Section */}
            <div className="relative">
                <img src="/main-image.png" alt="car-one" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-90"></div>

                <div className="relative z-20 flex flex-col items-center text-white text-center px-4 sm:px-8 py-16">
                    <h1 className="text-3xl sm:text-4xl font-semibold">Competitive Gameplay</h1>
                    <h3 className="opacity-70 max-w-3xl mx-auto">
                        Unlock milestones as you conquer challenging races and show off your skills.
                    </h3>

                    <h1 className="text-2xl sm:text-3xl mt-12 font-semibold bg-gradient-to-r from-[#F6AA35] to-[#E66C31] bg-clip-text text-transparent uppercase">
                        Unlock Achievements & Earn Rewards
                    </h1>
                </div>

                {/* Features Section */}
                <div className="relative z-20 flex flex-col items-center gap-10 py-12">
                    {features.map((feature) => (
                        <FeaturesCard key={feature.title} {...feature} />
                    ))}
                </div>

                {/* AI Opponents Section */}
                <div className="relative z-20 text-white text-center px-4 sm:px-8 py-12">
                    <h1 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-[#F6AA35] bg-clip-text uppercase text-transparent to-[#E66C31]">
                        Adaptive AI-Based Opponents
                    </h1>
                    <h3 className="max-w-3xl mx-auto opacity-70">
                        Dive into intense races with Adaptive AI-Based Opponents that analyze your playstyle and bring the heat.
                    </h3>
                    <button className="mt-4 border-2 border-primary text-primary bg-transparent text-lg rounded-sm px-6 py-2 font-[Orbitron]">
                        Race Now
                    </button>
                </div>

                {/* Decorative Images */}
                <img src="/speed-dial.png" alt="speed-dial" className="absolute bottom-0 left-0 h-80 opacity-30" />
                <img src="/helmet.png" alt="helmet" className="absolute bottom-0 right-0 h-80 opacity-30" />
            </div>
        </div>
    );
}
