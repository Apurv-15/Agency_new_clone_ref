"use client";

import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { SoftmanHero } from "@/components/sections/softman-hero";
// import { CalendarFeature } from "@/components/sections/calendar-feature";
import { TestimonialsModern } from "@/components/sections/testimonials-modern";
import { ContactModern } from "@/components/sections/contact-modern";
import { LazyLoader } from "@/components/ui/lazy-loader";
import { WhyUs } from "@/components/sections/why-us";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { BeamTimeline } from "@/components/sections/beam-timeline";
import { Footer } from "@/components/ui/footer";

import { motion } from "framer-motion";

export default function Home() {
    const [, setIsLoaded] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [showText, setShowText] = useState(false);

    const handleLoadComplete = () => {
        setIsLoaded(true);

        // Navbar appears subtlely as the transition starts
        setTimeout(() => {
            setShowNavbar(true);
        }, 200);

        // Text reveal follows after the scene is set
        setTimeout(() => {
            setShowText(true);
        }, 1200);
    };

    return (
        <>
            <LazyLoader onLoadComplete={handleLoadComplete} loadingDuration={3500} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: showNavbar ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="relative z-50"
            >
                <Navbar />
            </motion.div>

            <motion.div
                className="min-h-screen bg-background text-foreground selection:bg-primary/20"
                style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    perspective: 1000
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut"
                }}
            >
                {/* Softman Hero */}
                <SoftmanHero />

                {/* Calendar Feature Section */}
                {/* <CalendarFeature /> */}

                {/* Other sections stagger in after text starts or along with it */}
                <motion.div
                    id="main-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showText ? 1 : 0 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <WhyUs />
                    <WhyChooseUs />
                    <BeamTimeline />
                    <ContactModern />
                    <TestimonialsModern />
                    <Footer />
                </motion.div>
            </motion.div>
        </>
    );
}
