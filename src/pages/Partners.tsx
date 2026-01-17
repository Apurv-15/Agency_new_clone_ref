
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Partners3D } from "@/components/sections/partners-3d";
import { motion } from "framer-motion";

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-[#FBFBF9] selection:bg-orange-100">
            <Navbar />

            <main>
                {/* Antara-styled Page Header */}
                <section className="pt-48 pb-16 px-6 text-center relative overflow-hidden">
                    {/* Background Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#e8d8c3] opacity-30 rounded-full blur-[120px] -translate-y-1/2" />
                        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#f4f1ea] opacity-40 rounded-full blur-[100px] translate-y-1/2" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10"
                    >
                        <h1 className="text-6xl md:text-8xl font-serif text-slate-900 tracking-tight mb-8">
                            Where <span className="italic font-normal">Aesthetics</span> and <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">Functionality</span> Meet
                        </h1>
                        <p className="mt-8 text-slate-500 text-lg max-w-xl mx-auto font-normal leading-relaxed opacity-80">
                            Softman is a multidisciplinary engineering firm that shapes reality through
                            clever and simple solutions with functionality at its core.
                        </p>
                    </motion.div>
                </section>

                <Partners3D />

                {/* Refined Call to Action */}
                <section className="py-40 px-6 text-center bg-[#FBFBF9] border-t border-slate-100 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 0)', backgroundSize: '40px 40px' }}
                    />

                    <div className="max-w-4xl mx-auto relative z-10">
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-8 tracking-tight">Expand the Global Network</h2>
                        <p className="text-slate-500 mb-12 text-lg leading-relaxed max-w-2xl mx-auto opacity-70">
                            Partner with us to architect the next generation of infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="bg-slate-900 text-white px-12 py-5 rounded-full font-bold hover:bg-black transition-all shadow-2xl shadow-black/10 text-sm tracking-widest uppercase">
                                Connect with us
                            </button>
                            <button className="bg-transparent text-slate-900 border border-slate-200 px-12 py-5 rounded-full font-bold hover:bg-white transition-all text-sm tracking-widest uppercase">
                                View Capabilities
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
