
import { motion } from "framer-motion";
import { ArrowUpRight, Pill, ShoppingBag, Shirt, Layers, Globe, Wifi, Hammer, Smartphone, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

// Product Data
const products = [
    {
        id: 1,
        title: "PharMacc",
        category: "Pharma Wholesale",
        description: "Premium Business Solution for Pharmaceutical Wholesalers. Streamline inventory and accounting.",
        icon: <Pill className="w-6 h-6" />,
        color: "from-blue-400 to-cyan-500",
        bg: "bg-blue-50/50"
    },
    {
        id: 2,
        title: "PharTail",
        category: "Pharma Retail",
        description: "Perfect Prescription for Pharma Retail Computerisation. Manage your retail shop efficiently.",
        icon: <ShoppingBag className="w-6 h-6" />,
        color: "from-emerald-400 to-teal-500",
        bg: "bg-emerald-50/50"
    },
    {
        id: 3,
        title: "GenXTail",
        category: "General Retail",
        description: "Inventory and Accounting for All Type of Shopees. The next generation retail solution.",
        icon: <Layers className="w-6 h-6" />,
        color: "from-orange-400 to-red-500",
        bg: "bg-orange-50/50"
    },
    {
        id: 4,
        title: "Garment ReadyMade",
        category: "Fashion Retail",
        description: "Comprehensive Software for ReadyMade Garment Retail. Style and stock management made easy.",
        icon: <Shirt className="w-6 h-6" />,
        color: "from-purple-400 to-pink-500",
        bg: "bg-purple-50/50"
    },
    {
        id: 5,
        title: "White Gold",
        category: "Cotton Ginning",
        description: "A perfect solution exclusively for Cotton Ginners. Optimized for the cotton industry.",
        icon: <Layers className="w-6 h-6" />,
        color: "from-amber-400 to-yellow-500",
        bg: "bg-amber-50/50"
    },
    {
        id: 6,
        title: "Info Bridge",
        category: "Data Interchange",
        description: "A Cross Platform for Business Data Interchange. Bridging gaps in your data flow.",
        icon: <Globe className="w-6 h-6" />,
        color: "from-indigo-400 to-blue-500",
        bg: "bg-indigo-50/50"
    },
    {
        id: 7,
        title: "WiFi Tail",
        category: "Mobile Billing",
        description: "Mobile App for Counter Billing Management. Queue busting and fast checkout.",
        icon: <Wifi className="w-6 h-6" />,
        color: "from-sky-400 to-blue-600",
        bg: "bg-sky-50/50"
    },
    {
        id: 8,
        title: "e HardWare",
        category: "Hardware Trading",
        description: "Inventory and Accounting for Hardware Traders. Heavy-duty management for heavy goods.",
        icon: <Hammer className="w-6 h-6" />,
        color: "from-slate-400 to-gray-600",
        bg: "bg-gray-50/50"
    },
    {
        id: 9,
        title: "MedOrder",
        category: "Order Buying",
        description: "Mobile order booking system for wholesalers. Automated ordering on the go.",
        icon: <Smartphone className="w-6 h-6" />,
        color: "from-rose-400 to-pink-600",
        bg: "bg-rose-50/50"
    },
    {
        id: 10,
        title: "mPigmy",
        category: "Banking",
        description: "Mobile App based Pigmy Collection for Banks and Societies. Financial inclusion in your pocket.",
        icon: <Landmark className="w-6 h-6" />,
        color: "from-green-400 to-emerald-600",
        bg: "bg-green-50/50"
    }
];

export function ProductShowcase() {
    return (
        <section className="min-h-screen py-24 px-4 md:px-8 bg-[#FAFBFF]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-4"
                    >
                        Our Products
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto"
                    >
                        Specialized software solutions engineered for specific industry needs.
                        From pharma to retail, we have you covered.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductCard({ product, index }: { product: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={cn(
                "group relative overflow-hidden rounded-3xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300",
                "bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            )}
        >
            {/* Background Gradient Blob */}
            <div className={cn(
                "absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                `bg-gradient-to-br ${product.color}`
            )} />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div className={cn("p-3 rounded-2xl bg-gradient-to-br text-white shadow-sm", product.color)}>
                        {product.icon}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="w-5 h-5 text-gray-400" />
                    </div>
                </div>

                <div className="mb-4">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{product.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2 group-hover:text-blue-600 transition-colors">
                        {product.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                        {product.description}
                    </p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50/0 group-hover:border-gray-50 transition-colors">
                    <span className="text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                        Learn more <ArrowUpRight className="w-3 h-3" />
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
