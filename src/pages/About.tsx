"use client";

import { Navbar } from "@/components/ui/navbar";
import { Component as PageBackground } from "@/components/ui/background-components";
import { Footer } from "@/components/ui/footer";
import { Zap, Globe, Layers, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { ProcessBento } from "@/components/sections/process-bento";

// --- Data ---
const team = [
    { name: "Mandar Walvekar", role: "Visionary Leader", desc: "IIT Post Graduate. Driving innovation since 1992." },
    { name: "Neelkanth Muley", role: "Product Architect", desc: "The technical backbone of our enterprise solutions." },
    { name: "Sanjay Kore", role: "Support Command", desc: "Ensuring effective client resolution and satisfaction." },
    { name: "Narendra Kulkarni", role: "Growth Strategist", desc: "Leading market expansion and channel networks." }
];

const activities = [
    { title: "Business Automation", icon: <Cpu className="w-8 h-8 text-white" />, gradient: "from-blue-500 to-cyan-400" },
    { title: "Custom Software", icon: <Zap className="w-8 h-8 text-white" />, gradient: "from-violet-500 to-purple-400" },
    { title: "Turnkey Execution", icon: <Layers className="w-8 h-8 text-white" />, gradient: "from-emerald-500 to-teal-400" },
    { title: "Mobility Tech", icon: <Globe className="w-8 h-8 text-white" />, gradient: "from-pink-500 to-rose-400" }
];

// --- 3D Card Component ---
const Card3D = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
        whileHover={{ y: -5, scale: 1.01 }}
        className={`relative overflow-hidden bg-white rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white/50 hover:shadow-[0_30px_60px_-15px_rgba(139,92,246,0.15)] transition-all duration-300 ${className}`}
    >
        {children}
    </motion.div>
);

export default function AboutFuturistic() {
    return (
        <PageBackground>
            <div className="min-h-screen text-[#1D1D1F] font-sans selection:bg-blue-500/30">
                <Navbar />

                <main className="relative z-10 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-8">

                    {/* --- Section 1: The Identity (Top Fold) --- */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto">
                        {/* Main Hero Card */}
                        <Card3D className="lg:col-span-2 p-10 md:p-14 flex flex-col justify-between min-h-[500px] bg-white/80 backdrop-blur-md hover:bg-[#FDF2FF]/90 transition-colors">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200/50 mb-8 backdrop-blur-md">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                                    <span className="text-xs font-bold tracking-widest uppercase text-blue-800">Operational Since 1992</span>
                                </div>

                                <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-[0.9] text-[#1D1D1F]">
                                    We Are <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                                        Softman.
                                    </span>
                                </h1>
                            </div>

                            <div className="space-y-6">
                                <p className="text-2xl md:text-3xl font-medium text-[#424245] max-w-2xl leading-tight">
                                    An <span className="text-[#1D1D1F] font-bold">ISO 9001:2000</span> certified powerhouse.
                                    Architecting digital infrastructure with precision engineering.
                                </p>
                                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full" />
                            </div>
                        </Card3D>

                        {/* Stats / ISO Card */}
                        <Card3D delay={0.1} className="p-10 flex flex-col justify-between bg-gradient-to-br from-[#1D1D1F] to-[#010101] text-white">
                            <div className="space-y-4">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold leading-tight">Certified<br />Excellence</h3>
                            </div>
                            <div className="mt-12 relative">
                                <div className="text-sm font-bold opacity-60 mb-1 uppercase tracking-wider">Certification ID</div>
                                <div className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">9001:2000</div>
                                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px]" />
                            </div>
                        </Card3D>
                    </section>

                    {/* --- Section 2: The Core (Bottom Fold) --- */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Activities Module - Vibrant Cards */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 px-2 mb-2">
                                <span className="text-sm font-bold text-[#86868b] uppercase tracking-wider">Core Capabilities</span>
                            </div>
                            {activities.map((act, i) => (
                                <Card3D key={i} delay={0.2 + (i * 0.1)} className="p-1 group cursor-pointer hover:!scale-[1.03] hover:shadow-violet-500/10 transition-all">
                                    <div className="bg-white group-hover:bg-[#F5F3FF] rounded-[1.8rem] p-5 flex items-center gap-5 h-full relative z-10 transition-colors">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${act.gradient} flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                                            {act.icon}
                                        </div>
                                        <h3 className="font-bold text-xl text-[#1D1D1F] group-hover:text-violet-700 transition-colors">{act.title}</h3>
                                    </div>
                                </Card3D>
                            ))}
                        </div>

                        {/* Team Module - Grid */}
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            <div className="flex items-center gap-2 px-2 mb-2">
                                <span className="text-sm font-bold text-[#86868b] uppercase tracking-wider">Leadership Team</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                {team.map((member, i) => (
                                    <Card3D key={i} delay={0.3 + (i * 0.1)} className="p-8 flex flex-col justify-center group bg-white hover:bg-[#FDF2FF]">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border border-white shadow-inner flex items-center justify-center text-xl font-bold text-gray-400 group-hover:text-violet-600 group-hover:scale-110 transition-all duration-300">
                                                {member.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl text-[#1D1D1F] leading-tight group-hover:text-violet-900 transition-colors">{member.name}</h3>
                                                <p className="text-sm font-bold text-violet-600 uppercase tracking-wide mt-1">{member.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-lg text-[#86868b] leading-relaxed font-medium group-hover:text-[#424245] transition-colors">
                                            &quot;{member.desc}&quot;
                                        </p>
                                    </Card3D>
                                ))}
                            </div>
                        </div>

                    </section>

                    {/* --- Section 3: The Lifecycle (Bento) --- */}
                    <ProcessBento />

                    <div className="border-t border-gray-200 mt-12 pt-8 flex justify-between items-center text-xs font-bold text-[#86868b] uppercase tracking-widest">
                        <div>Softman Solutions © 2024</div>
                        <div>Designed in India</div>
                    </div>

                </main>
                <Footer />
            </div>
        </PageBackground>
    );
}
