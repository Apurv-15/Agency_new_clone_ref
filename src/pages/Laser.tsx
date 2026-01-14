import React, { useState, useEffect, useRef, Suspense } from 'react';
import Image from '@/components/ui/image-shim';

const LaserFlow = React.lazy(() => import("@/components/ui/LaserFlow"));

export default function LaserPage() {
    const [mounted, setMounted] = useState(false);
    const revealImgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
            el.style.setProperty('--mx', `${x}px`);
            el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
    };

    const handleMouseLeave = () => {
        const el = revealImgRef.current;
        if (el) {
            el.style.setProperty('--mx', '-9999px');
            el.style.setProperty('--my', '-9999px');
        }
    };

    return (
        <div
            className="relative h-screen w-full overflow-hidden"
            style={{ backgroundColor: '#060010' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Laser Flow Background */}
            {mounted && (
                <div className="absolute inset-0">
                    <Suspense fallback={
                        <div className="w-full h-full flex items-center justify-center bg-[#060010]">
                            <div className="w-16 h-16 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
                        </div>
                    }>
                        <LaserFlow
                            horizontalBeamOffset={0.1}
                            verticalBeamOffset={0.0}
                            color="#8B5CF6"
                            fogIntensity={0.5}
                            wispDensity={1.2}
                        />
                    </Suspense>
                </div>
            )}

            {/* Content Box at Bottom */}
            <div
                className="absolute left-1/2 -translate-x-1/2 z-10"
                style={{
                    top: '50%',
                    width: '86%',
                    height: '60%',
                }}
            >
                <div
                    className="w-full h-full rounded-3xl flex items-center justify-center relative overflow-hidden"
                    style={{
                        backgroundColor: '#060010',
                        border: '2px solid rgba(139, 92, 246, 0.5)',
                        boxShadow: '0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 40px rgba(139, 92, 246, 0.1)'
                    }}
                >
                    <Image
                        src="/video" // Note: Double check if this path is valid in your public folder
                        alt="Dashboard Preview"
                        fill
                        className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                    {/* Optional overlay for better text contrast if needed later */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060010]/80 via-transparent to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Interactive Reveal Image Overlay */}
            <div
                ref={revealImgRef}
                className="absolute w-full pointer-events-none z-5"
                style={{
                    top: '-50%',
                    mixBlendMode: 'lighten',
                    opacity: 0.3,
                    // @ts-ignore
                    '--mx': '-9999px',
                    '--my': '-9999px',
                    WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat'
                }}
            >
            </div>
        </div>
    );
}
