import { Navbar } from "@/components/ui/navbar";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Footer } from "@/components/ui/footer";
import { motion } from "framer-motion";

export default function Products() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <ProductShowcase />
                <Footer />
            </motion.div>
        </div>
    );
}
