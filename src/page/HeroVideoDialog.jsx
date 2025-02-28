import React, { useState } from "react";
import { Play, X } from "lucide-react";

const HeroVideoDialog = ({ videoSrc, thumbnailSrc, className }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Thumbnail with Play Button */}
      <div className="group relative cursor-pointer" onClick={() => setIsVideoOpen(true)}>
        <img src={thumbnailSrc} alt="Video thumbnail" className="w-full rounded-md shadow-lg group-hover:brightness-75 transition-all" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex size-20 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md">
            <div className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-b from-primary/30 to-primary shadow-md group-hover:scale-110 transition-transform">
              <Play className="size-6 text-white drop-shadow-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md" onClick={() => setIsVideoOpen(false)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="absolute -top-12 right-0 bg-neutral-900/70 text-white p-2 rounded-full" onClick={() => setIsVideoOpen(false)}>
              <X className="size-5" />
            </button>
            
            {/* Video iframe */}
            <iframe
              src={videoSrc}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroVideoDialog;
