
import { Navbar } from "@/components/ui/navbar";
import { ProjectShowcase } from "@/components/sections/project-showcase";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <ProjectShowcase />
                <Footer />
            </motion.div>
        </div>
    );
}
