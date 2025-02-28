import React from 'react'

const Middle = () => {
  return (
    <div className="min-h-screen h-full overflow-hidden z-40 text-white relative bg-transparent py-4">
    <img
        src="/racing-machine-bg.png"
        alt="racing-machine-background"
        height={1500}
        width={1400}
        className="md:object-fill object-cover overflow-hidden min-h-screen h-full absolute top-0 left-0 w-full"
    />
    <div className="container mx-auto px-4 relative">
        <h1 className="text-3xl text-center font-semibold font-[Orbitron]">From Our Garage</h1>
        <h3 className="text-center text-opacity-70">
        Discover a lineup of high-speed racing machines built for champions.
        </h3>
    </div>
    <div className="">
    </div>
    <div>
        <img
            src="/Car.png"
            alt="orange-car"
            height={200}
            width={800}
            className="absolute top-1/3 left-1/2 md:top-1/3 h-72 w-auto md:left-[20rem] transform max-md:-translate-x-1/2 -translate-y-1/2"
        />
    </div>
</div>
);
}


export default Middle