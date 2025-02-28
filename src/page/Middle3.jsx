


import GameModeCard from "./GameModeCard";



export default function Middle3() {
    return (
        <section className="relative min-h-screen py-20">
            {/* Background Image */}
            <img
                src="/car-bg-three.png"
                alt="car-bg"
                height={1200}
                width={1600}
                className="absolute top-0 left-0 object-fill h-full w-screen -z-10"
            />
            <div className="absolute inset-0 bg-black opacity-90 h-full w-screen" />

            {/* Header Section */}
            <div className="relative z-20 text-center text-white">
                <h1 className="text-3xl font-semibold ">
                    Competitive Gameplay
                </h1>
                <h3 className="max-w-5xl mx-auto opacity-70">
                    Unlock milestones as you conquer challenging races and show off your skills. From exclusive car skins to powerful upgrades, every victory brings exciting rewards.
                </h3>
            </div>

            {/* Game Mode Cards */}
            <div className="mx-auto max-w-4xl space-y-8 mt-10">
                <GameModeCard
                    title="Quick Race"
                    description="Jump straight into the action with fast-paced races on your favourite tracks. Perfect for instant thrills and quick challenges"
                    imageUrl="/game-mode-one.png"
                    imagePosition="left"
                />

                <GameModeCard
                    title="Grand Prix"
                    description="Compete in exhilarating full-length races, claim prestigious prizes, and rise through the ranks to become a true racing champion."
                    imageUrl="/game-mode-two.png"
                    imagePosition="right"
                />

                <GameModeCard
                    title="Practice Session"
                    description="Push your limits with time-based sprints, top-speed runs, and collision-free challenges. Master the tracks and forge toward racing greatness."
                    imageUrl="/game-mode-three.png"
                    imagePosition="left"
                />

                <GameModeCard
                    title="Career Mode"
                    description="Build your legacy as a racing champion, starting from club races up to elite tournaments. Progress, upgrade, and dominate the track!"
                    imageUrl="/game-mode-four.png"
                    imagePosition="right"
                    comingSoon={true}
                />

                <GameModeCard
                    title="Multiplayer Mode"
                    description="Race in real-time against friends or players worldwide, competing for victory in high-speed showdowns. Climb the ranks and top the leaderboard!"
                    imageUrl="/game-mode-five.png"
                    imagePosition="left"
                    comingSoon={true}
                />
            </div>
        </section>
    );
}
