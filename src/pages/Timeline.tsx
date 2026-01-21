
import { Navbar } from "@/components/ui/navbar";
import { BeamTimeline } from "@/components/sections/beam-timeline";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";

export default function Timeline() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="pt-20"
            >
                <BeamTimeline />
                <Footer />
            </motion.div>
        </div>
    );
}
