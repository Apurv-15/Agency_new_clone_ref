import Image from "next/image";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { GlowingBorder } from "@/components/ui/glowing-border";

export function WhyUs() {
    return (
        <section className="bg-[#F3F4F6] px-6 py-24 min-h-screen text-black font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center">
                    <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4">Why Us</p>
                    <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-black">
                        How we deliver better <br />
                        work <span className="text-gray-400 font-serif italic">that lasts</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="md:col-span-1 flex flex-col gap-6">
                        {/* Card 1: Fast turnarounds */}
                        <CardContainer className="inter-var w-full h-[500px]" containerClassName="block">
                            <GlowingBorder className="h-full w-full rounded-[32px] bg-[#E5E5E5]">
                                <CardBody className="relative group/card w-full h-full rounded-[32px] overflow-hidden">
                                    <div className="flex flex-col p-8 h-full relative z-20">
                                        <CardItem translateZ="50" className="text-2xl font-medium mb-3">Fast turnarounds</CardItem>
                                        <CardItem as="p" translateZ="60" className="text-gray-600 text-lg leading-relaxed">
                                            Timelines are respected here. Expect quick handoffs, clear communication, and momentum that doesn&apos;t stall.
                                        </CardItem>
                                    </div>
                                    <CardItem translateZ="30" className="absolute inset-0 z-0 mt-32 h-full w-full" as="div">
                                        <Image
                                            src="/images/why-us/fast-turnarounds.png"
                                            alt="Fast Turnarounds"
                                            fill
                                            className="object-cover object-bottom opacity-90 transition-transform duration-700 group-hover/card:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#E5E5E5]/50 to-[#E5E5E5] pointer-events-none" />
                                    </CardItem>
                                </CardBody>
                            </GlowingBorder>
                        </CardContainer>

                        {/* Card 4: Iteration until satisfaction */}
                        <CardContainer className="inter-var w-full h-[350px]" containerClassName="block">
                            <GlowingBorder className="h-full w-full rounded-[32px] bg-white">
                                <CardBody className="relative group/card w-full h-full rounded-[32px] overflow-hidden">
                                    <div className="flex flex-col p-8 h-full relative z-20">
                                        <CardItem translateZ="50" className="text-2xl font-medium mb-3">Iteration until satisfaction</CardItem>
                                        <CardItem as="p" translateZ="60" className="text-gray-600 text-lg leading-relaxed mb-6">
                                            Refinement is part of the process. We stay in the loop until you&apos;re genuinely happy with the outcome.
                                        </CardItem>
                                    </div>
                                    <CardItem translateZ="80" className="absolute bottom-[-50px] right-[-50px] w-[120%] h-[80%] z-10">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src="/images/why-us/iteration.png"
                                                alt="Laptop"
                                                fill
                                                className="object-cover object-left-top"
                                            />
                                        </div>
                                    </CardItem>
                                </CardBody>
                            </GlowingBorder>
                        </CardContainer>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-2 flex flex-col gap-6">
                        {/* Card 2: Conversion focused */}
                        <CardContainer className="inter-var w-full h-[350px]" containerClassName="block">
                            <GlowingBorder className="h-full w-full rounded-[32px] bg-[#0A0A0A]">
                                <CardBody className="relative group/card w-full h-full rounded-[32px] overflow-hidden p-8 text-white flex flex-col justify-between">
                                    <div className="max-w-md relative z-20">
                                        <CardItem translateZ="50" className="text-2xl font-medium mb-3">Conversion focused</CardItem>
                                        <CardItem as="p" translateZ="60" className="text-gray-400 text-lg leading-relaxed">
                                            Good design looks great, but it also works. Every decision is made with performance and user goals in mind.
                                        </CardItem>
                                    </div>
                                    <CardItem translateZ="40" className="absolute bottom-0 right-0 w-[50%] h-[120%] pointer-events-none z-10">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src="/images/why-us/conversion-focused.png"
                                                alt="Graph"
                                                fill
                                                className="object-contain object-bottom scale-125 translate-y-10 translate-x-10"
                                            />
                                        </div>
                                    </CardItem>
                                </CardBody>
                            </GlowingBorder>
                        </CardContainer>

                        {/* Card 3: Quality over quantity */}
                        <CardContainer className="inter-var w-full h-[500px]" containerClassName="block">
                            <GlowingBorder className="h-full w-full rounded-[32px] bg-white">
                                <CardBody className="relative group/card w-full h-full rounded-[32px] overflow-hidden p-8 flex flex-col">
                                    <div className="max-w-md relative z-20">
                                        <CardItem translateZ="50" className="text-2xl font-medium mb-3">Quality over quantity</CardItem>
                                        <CardItem as="p" translateZ="60" className="text-gray-600 text-lg leading-relaxed mb-8">
                                            We take on fewer projects so each one gets the attention, detail, and care it deserves.
                                        </CardItem>
                                    </div>
                                    <CardItem translateZ="40" className="absolute top-1/3 right-[-50px] w-full h-full z-10">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src="/images/why-us/quality-quantity.png"
                                                alt="UI Collage"
                                                fill
                                                className="object-contain object-right-top"
                                            />
                                        </div>
                                    </CardItem>
                                </CardBody>
                            </GlowingBorder>
                        </CardContainer>
                    </div>
                </div>

            </div>
        </section>
    );
}
