import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full py-8 md:py-12 px-6 md:px-12 bg-neutral-950 border-t border-white/10 text-neutral-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                {/* Left Side: Social Icons */}
                <div className="flex items-center gap-6 md:gap-4">
                    <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-all text-neutral-400 hover:text-white group">
                        <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-all text-neutral-400 hover:text-white group">
                        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-all text-neutral-400 hover:text-white group">
                        <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                </div>

                {/* Right Side: Copyright */}
                <div className="text-xs md:text-sm text-neutral-500 font-medium tracking-wide text-center md:text-right">
                    © 2015 Softman. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
