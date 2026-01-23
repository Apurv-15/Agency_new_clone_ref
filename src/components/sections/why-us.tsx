import Image from "@/components/ui/image-shim";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { GlowingBorder } from "@/components/ui/glowing-border";

export function WhyUs() {
    return (
        <section className="bg-[#F3F4F6] px-6 py-12 min-h-screen flex items-center text-black font-sans">
            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="mb-8 text-center">
                    <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">Why Us</p>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black leading-tight">
                        How we deliver better <br />
                        work <span className="text-gray-400 font-serif italic">that lasts</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Left Column */}
                    <div className="md:col-span-1 flex flex-col gap-5">
                        {/* Card 1: Prompt Support */}
                        <CardContainer className="inter-var w-full h-[380px]" containerClassName="block">
                            <GlowingBorder className="h-full w-full rounded-[24px] bg-[#E5E5E5]">
                                <CardBody className="relative group/card w-full h-full rounded-[24px] overflow-hidden">
                                    <div className="flex flex-col p-6 h-full relative z-20">
                                        <CardItem translateZ="50" className="text-lg font-medium mb-2">Prompt Support</CardItem>
                                        <CardItem as="p" translateZ="60" className="text-gray-600 text-sm leading-relaxed">
                                            Backed by equally prompt customer support to achieve total customer satisfaction. We don&apos;t just build; we support.
                                        </CardItem>
                                    </div>
                                    <CardItem translateZ="30" className="absolute inset-0 z-0 mt-24 h-full w-full" as="div">
                                        <Image
                                            src="/images/why-us/fast-turnarounds.png"
                                            alt="Prompt Support"
                                            fill
                                            className="object-cover object-bottom opacity-90 transition-transform duration-700 group-hover/card:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#E5E5E5]/50 to-[#E5E5E5] pointer-events-none" />
                                    </CardItem>
                                </CardBody>
                            </GlowingBorder>
                        </CardContainer>

                        {/* Card 4: Social Impact */}
                        <CardContainer className="inter-var w-full h-[260px]" containerClassName="block">
                            <GlowingBorder className="h-full w-full rounded-[24px] bg-white">
                                <CardBody className="relative group/card w-full h-full rounded-[24px] overflow-hidden">
                                    <div className="flex flex-col p-6 h-full relative z-20">
                                        <CardItem translateZ="50" className="text-lg font-medium mb-2">Social Impact</CardItem>
                                        <CardItem as="p" translateZ="60" className="text-gray-600 text-sm leading-relaxed mb-4">
                                            Leveraging IT expertise for rural projects, women empowerment, and green initiatives.
                                        </CardItem>
                                    </div>
                                    <CardItem translateZ="80" className="absolute bottom-[-30px] right-[-30px] w-[110%] h-[70%] z-10">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src="/images/why-us/iteration.png"
                                                alt="Social Impact"
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
                    <div className="md:col-span-2 flex flex-col gap-5">
                        {/* Card 2: Competitive Edge */}
                        <CardContainer className="inter-var w-full h-[260px]" containerClassName="block">
                            <GlowingBorder className="h-full w-full rounded-[24px] bg-[#0A0A0A]">
                                <CardBody className="relative group/card w-full h-full rounded-[24px] overflow-hidden p-6 text-white flex flex-col justify-between">
                                    <div className="max-w-md relative z-20">
                                        <CardItem translateZ="50" className="text-lg font-medium mb-2">Competitive Edge</CardItem>
                                        <CardItem as="p" translateZ="60" className="text-gray-400 text-sm leading-relaxed">
                                            Helping enterprises move to a competitive environment with reasonably priced, high-quality software products.
                                        </CardItem>
                                    </div>
                                    <CardItem translateZ="40" className="absolute bottom-0 right-0 w-[40%] h-[110%] pointer-events-none z-10">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src="/images/why-us/conversion-focused.png"
                                                alt="Competitive Edge"
                                                fill
                                                className="object-contain object-bottom scale-125 translate-y-8 translate-x-8"
                                            />
                                        </div>
                                    </CardItem>
                                </CardBody>
                            </GlowingBorder>
                        </CardContainer>

                        {/* Card 3: Engineering Excellence */}
                        <CardContainer className="inter-var w-full h-[380px]" containerClassName="block">
                            <GlowingBorder className="h-full w-full rounded-[24px] bg-white">
                                <CardBody className="relative group/card w-full h-full rounded-[24px] overflow-hidden p-6 flex flex-col">
                                    <div className="max-w-md relative z-20">
                                        <CardItem translateZ="50" className="text-lg font-medium mb-2">Engineering Excellence</CardItem>
                                        <CardItem as="p" translateZ="60" className="text-gray-600 text-sm leading-relaxed mb-6">
                                            Deployment of excellent quality software backed by best business practices and constant training.
                                        </CardItem>
                                    </div>
                                    <CardItem translateZ="40" className="absolute top-1/4 right-[-30px] w-full h-full z-10">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src="/images/why-us/quality-quantity.png"
                                                alt="Engineering Excellence"
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
