
import { Navbar } from "@/components/ui/navbar";
import { ContactModern } from "@/components/sections/contact-modern";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="pt-20"
            >
                <ContactModern />
                <Footer />
            </motion.div>
        </div>
    );
}
