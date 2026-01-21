
import { Navbar } from "@/components/ui/navbar";

import { Footer } from "@/components/ui/footer";
import { ProcessBento } from "@/components/sections/process-bento";
import { motion } from "framer-motion";

export default function Process() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="pt-20"
            >

                <ProcessBento />
                <Footer />
            </motion.div>
        </div>
    );
}
