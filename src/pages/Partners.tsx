"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Partners3D } from "@/components/sections/partners-3d";
import { motion } from "framer-motion";

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-[#f8fbff] selection:bg-blue-200">
            <Navbar />

            <main>
                {/* Simple Page Header for Partners - Light Theme */}
                <section className="pt-40 pb-12 px-6 text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
                            Trusted by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Leaders</span>
                        </h1>
                        <p className="mt-6 text-slate-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                            Collaborating with industry giants to architect digital infrastructure
                            and drive precision engineering across the globe.
                        </p>
                    </motion.div>
                </section>

                {/* 3D Floating Partners Section (Internal Light Theme) */}
                <Partners3D />

                {/* Call to action - Light Theme */}
                <section className="py-32 px-6 text-center bg-white border-t border-slate-100">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Expand Our Ecosystem</h2>
                        <p className="text-slate-500 mb-10 text-lg leading-relaxed max-w-2xl mx-auto">
                            We are always looking for visionary partners to join our mission of
                            technological innovation and rural transformation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200/50 scale-100 hover:scale-105 active:scale-95">
                                PARTNER WITH US
                            </button>
                            <button className="bg-white text-slate-600 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all scale-100 hover:scale-105 active:scale-95">
                                VIEW CASE STUDIES
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
