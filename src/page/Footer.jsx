import { Facebook, Youtube, Instagram, MessageSquare, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#0D0404] text-white py-12 px-6 z-20 overflow-hidden -mt-5">
            <div className="absolute right-0 top-1/4 hidden lg:block">
                <img
                    src="/Vector.png"
                    alt="Formula 1 car illustration"
                    width={400}
                    height={200}
                    className="object-contain"
                />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-6xl">
                    <div>
                        <img
                            src="/footer-logo.png"
                            alt="Obigin footer logo"
                            height={200}
                            width={400}
                            className="object-contain h-16 mb-6 w-auto"
                        />
                    </div>
                    <p className="text-white text-sm leading-relaxed mb-8 max-w-3xl">
                        Formula Speed by Obigin Media Labs is one of the most advanced HTML5 games, inspired by Formula 1 racing,
                        with realistic physics and dynamic gameplay. Race on iconic tracks, customize your car, and challenge
                        AI-driven opponents in high-speed action. Enjoy seamless cross-device gameplay on mobile (Android & iOS),
                        PC, and TV through any internet browser. With upcoming features like multiplayer mode and pit stop systems,
                        it's the ultimate racing experience.
                    </p>
                    <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 w-full">
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, label: "Facebook" },
                                { icon: Youtube, label: "YouTube" },
                                { icon: Instagram, label: "Instagram" },
                                { icon: MessageSquare, label: "Discord" },
                                { icon: Twitter, label: "Twitter" }
                            ].map((social) => (
                                <div key={social.label}>
                                    <a href="#" className="text-[#FF6B00] hover:text-[#FF8533] transition-colors">
                                        <social.icon className="w-6 h-6" />
                                        <span className="sr-only">{social.label}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                        <nav className="flex flex-wrap gap-6 text-sm">
                            {[
                                { href: "/cookie-policy", label: "Cookie Policy" },
                                { href: "/privacy-policy", label: "Privacy Policy" },
                                { href: "/tracking-preferences", label: "Tracking Preferences" },
                                { href: "/notice-collection", label: "Notice at Collection" }
                            ].map((link) => (
                                <div key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-[#FF6B00] hover:text-[#FF8533] transition-colors uppercase"
                                    >
                                        {link.label}
                                    </a>
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
