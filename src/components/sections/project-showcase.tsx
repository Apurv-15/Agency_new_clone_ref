
import { motion } from "framer-motion";
import { Landmark, Bird, Milk, Wallet, Users, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "@/components/ui/image-shim";

// Project Data
const projects = [
    {
        id: 1,
        title: "TECHBANK",
        category: "Banking Solution",
        description: "Core Banking Solution for enterprise financial institutions.",
        icon: <Landmark className="w-5 h-5" />,
        color: "from-blue-500/20 to-cyan-500/20",
        image: "/images/projects_img/techbank.png",
        accent: "text-blue-600"
    },
    {
        id: 2,
        title: "NPICK",
        category: "Poultry Logistics",
        description: "Web-Application for Poultry Bird Pick-up with Mobile App integration.",
        icon: <Bird className="w-5 h-5" />,
        color: "from-rose-500/20 to-orange-500/20",
        image: "/images/projects_img/npick.png",
        accent: "text-rose-600"
    },
    {
        id: 3,
        title: "NTAIL",
        category: "Poultry Retail",
        description: "Web-Application for Poultry Retailing with seamless Mobile App support.",
        icon: <Bird className="w-5 h-5" />,
        color: "from-emerald-500/20 to-teal-500/20",
        image: "/images/projects_img/ntail.png",
        accent: "text-emerald-600"
    },
    {
        id: 4,
        title: "DAIRYPRO",
        category: "Dairy Management",
        description: "Web-Application for Dairy featuring Mobile App and Device Integration.",
        icon: <Milk className="w-5 h-5" />,
        color: "from-sky-500/20 to-indigo-500/20",
        image: "/images/projects_img/dairypro.png",
        accent: "text-sky-600"
    },
    {
        id: 5,
        title: "my@FI",
        category: "Financial Inclusion",
        description: "Comprehensive solution for Financial Inclusion and BC management.",
        icon: <Wallet className="w-5 h-5" />,
        color: "from-green-500/20 to-lime-500/20",
        image: "/images/projects_img/myFI.png",
        accent: "text-green-600"
    },
    {
        id: 6,
        title: "eSHAKTI",
        category: "SHG Accounting",
        description: "Web-Application for SHG Accounting and MIS with robust reporting.",
        icon: <Users className="w-5 h-5" />,
        color: "from-purple-500/20 to-fuchsia-500/20",
        image: "/images/projects_img/eshakti.jpg",
        accent: "text-purple-600"
    },
    {
        id: 7,
        title: "Solar_PV",
        category: "Energy",
        description: "Solar Energy for Power Generation and management systems.",
        icon: <Sun className="w-5 h-5" />,
        color: "from-yellow-500/20 to-orange-500/20",
        image: "/images/projects_img/solar_pv.png",
        accent: "text-yellow-600"
    }
];

export function ProjectShowcase() {
    return (
        <section className="min-h-screen py-32 px-4 md:px-8 bg-white selection:bg-black selection:text-white">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-24 text-left">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]"
                    >
                        Impactful solutions <br />
                        <span className="text-slate-400">deployed at scale.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 leading-relaxed font-medium"
                    >
                        Explore our track record of delivering specialized digital infrastructures
                        across diverse sectors and industries.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    const isPng = project.image.toLowerCase().endsWith('.png');

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
                        project.accent
                    )}
                >
                    {project.icon}
                </motion.div>

                <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight uppercase">
                    {project.title}
                </h3>

                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-[180px] mx-auto">
                    {project.description}
                </p>
            </div>

            <div className="relative w-full flex-1 flex items-end justify-center overflow-hidden">
                {/* Image Container positioned at the bottom */}
                <div className={cn(
                    "relative w-full transition-all duration-700 ease-out translate-y-3 group-hover:translate-y-1 px-4",
                    isPng ? "h-48 group-hover:scale-110" : "h-52 group-hover:scale-[1.03]"
                )}>
                    <Image
                        src={project.image}
                        alt={project.title}
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
