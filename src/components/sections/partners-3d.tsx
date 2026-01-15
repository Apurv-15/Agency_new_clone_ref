"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Image from '@/components/ui/image-shim';

const PARTNERS = [
    {
        name: "Varroc",
        category: "Manufacturing",
        logo: "https://logo.clearbit.com/varroc.com",
        fallback: "https://ui-avatars.com/api/?name=V&background=0066FF&color=fff",
        color: "blue"
    },
    {
        name: "Greaves Cotton",
        category: "Engine Systems",
        logo: "https://logo.clearbit.com/greavescotton.com",
        fallback: "https://ui-avatars.com/api/?name=GC&background=a855f7&color=fff",
        color: "purple"
    },
    {
        name: "Videocon",
        category: "Electronics",
        logo: "https://logo.clearbit.com/videoconworld.com",
        fallback: "https://ui-avatars.com/api/?name=V&background=0ea5e9&color=fff",
        color: "sky"
    },
    {
        name: "Endurance",
        category: "Automotive",
        logo: "https://logo.clearbit.com/endurancegroup.com",
        fallback: "https://ui-avatars.com/api/?name=E&background=6366f1&color=fff",
        color: "indigo"
    },
    {
        name: "Sterlite / STL",
        category: "Infrastructure",
        logo: "https://logo.clearbit.com/stl.tech",
        fallback: "https://ui-avatars.com/api/?name=S&background=8b5cf6&color=fff",
        color: "violet"
    },
    {
        name: "Ceekay Daikin",
        category: "Industrial",
        logo: "https://logo.clearbit.com/daikinindia.com",
        fallback: "https://ui-avatars.com/api/?name=CD&background=14b8a6&color=fff",
        color: "teal"
    },
    {
        name: "DSK Digital",
        category: "Consulting",
        logo: "https://logo.clearbit.com/dskdigital.com",
        fallback: "https://ui-avatars.com/api/?name=DSK&background=f43f5e&color=fff",
        color: "pink"
    },
    {
        name: "Bartronics",
        category: "Technology",
        logo: "https://logo.clearbit.com/bartronics.com",
        fallback: "https://ui-avatars.com/api/?name=B&background=f59e0b&color=fff",
        color: "amber"
    },
    {
        name: "Mother Dairy",
        category: "Food & Dairy",
        logo: "https://logo.clearbit.com/motherdairy.com",
        fallback: "https://ui-avatars.com/api/?name=MD&background=22c55e&color=fff",
        color: "green"
    },
    {
        name: "MGB",
        category: "Banking",
        logo: "https://logo.clearbit.com/mgb.co.in",
        fallback: "https://ui-avatars.com/api/?name=MGB&background=3b82f6&color=fff",
        color: "blue"
    },
    {
        name: "NDDB",
        category: "Cooperatives",
        logo: "https://logo.clearbit.com/nddb.coop",
        fallback: "https://ui-avatars.com/api/?name=NDDB&background=06b6d4&color=fff",
        color: "cyan"
    },
    {
        name: "Mission Milk",
        category: "National Dairy",
        logo: "https://www.nddb.coop/sites/default/files/ndp_logo.png",
        fallback: "https://ui-avatars.com/api/?name=MM&background=84cc16&color=fff",
        color: "lime"
    },
    {
        name: "Network Hub",
        category: "Operations",
        logo: "https://cdn-icons-png.flaticon.com/512/1150/1150626.png",
        fallback: "https://ui-avatars.com/api/?name=O&background=f97316&color=fff",
        color: "orange"
    },
    {
        name: "Sujan",
        category: "Corporate Wisdom",
        logo: "https://logo.clearbit.com/sujan.in",
        fallback: "https://ui-avatars.com/api/?name=S&background=d946ef&color=fff",
        color: "fuchsia"
    },
    {
        name: "AIOCD AWACS",
        category: "Healthcare",
        logo: "https://logo.clearbit.com/aiocdawacs.com",
        fallback: "https://ui-avatars.com/api/?name=AA&background=ef4444&color=fff",
        color: "red"
    },
    {
        name: "Aegis",
        category: "Global Services",
        logo: "https://logo.clearbit.com/aegisindia.com",
        fallback: "https://ui-avatars.com/api/?name=AE&background=a855f7&color=fff",
        color: "purple"
    },
    {
        name: "Amul",
        category: "Food & Dairy",
        logo: "https://logo.clearbit.com/amul.com",
        fallback: "https://ui-avatars.com/api/?name=A&background=2563eb&color=fff",
        color: "blue"
    }
];

