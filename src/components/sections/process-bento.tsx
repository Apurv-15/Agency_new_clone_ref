"use client";

import { motion } from 'framer-motion';
import {
    Search,
    Code2,
    Users,
    Headphones,
    CheckCircle2,
    ArrowUpRight
} from 'lucide-react';

const PROCESS_STEPS = [
    {
        title: "Business Analysis",
        icon: <Search className="w-6 h-6" />,
        color: "blue",
        gradient: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-100",
        textColor: "text-blue-700",
        items: [
            "Deep dive into customer requirements",
            "Agile flexibility for emerging needs",
            "Industry best-practice integration",
            "Sound foundational mapping"
        ],
        description: "Strategically defining the digital blueprint before a single line of code is written.",
        size: "md:col-span-2 md:row-span-1"
    },
    {
        title: "Software Development",
        icon: <Code2 className="w-6 h-6" />,
        color: "orange",
        gradient: "from-orange-500/20 to-amber-500/20",
        border: "border-orange-100",
        textColor: "text-orange-700",
        items: [
            "Cutting-edge development platforms",
            "Skilled & veteran engineering team",
            "Rapid Application Development (RAD)",
            "Enterprise-grade version control"
        ],
        description: "Transforming concepts into robust, scalable software solutions with speed and precision.",
        size: "md:col-span-1 md:row-span-2"
    },
    {
        title: "Implementation Assistance",
        icon: <Users className="w-6 h-6" />,
        color: "purple",
        gradient: "from-purple-500/20 to-violet-500/20",
        border: "border-purple-100",
        textColor: "text-purple-700",
        items: [
            "Comprehensive user training",
            "End-to-end data management",
            "Advanced migration utilities",
            "On-site start-up assistance"
        ],
        description: "Ensuring seamless integration and full operational readiness from day one.",
        size: "md:col-span-1 md:row-span-2"
    },
    {
        title: "Customer Support",
        icon: <Headphones className="w-6 h-6" />,
        color: "teal",
        gradient: "from-teal-500/20 to-emerald-500/20",
        border: "border-teal-100",
        textColor: "text-teal-700",
        items: [
            "Extensive channel partner network",
            "Centralized remote support center",
            "On-demand training & demo sessions",
            "CRM-driven experience tracking"
        ],
        description: "Beyond delivery, we provide continuous excellence and localized support networks.",
        size: "md:col-span-2 md:row-span-1"
    }
];

export function ProcessBento() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-4">
                        <span className="w-2 h-2 rounded-full bg-slate-400" />
                        <span className="text-slate-600 font-bold tracking-wider text-[10px] uppercase">
                            Our Methodology
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        The Full <span className="text-blue-600">Lifecycle</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        From initial analysis to long-term support, we orchestrate every stage of your digital transformation.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
                {PROCESS_STEPS.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`group relative overflow-hidden rounded-[2.5rem] bg-white border ${step.border} p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between ${step.size}`}
                    >
                        {/* Background Decoration */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-12 h-12 rounded-2xl bg-white shadow-md border ${step.border} flex items-center justify-center ${step.textColor} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    {step.icon}
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-slate-600 transition-colors" />
                            </div>

                            <h3 className="text-2xl font-black text-slate-800 mb-3">{step.title}</h3>
                            <p className="text-slate-500 text-sm mb-6 max-w-sm line-clamp-2">
                                {step.description}
                            </p>

                            <ul className="space-y-3">
                                {step.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                                        <CheckCircle2 className={`w-4 h-4 ${step.textColor} opacity-60`} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Floating ambient glow */}
                        <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-[50px] rounded-full ${step.gradient} opacity-0 group-hover:opacity-60 transition-opacity`} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
