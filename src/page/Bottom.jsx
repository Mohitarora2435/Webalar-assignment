import React from "react";
import { ArrowRight } from "lucide-react";
import { news } from "./metadata"; // Ensure the correct import path

export default function Bottom() {
    return (
        <div className="relative">
            {/* Background Masking */}
            <div className="absolute z-10 -top-20 left-0 right-0 h-48">
                <img src="/events-masking.png" alt="event-masking" className="h-48 w-screen object-fill" />
            </div>

            <section className="relative bg-transparent">
                {/* Background Graphics */}
                <div className="absolute top-0 z-0 left-0 right-0 h-full">
                    <img src="/events-graphic.png" alt="event-graphic" className="h-full w-screen object-fill" />
                </div>

                <div className="absolute top-0 left-0 right-0 h-full">
                    <img src="/events-texture.png" alt="event-texture" className="h-full w-screen object-fill" />
                </div>

                {/* Racing Driver Image */}
                <div className="absolute right-0 -top-20 -bottom-14 h-full z-20 hidden xl:block">
                    <img src="/events-driver.png" alt="Racing driver in red gear" className="object-cover h-[90vh] w-full" />
                </div>

                <div className="container mx-auto bg-transparent px-4 py-12">
                    <div className="relative">
                        <div className="relative">
                            <h2 className="text-3xl relative z-30 bg-transparent font-bold text-[#2E0000] opacity-80 mb-8">
                                Latest Formula Speed Events
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-[70%] pb-16">
                                {news.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-zinc-800/50 rounded-lg z-20 hover:bg-zinc-800/80 transition-colors"
                                    >
                                        <div className="relative h-80 rounded-md overflow-hidden">
                                            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                                            <div className="absolute bottom-0 w-full opacity-50 bg-black h-[60%]" />
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                                            <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-sm mb-4 text-white/70">{item.description}</p>
                                            <div className="flex items-center justify-end">
                                                <ArrowRight className="w-4 h-4 text-white" fill="currentColor" />
                                            </div>
                                        </div>

                                        <div className="absolute -bottom-3 z-10 left-0 w-full flex justify-center">
                                            <div className="relative">
                                                <div className="h-px w-16 bg-white/20" />
                                                <div
                                                    style={{
                                                        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                                                        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                                                    }}
                                                    className="absolute overflow-hidden to-transparent rounded-lg border-[#2E000054] border-4 border-opacity-20 bg-gradient-to-b text-[#2E000054] px-40 pt-6 h-72 top-6 left-1/2 -translate-x-1/2 font-bold text-2xl"
                                                >
                                                    {index + 1}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