const COLOR_MAP: Record<string, { bg: string, text: string, glow: string, iconBg: string }> = {
    blue: { bg: "group-hover:bg-blue-50/50", text: "group-hover:text-blue-600", glow: "group-hover:bg-blue-400/20", iconBg: "bg-blue-500/10" },
    purple: { bg: "group-hover:bg-purple-50/50", text: "group-hover:text-purple-600", glow: "group-hover:bg-purple-400/20", iconBg: "bg-purple-500/10" },
    sky: { bg: "group-hover:bg-sky-50/50", text: "group-hover:text-sky-600", glow: "group-hover:bg-sky-400/20", iconBg: "bg-sky-500/10" },
    indigo: { bg: "group-hover:bg-indigo-50/50", text: "group-hover:text-indigo-600", glow: "group-hover:bg-indigo-400/20", iconBg: "bg-indigo-500/10" },
    violet: { bg: "group-hover:bg-violet-50/50", text: "group-hover:text-violet-600", glow: "group-hover:bg-violet-400/20", iconBg: "bg-violet-500/10" },
    teal: { bg: "group-hover:bg-teal-50/50", text: "group-hover:text-teal-600", glow: "group-hover:bg-teal-400/20", iconBg: "bg-teal-500/10" },
    pink: { bg: "group-hover:bg-pink-50/50", text: "group-hover:text-pink-600", glow: "group-hover:bg-pink-400/20", iconBg: "bg-pink-500/10" },
    amber: { bg: "group-hover:bg-amber-50/50", text: "group-hover:text-amber-600", glow: "group-hover:bg-amber-400/20", iconBg: "bg-amber-500/10" },
    green: { bg: "group-hover:bg-green-50/50", text: "group-hover:text-green-600", glow: "group-hover:bg-green-400/20", iconBg: "bg-green-500/10" },
    cyan: { bg: "group-hover:bg-cyan-50/50", text: "group-hover:text-cyan-600", glow: "group-hover:bg-cyan-400/20", iconBg: "bg-cyan-500/10" },
    lime: { bg: "group-hover:bg-lime-50/50", text: "group-hover:text-lime-600", glow: "group-hover:bg-lime-400/20", iconBg: "bg-lime-500/10" },
    orange: { bg: "group-hover:bg-orange-50/50", text: "group-hover:text-orange-600", glow: "group-hover:bg-orange-400/20", iconBg: "bg-orange-500/10" },
    fuchsia: { bg: "group-hover:bg-fuchsia-50/50", text: "group-hover:text-fuchsia-600", glow: "group-hover:bg-fuchsia-400/20", iconBg: "bg-fuchsia-500/10" },
    red: { bg: "group-hover:bg-red-50/50", text: "group-hover:text-red-600", glow: "group-hover:bg-red-400/20", iconBg: "bg-red-500/10" },
};

function PartnerHexCard({ name, category, logo, fallback, color, index }: { name: string, category: string, logo: string, fallback: string, color: string, index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const [imgSrc, setImgSrc] = React.useState(logo);
    const colors = COLOR_MAP[color] || COLOR_MAP.blue;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.03,
                duration: 0.5,
                type: "spring",
                stiffness: 100
            }}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative flex items-center justify-center group"
        >
            <div
                className={`w-40 h-48 md:w-52 md:h-60 relative flex items-center justify-center transition-all duration-500 group-hover:scale-105`}
                style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
            >
                {/* Background Shadow Effect & Tint */}
                <div className={`absolute inset-0 bg-white border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-500 ${colors.bg}`} />

                {/* Content */}
                <div
                    style={{ transform: "translateZ(40px)" }}
                    className="z-10 flex flex-col items-center justify-center p-4 text-center"
                >
                    <div className={`w-14 h-14 md:w-16 md:h-16 mb-3 relative flex items-center justify-center ${colors.iconBg} rounded-lg overflow-hidden p-2 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-slate-100 group-hover:border-white/50 backdrop-blur-sm`}>
                        <Image
                            src={imgSrc}
                            alt={name}
                            fill
                            className="object-contain drop-shadow-sm"
                            onError={() => setImgSrc(fallback)}
                        />
                    </div>
                    <h3 className={`text-xs md:text-sm font-bold text-slate-800 mb-0.5 tracking-tight ${colors.text} transition-colors leading-tight line-clamp-2 px-2`}>
                        {name}
                    </h3>
                    <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">
                        {category}
                    </p>
                </div>

                {/* Hover Glow Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
            </div>

            {/* Mesh Glow behind */}
            <div className={`absolute inset-0 -z-10 ${colors.glow} blur-2xl transition-all duration-700 rounded-full opacity-0 group-hover:opacity-100`} />
        </motion.div>
    );
}

export function Partners3D() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

    // Grouping for 17 items in Honeycomb Mesh effect
    const rows = [
        PARTNERS.slice(0, 4),    // 4
        PARTNERS.slice(4, 7),    // 3
        PARTNERS.slice(7, 11),   // 4
        PARTNERS.slice(11, 14),  // 3
        PARTNERS.slice(14, 17)   // 3
    ];

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full bg-[#f8fbff] py-24 overflow-hidden"
        >
            {/* Hexagonal Mesh Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.2]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 104V78M0 60l30 18 30-18V26L30 8 0 26v34zm30 18l30-18M0 60l30-18 30 18M30 42V16' fill='none' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '120px 208px',
                    maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
                }}
            />

            <motion.div
                style={{ scale }}
                className="max-w-7xl mx-auto px-6 relative z-10"
            >

                {/* Honeycomb Grid Container */}
                <div className="flex flex-col items-center gap-2 md:gap-0">
                    {rows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className={`flex justify-center items-center gap-2 md:gap-8 ${rowIndex % 2 !== 0 ? 'mt-[-30px] md:mt-[-55px]' : '-mt-2 md:mt-[-10px]'
                                }`}
                        >
                            {row.map((partner, index) => {
                                // Calculate flat index for animation and color sync
                                let flatIndex = 0;
                                for (let i = 0; i < rowIndex; i++) flatIndex += rows[i].length;
                                flatIndex += index;

                                return (
                                    <PartnerHexCard
                                        key={partner.name}
                                        name={partner.name}
                                        category={partner.category}
                                        logo={partner.logo}
                                        fallback={partner.fallback}
                                        color={partner.color}
                                        index={flatIndex}
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Ambient decorations */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-100/30 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}
