const FeaturesCard = ({ title, description, diamonds, coins }) => {
  return (
    <figure className="relative h-auto sm:h-40 w-full sm:w-[30rem] md:w-[40rem] lg:w-[50rem] cursor-pointer p-2 sm:p-4">
      {/* Background Image */}
      <img
        src="/feature-bg.png"
        alt="feature-image"
        className="absolute z-0 top-0 left-0 h-full w-full object-fill"
      />

      {/* Content */}
      <div className="flex flex-col sm:flex-row justify-between items-center h-full px-2 sm:px-4 gap-2 relative z-20">
        {/* Title & Description */}
        <div className="flex flex-col justify-center text-center sm:text-left mb-2 sm:mb-0">
          <figcaption className="text-xl sm:text-2xl italic uppercase font-medium text-primary">
            {title}
          </figcaption>
          <p className="text-sm sm:text-base text-white font-medium dark:text-white/40">
            {description}
          </p>
        </div>

        {/* Trophy & Rewards */}
        <div className="flex items-center gap-2">
          <img
            src="/throphy-icon.png"
            alt="trophy-image"
            className="h-24 sm:h-32 md:h-40 lg:h-48 w-14 sm:w-20 md:w-24 lg:w-28 object-contain"
          />
          <div>
            {/* Coins */}
            <div className="flex gap-2 items-center">
              <img
                src="/coin-icon.png"
                alt="coin-image"
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />
              <span className="text-sm text-white sm:text-base text-primary">{coins}</span>
            </div>

            {/* Diamonds */}
            <div className="flex gap-2 items-center">
              <img
                src="/diamond-icon.png"
                alt="diamond-image"
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />
              <span className="text-sm sm:text-base text-white">{diamonds}</span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default FeaturesCard