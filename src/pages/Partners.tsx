
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
                        <h1 className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tight mb-8">
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

            </main>

            <Footer />
        </div>
    );
}
