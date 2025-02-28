
import Navbar from "./Navbar";

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-black">
            
            <div className="absolute top-0 inset-0 z-0">
                <video
                    src="/f1.mp4"
                    className="object-fill h-screen w-full opacity-30"
                    autoPlay
                    loop
                    muted
                />
            </div>            
            <div className="relative z-10">
                <Navbar />
                <div className="flex flex-col items-center sm:items-start justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-32 text-center sm:text-left">
                    
                    <h1 className="mb-4 flex flex-col items-center sm:items-start font-bold tracking-tighter">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r bg-clip-text text-transparent from-[#FBBC02] via-[#FE6405] to-[#FC1305] font-[Factor-BF-Oblique-W01-Bold]">
                            FORMULA
                        </span>
                        <p className="text-4xl sm:text-5xl text-white md:text-4xl lg:text-5xl xl:text-6xl font-[Factor-BF-Oblique-W01-Bold] ml-44">
                            SPEED
                        </p>
                    </h1>
                    <p className="mb-8 text-[1.6rem] italic tracking-wider text-white max-w-md sm:max-w-lg md:max-w-xl font-[Eurostyle]">
                      The ultimate racing experience
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-transparent border-white text-white rounded-sm border-2 text-base sm:text-lg w-full sm:w-auto p-2 font-[Orbitron]">
                            Play Now
                        </button>
                        <button className="bg-transparent bg-gradient-to-r from-[#F6AA35] to-[#E66C31] text-black rounded-sm text-base sm:text-lg w-full sm:w-auto p-2 font-[Orbitron]">
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
