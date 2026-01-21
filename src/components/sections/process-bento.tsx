import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Code2,
    Users,
    Headphones,
    CheckCircle2,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import './glow-cards.css';

const PROCESS_STEPS = [
    {
        title: "Business Analysis",
        icon: <Search className="w-6 h-6" />,
        color: "blue",
        items: [
            "Deep dive into customer requirements",
            "Agile flexibility for emerging needs",
            "Industry best-practice integration",
            "Sound foundational mapping"
        ],
        description: "Strategically defining the digital blueprint before a single line of code is written."
    },
    {
        title: "Software Development",
        icon: <Code2 className="w-6 h-6" />,
        color: "orange",
        items: [
            "Cutting-edge development platforms",
            "Skilled & veteran engineering team",
            "Rapid Application Development (RAD)",
            "Enterprise-grade version control"
        ],
        description: "Transforming concepts into robust, scalable software solutions with speed and precision."
    },
    {
        title: "Implementation Assistance",
        icon: <Users className="w-6 h-6" />,
        color: "purple",
        items: [
            "Comprehensive user training",
            "End-to-end data management",
            "Advanced migration utilities",
            "On-site start-up assistance"
        ],
        description: "Ensuring seamless integration and full operational readiness from day one."
    },
    {
        title: "Customer Support",
        icon: <Headphones className="w-6 h-6" />,
        color: "teal",
        items: [
            "Extensive channel partner network",
            "Centralized remote support center",
            "On-demand training & demo sessions",
            "CRM-driven experience tracking"
        ],
        description: "Beyond delivery, we provide continuous excellence and localized support networks."
    }
];

const COLOR_STYLES = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", tag: "bg-blue-600" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", tag: "bg-orange-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", tag: "bg-purple-600" },
    teal: { bg: "bg-teal-50", text: "text-teal-600", tag: "bg-teal-600" }
};

export function ProcessBento() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % PROCESS_STEPS.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % PROCESS_STEPS.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length);
    };

    const currentStep = PROCESS_STEPS[currentIndex];
    const styles = COLOR_STYLES[currentStep.color as keyof typeof COLOR_STYLES];

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
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

            <div className="glow-card-scope w-full flex flex-col items-center justify-center">
                <div className="relative w-full max-w-4xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                            exit={{ opacity: 0, scale: 0.9, rotateX: -10 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="w-full flex justify-center [perspective:1000px]"
                        >
                            <div className="glow-card w-full max-w-3xl aspect-[1.6/1] md:aspect-[2/1]">
                                <div className="glow-element"></div>
                                <div className="glow-card-inner">
                                    <span
                                        className="tag mb-4 shadow-sm"
                                        style={{ backgroundColor: `var(--text-color)` }}
                                    >
                                        Phase 0{currentIndex + 1}
                                    </span>

                                    <div className="flex flex-col md:flex-row gap-8 w-full h-full">
                                        <div className="flex-1 flex flex-col justify-center">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className={`p-3 rounded-xl ${styles.bg} ${styles.text}`}>
                                                    {React.cloneElement(currentStep.icon, { className: "w-8 h-8" })}
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
                                                    {currentStep.title}
                                                </h3>
                                            </div>

                                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                                {currentStep.description}
                                            </p>
                                        </div>

                                        <div className="flex-1 bg-slate-50/50 rounded-2xl p-6 flex flex-col justify-center border border-slate-100">
                                            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Key Deliverables</h4>
                                            <ul className="grid gap-3">
                                                {currentStep.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                                                        <CheckCircle2 className={`w-5 h-5 ${styles.text} shrink-0 mt-0.5`} />
                                                        <span className="text-sm md:text-base">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-violet-600 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-white shadow-lg border border-slate-100 text-slate-600 hover:text-violet-600 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-violet-500/20"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex gap-2 mt-8">
                    {PROCESS_STEPS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-violet-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
