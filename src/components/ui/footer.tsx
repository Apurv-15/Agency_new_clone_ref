import { Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full py-6 px-4 md:px-8 bg-neutral-950 border-t border-white/10 text-neutral-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Left Side: Social Icons */}
                <div className="flex items-center gap-4">
                    <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors text-neutral-200 hover:text-white">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors text-neutral-200 hover:text-white">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors text-neutral-200 hover:text-white">
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>

                {/* Right Side: Copyright */}
                <div className="text-sm text-neutral-400 text-center md:text-right">
                    © 2024 Softman. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
