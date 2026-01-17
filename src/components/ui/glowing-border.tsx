
import React from "react";
import { cn } from "@/lib/utils";

// Simplified version for easier integration on rectangular cards
export function GlowingBorder({
    children,
    className,
    gradientColor = "#FF8800"
}: {
    children: React.ReactNode;
    className?: string;
    gradientColor?: string;
}) {
    const rgbGradient = "conic-gradient(from 0deg at 50% 50%, #ff0000 0deg, #ffff00 60deg, #00ff00 120deg, #00ffff 180deg, #0000ff 240deg, #ff00ff 300deg, #ff0000 360deg)";

    return (
        <div className={cn("relative group/border", className)}>
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes border-spin-minimal {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                .animate-border-spin-minimal {
                    animation: border-spin-minimal 3s linear infinite;
                }
             `}} />

            {/* Subtle RGB Outer Glow */}
            <div className="absolute -inset-[3px] rounded-[inherit] overflow-hidden pointer-events-none z-0 opacity-0 group-hover/border:opacity-60 transition-opacity duration-500 blur-xl">
                <div
                    className="absolute top-[50%] left-[50%] w-[300%] h-[300%] animate-border-spin-minimal"
                    style={{ background: rgbGradient }}
                />
            </div>

            {/* Thin Minimalist RGB Border Beam */}
            <div className="absolute -inset-[1px] rounded-[inherit] overflow-hidden pointer-events-none z-10 opacity-0 group-hover/border:opacity-100 transition-opacity duration-300">
                {/* The Spinner */}
                <div
                    className="absolute top-[50%] left-[50%] w-[300%] h-[300%] animate-border-spin-minimal"
                    style={{ background: rgbGradient }}
                />

                {/* Inner mask - 2px thickness for sharp minimalist RGB trail */}
                <div className="absolute inset-[2px] bg-inherit rounded-[inherit] z-20" />
            </div>

            {/* Content Layer */}
            <div className="relative z-30 h-full w-full rounded-[inherit] bg-inherit">
                {children}
            </div>
        </div>
    )
}
