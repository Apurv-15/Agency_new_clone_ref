
import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        id: 1,
        text: "Personalized service, highly professional and trustworthy team, makes banking a pleasure. Professional and trustworthy team, makes banking a pleasure.",
        name: "Michael Carter",
        role: "Web Developer",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        stars: 5,
    },
    {
        id: 2,
        text: "Personalized service, highly professional and trustworthy team, makes banking a pleasure. Professional and trustworthy team, makes banking a pleasure.",
        name: "David Thompson",
        role: "Software Engineer",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        stars: 5,
    },
    {
        id: 3,
        text: "Personalized service, highly professional and trustworthy team, makes banking a pleasure. Professional and trustworthy team, makes banking a pleasure.",
        name: "Sarah Jenkins",
        role: "Product Manager",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d",
        stars: 4,
    },
];

export function TestimonialsModern() {
    return (
        <section className="py-20 px-4 md:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-[3rem] bg-[#D4F976] p-8 md:p-16 overflow-hidden">

                    {/* Grid Pattern Background */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }}
                    />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Content */}
                        <div className="flex flex-col items-start gap-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-black/5">
                                <div className="bg-[#D4F976] rounded-full p-1">
                                    <Check className="w-3 h-3 text-black" strokeWidth={3} />
                                </div>
                                <span className="text-sm font-semibold text-black/80">Client Testimonials</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight leading-[1.1]">
                                What Our Clients Say About Us
                            </h2>

                            <p className="text-lg text-black/70 max-w-md leading-relaxed">
                                Our service is designed to empower your financial dreams with innovative solutions and unwavering commitment.
                            </p>

                            <Button
                                className="mt-4 bg-[#1A2521] text-white hover:bg-[#2C3B34] rounded-full px-8 py-6 text-base group"
                            >
                                Explore Services
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>

                        {/* Right Content - Cards Scroll */}
                        <div className="relative h-[600px] w-full overflow-hidden mask-gradient-y">
                            {/* Gradient Masks for smooth fade in/out */}
                            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#D4F976] to-transparent z-20 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#D4F976] to-transparent z-20 pointer-events-none" />

                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: "-50%" }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 20,
                                    ease: "linear"
                                }}
                                className="flex flex-col gap-6"
                            >
                                {/* Double the list for seamless loop */}
                                {[...testimonials, ...testimonials].map((testimonial, idx) => (
                                    <div
                                        key={`${testimonial.id}-${idx}`}
                                        className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-5 h-5 ${i < testimonial.stars ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                            &quot;{testimonial.text}&quot;
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full object-cover bg-gray-100"
                                            />
                                            <div>
                                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                <span className="text-gray-500 text-sm">{testimonial.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
