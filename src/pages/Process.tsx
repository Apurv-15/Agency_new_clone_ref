
import { Navbar } from "@/components/ui/navbar";

import { Footer } from "@/components/ui/footer";
import { ProcessBento } from "@/components/sections/process-bento";
import { motion } from "framer-motion";

export default function Process() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="pt-20 flex-grow flex flex-col"
            >
                <div className="flex-grow flex flex-col items-center justify-center w-full">
                    <ProcessBento />
                </div>
                <Footer />
            </motion.div>
        </div>
    );
}
