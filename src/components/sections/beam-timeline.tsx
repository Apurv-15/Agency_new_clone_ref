
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "@/components/ui/image-shim";
import { cn } from "@/lib/utils";
import { Cloud, Database, Smartphone, Users, Server } from "lucide-react";
import ElectricBeam from "@/components/ui/electric-beam";

interface TimelineItem {
    id: number;
    year: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    tech: string[];
    image: string;
    color: string;
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        year: "2021",
        title: "Centralized Data Exchange & Reporting Platform",
        description: "Launched MediOrder as a unified platform for seamless data exchange, dashboards, and MIS reporting.",
        icon: <Database className="w-5 h-5" />,
        tech: ["MediOrder", "Data Exchange", "MIS Reporting"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: 2,
        year: "2022",
        title: "Enhanced Data Integration via Pharmacc Mobile App",
        description: "Released mobile application for Pharmacc with seamless API integration for third-party data aggregators.",
        icon: <Smartphone className="w-5 h-5" />,
        tech: ["Pharmacc", "Mobile App", "API Integration"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
        color: "from-violet-500 to-purple-500",
    },
    {
        id: 3,
        year: "2023",
        title: "Cloud Enablement for Multi-Store Operations",
        description: "Released PHARTAIL 10 cloud-based version. Launched Chain Shopee to support multi store operations.",
        icon: <Cloud className="w-5 h-5" />,
        tech: ["PHARTAIL 10", "Cloud", "Multi-Store"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
        color: "from-sky-500 to-indigo-500",
    },
    {
        id: 4,
        year: "2024",
        title: "Comprehensive CRM & Mobile Solutions Launch",
        description: "Launched Patient CRM, SevaPlus, WIFITail, and RackReFill and GroupStockist Ordering apps for wholesalers.",
        icon: <Users className="w-5 h-5" />,
        tech: ["Patient CRM", "SevaPlus", "Wholesale Apps"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
        color: "from-pink-500 to-rose-500",
    },
    {
        id: 5,
        year: "2025",
        title: "Unified Portal & Cloud Migration",
        description: "Consolidated all apps into a unified portal and migrated from Softman Cloud to AWS Cloud.",
        icon: <Server className="w-5 h-5" />,
        tech: ["AWS Cloud", "Unified Portal", "Migration"],
        image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=1200",
        color: "from-amber-500 to-orange-500",
    },
];

export function BeamTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeId, setActiveId] = useState(1);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="projects" ref={containerRef} className="relative bg-background py-32">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Text & Beam */}
                    <div className="relative">
                        {/* The Vertical Beam Line Container */}
                        <div className="absolute left-8 top-0 bottom-0 w-20 hidden lg:block -translate-x-1/2">
                            <ElectricBeam scrollYProgress={scaleY} color="#8B5CF6" />
                        </div>

                        <div className="space-y-32 relative z-10 pb-32">
                            {timelineData.map((item) => (
                                <TimelineBlock
                                    key={item.id}
                                    item={item}
                                    setActiveId={setActiveId}
                                    isActive={activeId === item.id}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Sticky Image */}
                    <div className="hidden lg:block relative h-full">
                        <div className="sticky top-1/4 h-[500px] w-full rounded-[2rem] overflow-hidden border border-border shadow-2xl bg-card">
                            {timelineData.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="absolute inset-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeId === item.id ? 1 : 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
                                            <span className={cn("w-2 h-2 rounded-full bg-gradient-to-r", item.color)} />
                                            <span className="text-xs font-bold tracking-widest uppercase text-white/90">{item.year}</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {item.tech.map((t) => (
                                                <span key={t} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/80 backdrop-blur-sm">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineBlock({ item, setActiveId, isActive }: { item: TimelineItem; setActiveId: (id: number) => void; isActive: boolean }) {
    const ref = useRef<HTMLDivElement>(null);

    // Update active ID when this block is in view
    // We use a simple effect to detect when this component is roughly in the center
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveId(item.id);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [item.id, setActiveId]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={cn("pl-0 lg:pl-24 relative group", isActive ? "opacity-100" : "opacity-40 blur-[1px] transition-all duration-500")}
        >
            {/* Desktop Indicator Dot */}
            <div className={cn(
                "absolute left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-colors duration-500 z-20 hidden lg:block",
                isActive ? "bg-background border-primary scale-125" : "bg-background border-border"
            )}>
                {isActive && <div className="absolute inset-0 bg-violet-500 rounded-full animate-ping opacity-75" />}
            </div>

            <span className="text-sm font-mono text-violet-400 mb-2 block">{item.year}</span>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{item.title}</h3>
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg mb-6">
                {item.description}
            </p>

            {/* Mobile Image (Visible only on small screens) */}
            <div className="block lg:hidden w-full h-64 relative rounded-xl overflow-hidden my-6 border border-white/10">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                    <div className="flex gap-2">
                        {item.tech.map((t) => (
                            <span key={t} className="px-2 py-1 bg-background/60 rounded text-[10px] text-muted-foreground backdrop-blur-md">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tech Tags (Desktop) */}
            <div className="hidden lg:flex flex-wrap gap-2">
                {item.tech.map((t) => (
                    <span
                        key={t}
                        className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-400 group-hover:border-violet-500/30 transition-colors"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
