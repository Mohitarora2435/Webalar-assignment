
export default function Navbar() {
    return (
        <header className="flex items-center justify-between p-4 lg:p-6">
            
            <div className="flex items-center">
                <img src="/logo.png" 
                    alt="Logo" 
                    width={1200} 
                    height={400} 
                    className="h-14 w-auto" />
            </div>

            
            <div>
                <button
                    variant="outline"
                    className={`bg-transparent border-white text-white rounded-sm border-2 text-lg p-2 font-[Orbitron] `}
                >
                    Join Now
                </button>
            </div>
        </header>
    );
}
