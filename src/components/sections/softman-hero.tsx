
import { motion } from "framer-motion";
import { ArrowRight, Star, ArrowUpRight, CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SoftmanHero() {
    return (
        <section className="relative pt-32 pb-0 overflow-hidden bg-white">

            {/* Soft Yellow Glow (Background Effect) */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at center, #FFF991 0%, transparent 70%)`,
                    opacity: 0.6,
                    mixBlendMode: "multiply",
                }}
            />

            {/* Grid Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">

                {/* Top Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-2 pr-4 py-1.5 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default"
                >
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className={`w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden`}>
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
                    ISO <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-violet-600 rounded-full text-white mx-1 align-bottom shadow-lg shadow-violet-200"><Star className="w-6 h-6 md:w-8 md:h-8 fill-current" /></span> Certified
                    <br />
                    For <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-orange-500 rounded-full text-white mx-1 align-bottom shadow-lg shadow-orange-200"><ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" /></span> Enterprise Growth
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
                    className="flex flex-col sm:flex-row items-center gap-4 mb-20"
                >
                    <Button className="h-12 px-8 rounded-xl bg-gray-900 text-white hover:bg-gray-800 text-base font-medium shadow-xl shadow-gray-200/50">
                        Explore Our Services
                    </Button>
                    <Button variant="outline" className="h-12 px-8 rounded-xl border-gray-200 hover:bg-gray-50 text-base font-medium text-gray-700">
                        Request Callback <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </motion.div>

                {/* 3D Floating Cards Container */}
                <div className="relative w-full max-w-[1000px] h-[500px] perspective-[1200px] flex justify-center items-start mb-[-80px] md:mb-[-120px]">

                    {/* Left Card - Violet (Background) */}
                    <motion.div
                        initial={{ opacity: 0, x: -100, y: 50, rotateX: 10, rotateY: 10, rotateZ: -15, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            x: -220, // Push further left
                            y: 40,   // Push down
                            rotateX: 10,
                            rotateY: 20, // Face inward
                            rotateZ: -10, // Tilt left
                            scale: 0.85
                        }}
                        transition={{ duration: 1, type: "spring" }}
                        style={{ zIndex: 10 }}
                        className="absolute w-[320px] aspect-[4/3] bg-gradient-to-br from-[#ECE9FF] to-[#D4CFFF] rounded-[2rem] border border-white/50 shadow-2xl p-6 hidden md:block"
                    >
                        {/* Floating Animation Wrapper */}
                        <motion.div
                            animate={{ y: [0, -15, 0], rotateZ: [-10, -8, -10] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="w-full h-full flex flex-col justify-between"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 bg-white/40 px-3 py-1.5 rounded-full">
                                    <CheckCircle2 className="w-4 h-4 text-violet-600" />
                                    <span className="text-xs font-bold text-violet-700 uppercase tracking-wider">INNOVATION</span>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                                {/* Abstract Ring */}
                                <div className="w-32 h-32 rounded-full border-[16px] border-violet-400/20 relative">
                                    <div className="absolute inset-0 border-[16px] border-l-violet-500 border-t-violet-500 border-r-transparent border-b-transparent rounded-full rotate-45" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-[#3B3066] leading-none mb-1">7-Layer</h3>
                                <h3 className="text-2xl font-bold text-[#5B4C93] leading-none">Architecture</h3>
                                <div className="h-1.5 w-full bg-violet-200 rounded-full mt-4 overflow-hidden">
                                    <div className="h-full bg-violet-600 w-[70%]" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Card - Orange (Background) */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, y: 50, rotateX: 10, rotateY: -10, rotateZ: 15, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            x: 220, // Push further right
                            y: 80,  // Push down more
                            rotateX: 10,
                            rotateY: -20, // Face inward
                            rotateZ: 6, // Tilt right
                            scale: 0.85
                        }}
                        transition={{ duration: 1, type: "spring" }}
                        style={{ zIndex: 10 }}
                        className="absolute w-[320px] aspect-[4/3] bg-gradient-to-br from-[#FF512F] to-[#DD2476] rounded-[2rem] border border-white/20 shadow-2xl p-6 text-white hidden md:block"
                    >
                        {/* Floating Animation Wrapper */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotateZ: [6, 8, 6] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                            className="w-full h-full flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold leading-tight">Strategy<br />Workshop</h3>
                                <div className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold backdrop-blur-sm">
                                    SELECT DATE
                                </div>
                            </div>
                            {/* Calendar Grid Visual */}
                            <div className="grid grid-cols-6 gap-2 mt-4 opacity-90">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className={`aspect-square rounded-full ${i === 7 ? 'bg-white shadow-lg scale-110' : 'bg-white/20'}`} />
                                ))}
                            </div>
                            <div className="mt-auto bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/90 overflow-hidden p-0.5">
                                    <img src="https://i.pravatar.cc/50?img=33" className="w-full h-full rounded-full object-cover" alt="" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-medium opacity-80 leading-none mb-1">Meeting with</div>
                                    <div className="text-xs font-bold leading-none">Engineering Team</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Center Card - Main (Foreground) */}
                    <motion.div
                        initial={{ opacity: 0, y: 100, rotateX: 30, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            scale: 1
                        }}
                        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                        style={{ zIndex: 50 }}
                        className="relative w-[340px] md:w-[420px] aspect-[1.4] bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 p-8"
                    >
                        {/* Subtle Bobbing for Main Card */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                            className="w-full h-full flex flex-col justify-between"
                        >
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white shadow-lg">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                    <div className="text-lg font-bold text-gray-900">Readiness Score</div>
                                </div>
                                <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors">
                                    <Download className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>

                            <div className="w-full space-y-6">
                                <div>
                                    <div className="flex justify-between text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">
                                        <span>System Score</span>
                                        <span>95/100</span>
                                    </div>
                                    <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden p-[2px]">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "95%" }}
                                            transition={{ delay: 1, duration: 1.5, type: "spring" }}
                                            className="h-full bg-gradient-to-r from-violet-600 to-blue-500 rounded-full shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-[#F8F9FB] rounded-[1.2rem] p-5 text-center transition-transform hover:scale-105">
                                        <div className="text-xs font-semibold text-gray-400 mb-1">Infrastructure</div>
                                        <div className="text-2xl font-black text-gray-900">98%</div>
                                    </div>
                                    <div className="bg-[#F8F9FB] rounded-[1.2rem] p-5 text-center transition-transform hover:scale-105">
                                        <div className="text-xs font-semibold text-gray-400 mb-1">Team Skills</div>
                                        <div className="text-2xl font-black text-gray-900">92%</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>

            </div>

            {/* Bottom Dark Section */}
            <div className="bg-[#121212] text-white pt-32 md:pt-48 pb-20 px-4 mt-20 md:mt-0 relative z-0">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                            Not a Vendor. A Partner.
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            If you&apos;re a founder, COO, or enterprise operator scaling a business that already works —
                            but behind the scenes, you need robust digital infrastructure — Softman was built for you.
                        </p>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
