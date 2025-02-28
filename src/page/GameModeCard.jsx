

export default function GameModeCard({
    title,
    description,
    imageUrl,
    comingSoon = false,
    imagePosition = "right",
}) {
    const contentSection = (
        <div className="space-y-2 md:w-1/2">
            <div className="flex flex-col gap-1">
                <h2
                    className= "text-3xl font-bold tracking-tight bg-gradient-to-r from-[#F6AA35] to-[#E66C31] bg-clip-text text-transparent uppercase relative z-20"
                >
                    {title}
                </h2>
                {comingSoon && (
                    <span
                        className= "text-lg font-medium bg-gradient-to-r from-[#F6AA35] to-[#E66C31] bg-clip-text text-transparent uppercase"
                    >
                        (Coming Soon)
                    </span>
                )}
            </div>
            <p className= "leading-relaxed relative z-20 text-white opacity-70" >
                {description}
            </p>
        </div>
    );

    const imageSection = (
        <div className="relative aspect-video w-full md:w-1/2 rounded-lg overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </div>
    );

    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8 py-6">
            {imagePosition === "left" ? (
                <>
                    {imageSection}
                    {contentSection}
                </>
            ) : (
                <>
                    {contentSection}
                    {imageSection}
                </>
            )}
        </div>
    );
}
