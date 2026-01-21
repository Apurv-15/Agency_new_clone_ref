
import { motion } from "framer-motion";
import { ArrowRight, Star, ArrowUpRight, Download, Play, MoreHorizontal, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SoftmanHero() {
    return (
        <section className="relative pt-32 pb-0 overflow-hidden bg-[#FAFAF8]">

            {/* Soft Yellow Glow (Background Effect) */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, #FFF7D6 0%, transparent 60%)`,
                    opacity: 0.9,
                }}
            />

            {/* Grid Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">

                {/* Top Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 bg-white border border-gray-200/80 rounded-full px-2 pr-4 py-1.5 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default"
                >
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className={`w-7 h-7 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm`}>
                                <img src={`https://i.pravatar.cc/50?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <span className="text-sm font-medium text-gray-600">+100 happy clients</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6 max-w-4xl"
                >
                    ISO <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-violet-600 rounded-full text-white mx-1 align-middle shadow-lg shadow-violet-200"><Star className="w-6 h-6 md:w-8 md:h-8 fill-current" /></span> Certified
                    <br />
                    For <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-orange-500 rounded-full text-white mx-1 align-middle shadow-lg shadow-orange-200"><ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" /></span> Enterprise Growth
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed"
                >
                    Empowering your business with ISO 9001:2000 certified software solutions.
                    From custom automation to turnkey execution, we build the future.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-16"
                >
                    <Button className="h-12 px-8 rounded-full bg-gray-900 text-white hover:bg-gray-800 text-base font-medium shadow-xl shadow-gray-900/20">
                        Explore Our Services
                    </Button>
                    <Button variant="outline" className="h-12 px-8 rounded-full border-gray-300 bg-white hover:bg-gray-50 text-base font-medium text-gray-700">
                        Request Callback <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </motion.div>

                {/* 3D Floating Cards Container */}
                <div className="relative w-full max-w-[1200px] h-[520px] flex justify-center items-center mb-[-100px] md:mb-[-140px]" style={{ perspective: '1200px' }}>

                    {/* Left Card - Purple/Violet Theme */}
                    <motion.div
                        initial={{ opacity: 0, x: -150, y: 80, rotateY: 25, scale: 0.75 }}
                        animate={{
                            opacity: 1,
                            x: -280,
                            y: 20,
                            rotateY: 18,
                            rotateX: 5,
                            rotateZ: -3,
                            scale: 0.9
                        }}
                        transition={{ duration: 1.2, type: "spring", stiffness: 60 }}
                        style={{ zIndex: 10, transformStyle: 'preserve-3d' }}
                        className="absolute w-[300px] h-[380px] rounded-[2rem] shadow-2xl hidden md:block overflow-hidden"
                    >
                        {/* Floating Animation Wrapper */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="w-full h-full"
                        >
                            {/* Card Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2D1B4E] via-[#3D2B5E] to-[#1A0F30]" />

                            {/* Content */}
                            <div className="relative z-10 p-6 h-full flex flex-col">
                                {/* Top Badge */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-6 h-6 rounded-lg bg-violet-400/30 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-sm bg-violet-400" />
                                    </div>
                                    <span className="text-xs font-semibold text-violet-300/80 uppercase tracking-wider">AI READINESS</span>
                                </div>

                                {/* Polar Chart Visual */}
                                <div className="flex-1 flex items-center justify-center relative">
                                    <div className="relative w-40 h-40">
                                        {/* Concentric circles */}
                                        {[1, 2, 3, 4].map((ring) => (
                                            <div
                                                key={ring}
                                                className="absolute inset-0 rounded-full border border-violet-500/20"
                                                style={{ transform: `scale(${0.25 * ring})` }}
                                            />
                                        ))}
                                        {/* Radar segments */}
                                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                            <polygon
                                                points="50,15 75,35 70,70 30,70 25,35"
                                                fill="url(#polarGradient)"
                                                className="opacity-60"
                                            />
                                            <defs>
                                                <linearGradient id="polarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#A78BFA" />
                                                    <stop offset="100%" stopColor="#6D28D9" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        {/* Center dot */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
                                    </div>
                                    {/* Play button overlay */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                                    </div>
                                </div>

                                {/* Bottom Section */}
                                <div className="mt-auto">
                                    <h3 className="text-2xl font-bold text-white leading-tight mb-1">7-Pillar of AI</h3>
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-violet-400 fill-violet-400" />
                                        <span className="text-lg font-semibold text-violet-300">Polar Chart</span>
                                    </div>
                                    {/* Action Bar */}
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-xs text-violet-400/60 font-medium uppercase tracking-wider">SCHEDULE</span>
                                        <div className="flex items-center gap-1 bg-violet-500/30 px-3 py-1.5 rounded-full">
                                            <span className="text-xs font-bold text-white">WORKSHOP</span>
                                            <ChevronRight className="w-3 h-3 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Center Card - Main Dashboard (Foreground) */}
                    <motion.div
                        initial={{ opacity: 0, y: 120, rotateX: 20, scale: 0.85 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            scale: 1
                        }}
                        transition={{ delay: 0.15, duration: 0.9, type: "spring", stiffness: 70 }}
                        style={{ zIndex: 50, transformStyle: 'preserve-3d' }}
                        className="relative w-[360px] md:w-[440px] bg-white rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.18)] border border-gray-100"
                    >
                        {/* Subtle Bobbing */}
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                            className="p-7"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="text-2xl font-bold text-gray-900">AI Readiness</div>
                                </div>
                                <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors">
                                    <Download className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-6">
                                <Star className="w-5 h-5 text-gray-900 fill-gray-900" />
                                <span className="text-xl font-bold text-gray-900">Score</span>
                            </div>

                            {/* Progress Bars Section */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">
                                    <span>30-DAY PROGRESS</span>
                                </div>
                                <div className="flex items-end gap-2 mb-3">
                                    <div className="flex-1 relative">
                                        {/* Multi-segment progress */}
                                        <div className="flex gap-1 h-3">
                                            <div className="flex-1 bg-gray-900 rounded-full" />
                                            <div className="flex-1 bg-orange-400 rounded-full" style={{ flex: '0.8' }} />
                                        </div>
                                        <div className="flex justify-between mt-2">
                                            <span className="text-[10px] font-medium text-gray-400">Start</span>
                                            <span className="text-xs font-bold text-gray-500">35<span className="text-gray-300">/100</span></span>
                                            <span className="text-xs font-bold text-gray-500">80<span className="text-gray-300">/100</span></span>
                                        </div>
                                        <div className="flex justify-center gap-8 mt-1">
                                            <span className="text-[10px] font-medium text-gray-400">Now</span>
                                            <span className="text-[10px] font-medium text-gray-400">Ready</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-[#F8F8F6] rounded-2xl p-4 text-center transition-transform hover:scale-[1.02]">
                                    <div className="text-[10px] font-semibold text-gray-400 mb-2 uppercase tracking-wider leading-tight">Operational<br />Infrastructure</div>
                                    <div className="w-12 h-12 mx-auto mb-2 relative">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                            <circle cx="18" cy="18" r="14" fill="none" stroke="#E5E5E5" strokeWidth="3" />
                                            <circle cx="18" cy="18" r="14" fill="none" stroke="#1F2937" strokeWidth="3" strokeDasharray="70 100" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div className="text-lg font-black text-gray-900">70<span className="text-gray-400 text-sm">/100</span></div>
                                </div>
                                <div className="bg-[#F8F8F6] rounded-2xl p-4 text-center transition-transform hover:scale-[1.02]">
                                    <div className="text-[10px] font-semibold text-gray-400 mb-2 uppercase tracking-wider leading-tight">Team Structure<br />& Skills</div>
                                    <div className="w-12 h-12 mx-auto mb-2 relative">
                                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                            <circle cx="18" cy="18" r="14" fill="none" stroke="#E5E5E5" strokeWidth="3" />
                                            <circle cx="18" cy="18" r="14" fill="none" stroke="#1F2937" strokeWidth="3" strokeDasharray="90 100" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div className="text-lg font-black text-gray-900">90<span className="text-gray-400 text-sm">/100</span></div>
                                </div>
                                <div className="bg-[#F8F8F6] rounded-2xl p-4 text-center transition-transform hover:scale-[1.02] relative">
                                    <div className="text-[10px] font-semibold text-gray-400 mb-2 uppercase tracking-wider leading-tight">2-page<br />Summary</div>
                                    <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                                        <div className="text-3xl font-black text-gray-900">📄</div>
                                    </div>
                                    <div className="text-sm font-black text-gray-900">READ<br /><span className="text-gray-400">DOC</span></div>
                                    <MoreHorizontal className="absolute top-3 right-3 w-4 h-4 text-gray-300" />
                                </div>
                            </div>

                            {/* Bottom Action */}
                            <div className="flex justify-end mt-4">
                                <div className="flex items-center gap-0.5">
                                    <ChevronRight className="w-5 h-5 text-gray-900" />
                                    <ChevronRight className="w-5 h-5 text-gray-400 -ml-3" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Card - Orange Calendar Theme */}
                    <motion.div
                        initial={{ opacity: 0, x: 150, y: 80, rotateY: -25, scale: 0.75 }}
                        animate={{
                            opacity: 1,
                            x: 280,
                            y: 30,
                            rotateY: -18,
                            rotateX: 5,
                            rotateZ: 3,
                            scale: 0.9
                        }}
                        transition={{ duration: 1.2, type: "spring", stiffness: 60 }}
                        style={{ zIndex: 10, transformStyle: 'preserve-3d' }}
                        className="absolute w-[300px] h-[380px] rounded-[2rem] shadow-2xl hidden md:block overflow-hidden"
                    >
                        {/* Floating Animation Wrapper */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                            className="w-full h-full"
                        >
                            {/* Card Background with pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] via-[#F05E23] to-[#E84118]" />
                            {/* Decorative circles pattern */}
                            <div className="absolute inset-0 opacity-20">
                                {[...Array(20)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute rounded-full border border-white/30"
                                        style={{
                                            width: `${20 + Math.random() * 40}px`,
                                            height: `${20 + Math.random() * 40}px`,
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-6 h-full flex flex-col text-white">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold leading-tight flex items-center gap-2">
                                            AI Strategy
                                            <span className="text-orange-200">+</span>
                                        </h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                                                <Star className="w-3 h-3 text-white fill-white" />
                                            </div>
                                            <span className="text-lg font-bold">Workshop</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold backdrop-blur-sm flex items-center gap-1">
                                        SELECT DATE
                                        <ChevronRight className="w-3 h-3" />
                                    </div>
                                </div>

                                {/* Calendar Grid */}
                                <div className="flex-1 flex flex-col justify-center">
                                    {/* Days Header */}
                                    <div className="grid grid-cols-7 gap-1 mb-2">
                                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                            <div key={day} className="text-[9px] font-medium text-white/60 text-center">{day}</div>
                                        ))}
                                    </div>
                                    {/* Calendar Days */}
                                    <div className="grid grid-cols-7 gap-1.5">
                                        {[...Array(21)].map((_, i) => {
                                            const day = i + 1;
                                            const isHighlighted = [1, 7, 13, 20, 21].includes(day);
                                            const isSelected = day === 7;
                                            return (
                                                <div
                                                    key={i}
                                                    className={`aspect-square rounded-full flex items-center justify-center text-xs font-semibold transition-all
                                                        ${isSelected ? 'bg-white text-orange-500 shadow-lg scale-110' :
                                                            isHighlighted ? 'bg-white/30' : 'bg-white/10'}`}
                                                >
                                                    {day}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Bottom Section - Appointment */}
                                <div className="mt-4 bg-white/15 backdrop-blur-md rounded-xl p-3">
                                    <div className="text-[10px] font-medium text-white/70 mb-2">Set appointment</div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-white/90 overflow-hidden ring-2 ring-white/30">
                                            <img src="https://i.pravatar.cc/50?img=33" className="w-full h-full object-cover" alt="Person" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-bold leading-none mb-0.5">with Branden</div>
                                            <div className="text-[10px] text-white/70">BRAND CONSULTANT</div>
                                        </div>
                                    </div>
                                    {/* Time slots */}
                                    <div className="flex gap-2 mt-3">
                                        {['01:30PM', '03:30PM', '04:30PM'].map((time, i) => (
                                            <div key={time} className={`text-[9px] font-medium px-2 py-1 rounded-full ${i === 0 ? 'bg-white/30' : 'bg-white/10'}`}>
                                                {time}
                                            </div>
                                        ))}
                                    </div>
                                    {/* Teams badge */}
                                    <div className="absolute bottom-4 right-4 bg-emerald-400 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                                        30 TEAMS ✓
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>

            </div>

            {/* Bottom Dark Section */}
            <div className="bg-[#0F0F0F] text-white pt-36 md:pt-52 pb-24 px-4 mt-24 md:mt-0 relative z-0">
                {/* Curved top edge */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-[#FAFAF8]" style={{
                    borderRadius: '0 0 50% 50%',
                    transform: 'translateY(-1px)'
                }} />
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                            Not a Vendor. A Partner.
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                            If you&apos;re a founder, COO, or enterprise operator scaling a business that already works —
                            but behind the scenes, you need robust digital infrastructure — Softman was built for you.
                        </p>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
