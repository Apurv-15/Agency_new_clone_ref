
import { motion } from "framer-motion";
import { Pill, ShoppingBag, Shirt, Layers, Globe, Wifi, Hammer, Smartphone, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "@/components/ui/image-shim";

// Product Data
const products = [
    {
        id: 1,
        title: "PharMacc",
        category: "Pharma Wholesale",
        description: "Premium Business Solution for Pharmaceutical Wholesalers.",
        icon: <Pill className="w-5 h-5" />,
        color: "from-blue-500/20 to-cyan-500/20",
        image: "/images/products_img/pharmacc.jpg",
        accent: "text-blue-600"
    },
    {
        id: 2,
        title: "PharTail",
        category: "Pharma Retail",
        description: "Perfect Prescription for Pharma Retail Computerisation.",
        icon: <ShoppingBag className="w-5 h-5" />,
        color: "from-emerald-500/20 to-teal-500/20",
        image: "/images/products_img/phartail.jpg",
        accent: "text-emerald-600"
    },
    {
        id: 3,
        title: "GenXTail",
        category: "General Retail",
        description: "Comprehensive Inventory and Accounting for All Shopees. The next generation retail operating system.",
        icon: <Layers className="w-5 h-5" />,
        color: "from-orange-500/20 to-red-500/20",
        image: "/images/products_img/genxtail.png",
        accent: "text-orange-600"
    },
    {
        id: 4,
        title: "Garment ReadyMade",
        category: "Fashion Retail",
        description: "Optimized Software for ReadyMade Garment Retail. Style and stock management made effortless.",
        icon: <Shirt className="w-5 h-5" />,
        color: "from-purple-500/20 to-pink-500/20",
        image: "/images/products_img/egarment.png",
        accent: "text-purple-600"
    },
    {
        id: 5,
        title: "White Gold",
        category: "Cotton Ginning",
        description: "A perfect solution exclusively for Cotton Ginners. High-performance software for the cotton industry.",
        icon: <Layers className="w-5 h-5" />,
        color: "from-amber-500/20 to-yellow-500/20",
        image: "/images/products_img/whitegold.png",
        accent: "text-amber-600"
    },
    {
        id: 6,
        title: "Info Bridge",
        category: "Data Interchange",
        description: "A Cross Platform for Business Data Interchange. Bridging gaps in your global data flow.",
        icon: <Globe className="w-5 h-5" />,
        color: "from-indigo-500/20 to-blue-500/20",
        image: "/images/products_img/infobridge.png",
        accent: "text-indigo-600"
    },
    {
        id: 7,
        title: "WiFi Tail",
        category: "Mobile Billing",
        description: "Advanced Mobile App for Counter Billing Management. Queue busting checkout experience.",
        icon: <Wifi className="w-5 h-5" />,
        color: "from-sky-500/20 to-blue-600/20",
        image: "/images/products_img/wifitail.png",
        accent: "text-sky-600"
    },
    {
        id: 8,
        title: "e HardWare",
        category: "Hardware Trading",
        description: "Inventory and Accounting for Hardware Traders. Heavy-duty management for industrial goods.",
        icon: <Hammer className="w-5 h-5" />,
        color: "from-slate-500/20 to-gray-600/20",
        image: "/images/products_img/ehardware.png",
        accent: "text-slate-600"
    },
    {
        id: 9,
        title: "MedOrder",
        category: "Order Buying",
        description: "Professional Mobile order booking system for wholesalers. Automated logistics on the go.",
        icon: <Smartphone className="w-5 h-5" />,
        color: "from-rose-500/20 to-pink-600/20",
        image: "/images/products_img/medorder.png",
        accent: "text-rose-600"
    },
    {
        id: 10,
        title: "mPigmy",
        category: "Banking",
        description: "Mobile App based Pigmy Collection for Banks. Modern financial inclusion in your pocket.",
        icon: <Landmark className="w-5 h-5" />,
        color: "from-green-500/20 to-emerald-600/20",
        image: "/images/products_img/mpigmy.png",
        accent: "text-green-600"
    }
];

export function ProductShowcase() {
    return (
        <section className="min-h-screen py-32 px-4 md:px-8 bg-white selection:bg-black selection:text-white">
            <div className="max-w-7xl mx-auto">


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductCard({ product, index }: { product: any, index: number }) {
    const isPng = product.image.toLowerCase().endsWith('.png');

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            className="group relative h-[380px] w-full bg-[#f8f9fa] rounded-[2rem] overflow-hidden flex flex-col items-center text-center px-4 py-8 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
        >
            <div className="relative z-20 w-full flex flex-col items-center mb-4">
                {/* Small Circular Icon Container */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center mb-4 bg-white shadow-sm border border-slate-100",
                        product.accent
                    )}
                >
                    {product.icon}
                </motion.div>

                <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight uppercase">
                    {product.title}
                </h3>

                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[180px] mx-auto line-clamp-2">
                    {product.description}
                </p>
            </div>

            <div className="relative w-full flex-1 flex items-end justify-center overflow-hidden">
                {/* Image Container positioned at the bottom */}
                <div className={cn(
                    "relative w-full transition-all duration-700 ease-out translate-y-3 group-hover:translate-y-1 px-4",
                    isPng ? "h-48 group-hover:scale-110" : "h-52 group-hover:scale-[1.03]"
                )}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        className={cn(
                            "w-full h-full object-contain object-bottom relative z-10 transition-all duration-500",
                            isPng ? "drop-shadow-2xl" : "rounded-2xl shadow-lg border border-white/50"
                        )}
                    />
                </div>
            </div>

            {/* Hover Learn More Overlay */}
            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-500 pointer-events-none" />
        </motion.div>
    );
}
