
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, LayoutGrid, MessageSquare, PieChart, Plus, Search, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function CalendarFeature() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative py-32 overflow-hidden bg-white">

            {/* Moving Background Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_340deg,rgba(56,189,248,0.1)_360deg)] opacity-60"
                />
                <motion.div
                    animate={{
                        translateY: ["0%", "-10%", "0%"],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 inset-x-0 h-[1000px] bg-gradient-to-b from-blue-50/50 to-transparent"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">

                {/* Header Content */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6"
                    >
                        Run Your Business <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                            From One Dashboard
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 mb-10 leading-relaxed"
                    >
                        Softman connects scheduling, clients, deals, and tasks into a single real-time operating view.
                        Say goodbye to switching apps.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Button className="h-12 px-8 rounded-full bg-slate-900 text-white hover:bg-slate-800 text-lg shadow-lg shadow-slate-200">
                            Get Started
                        </Button>
                        <Button variant="outline" className="h-12 px-8 rounded-full border-slate-200 text-slate-600 hover:bg-slate-50 text-lg">
                            Try Demo
                        </Button>
                    </motion.div>
                </div>

                {/* Dashboard UI Mockup */}
                <motion.div
                    style={{ y, opacity }}
                    className="w-full max-w-6xl rounded-2xl border border-slate-200 shadow-[0_50px_100px_-20px_rgba(56,189,248,0.2)] bg-white overflow-hidden"
                >
                    <div className="flex h-[800px]">
                        {/* Sidebar */}
                        <div className="w-16 md:w-64 border-r border-slate-100 bg-slate-50/50 flex-shrink-0 flex flex-col">
                            <div className="p-6 flex items-center gap-2 mb-6">
                                <div className="w-6 h-6 bg-blue-600 rounded-lg flex-shrink-0" />
                                <span className="font-bold text-slate-700 hidden md:block">CRM</span>
                            </div>
                            <div className="flex-1 overflow-y-auto px-4 space-y-1">
                                {[
                                    { icon: LayoutGrid, label: "Dashboard" },
                                    { icon: Users, label: "People" },
                                    { icon: PieChart, label: "Analytics" },
                                    { icon: CalendarIcon, label: "Calendar", active: true },
                                    { icon: MessageSquare, label: "Messages" },
                                ].map((item, i) => (
                                    <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer ${item.active ? 'bg-white shadow-sm text-blue-600 font-medium' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'}`}>
                                        <item.icon className="w-5 h-5 flex-shrink-0" />
                                        <span className="hidden md:block">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 border-t border-slate-100">
                                <div className="flex items-center gap-3 px-3 py-2 text-slate-500">
                                    <Settings className="w-5 h-5" />
                                    <span className="hidden md:block">Settings</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 flex flex-col bg-white">
                            {/* Top Nav */}
                            <div className="h-16 border-b border-slate-100 flex items-center justify-between px-6">
                                <h3 className="font-semibold text-slate-800 text-lg">Appointments</h3>
                                <div className="flex items-center gap-4">
                                    <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-md border border-slate-100 text-sm text-slate-400 w-64">
                                        <Search className="w-4 h-4" />
                                        <span>Search...</span>
                                        <div className="ml-auto text-xs border border-slate-200 rounded px-1">⌘K</div>
                                    </div>
                                    <Button size="sm" className="bg-slate-900 text-white gap-2">
                                        <Plus className="w-4 h-4" /> <span className="hidden sm:inline">Add Appointment</span>
                                    </Button>
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold border border-blue-200">
                                        JS
                                    </div>
                                </div>
                            </div>

                            {/* Calendar Toolbar */}
                            <div className="px-6 py-4 flex items-center justify-between border-b border-slate-50">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1 bg-slate-50 rounded-lg p-1 border border-slate-100">
                                        <button className="p-1 hover:bg-white hover:shadow-sm rounded"><ChevronLeft className="w-4 h-4 text-slate-500" /></button>
                                        <button className="p-1 hover:bg-white hover:shadow-sm rounded"><ChevronRight className="w-4 h-4 text-slate-500" /></button>
                                    </div>
                                    <span className="font-semibold text-slate-700 text-lg">January 2026</span>
                                </div>
                                <div className="flex bg-slate-50 rounded-lg p-1 border border-slate-100">
                                    <button className="px-4 py-1 text-sm font-medium text-slate-500 rounded hover:bg-white hover:shadow-sm">Day</button>
                                    <button className="px-4 py-1 text-sm font-medium text-slate-900 bg-white shadow-sm rounded">Week</button>
                                    <button className="px-4 py-1 text-sm font-medium text-slate-500 rounded hover:bg-white hover:shadow-sm">Month</button>
                                </div>
                            </div>

                            {/* Calendar Grid */}
                            <div className="flex-1 overflow-auto bg-slate-50/30 p-6">
                                <div className="grid grid-cols-8 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">

                                    {/* Time Column */}
                                    <div className="bg-white col-span-1 border-r border-slate-100">
                                        <div className="h-12 border-b border-slate-100" /> {/* Header spacer */}
                                        {[9, 10, 11, 12, 1, 2, 3, 4, 5].map((hour) => (
                                            <div key={hour} className="h-32 border-b border-slate-100 p-2 text-xs font-medium text-slate-400 flex justify-end pr-4">
                                                {hour}:00 {hour >= 9 && hour < 12 ? 'AM' : 'PM'}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Days Columns */}
                                    {["Sun 21", "Mon 22", "Tue 23", "Wed 24", "Thu 25", "Fri 26", "Sat 27"].map((day, i) => (
                                        <div key={i} className="bg-white col-span-1 relative">
                                            <div className="h-12 border-b border-slate-100 flex items-center justify-center font-medium text-sm text-slate-600 bg-slate-50/50">
                                                {day}
                                            </div>
                                            {/* Grid Lines */}
                                            {[9, 10, 11, 12, 1, 2, 3, 4, 5].map((h) => (
                                                <div key={h} className="h-32 border-b border-slate-50" />
                                            ))}

                                            {/* Events */}
                                            {i === 1 && (
                                                <div className="absolute top-[160px] left-1 right-1 h-28 bg-blue-50 border-l-4 border-blue-500 rounded p-2 cursor-pointer hover:shadow-md transition-shadow">
                                                    <div className="text-xs font-bold text-blue-700 mb-1">Discovery Call</div>
                                                    <div className="text-[10px] text-blue-500 flex items-center gap-1"><Clock className="w-3 h-3" /> 10:00 - 11:00 AM</div>
                                                    <div className="flex -space-x-1 mt-2">
                                                        <div className="w-5 h-5 rounded-full bg-blue-200 border-2 border-white" />
                                                        <div className="w-5 h-5 rounded-full bg-blue-300 border-2 border-white" />
                                                    </div>
                                                </div>
                                            )}
                                            {i === 3 && (
                                                <>
                                                    <div className="absolute top-[40px] left-1 right-1 h-20 bg-orange-50 border-l-4 border-orange-500 rounded p-2 cursor-pointer hover:shadow-md transition-shadow">
                                                        <div className="text-xs font-bold text-orange-700 mb-1">Client Review</div>
                                                        <div className="text-[10px] text-orange-500">09:15 AM</div>
                                                    </div>

                                                    {/* The 'Current Time' Line */}
                                                    <div className="absolute top-[280px] -left-2 -right-2 h-px bg-red-500 z-10 flex items-center">
                                                        <div className="w-2 h-2 rounded-full bg-red-500 -ml-1" />
                                                    </div>
                                                </>
                                            )}
                                            {i === 4 && (
                                                <div className="absolute top-[320px] left-1 right-1 h-24 bg-violet-50 border-l-4 border-violet-500 rounded p-2 cursor-pointer hover:shadow-md transition-shadow">
                                                    <div className="text-xs font-bold text-violet-700 mb-1">Team Sync</div>
                                                    <div className="text-[10px] text-violet-500">02:00 PM</div>
                                                </div>
                                            )}

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
