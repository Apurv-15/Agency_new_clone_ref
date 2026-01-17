
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Star, Layers, User } from "lucide-react";

export function WhyChooseUs() {
    return (
        <section className="relative mx-4 md:mx-6 bg-gradient-to-b from-white via-[#F0F9FF] to-white py-24 font-sans text-center overflow-hidden rounded-[60px] md:rounded-[100px] border border-slate-100/50 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-20 flex flex-col items-center">
                    <div className="bg-gray-100 rounded-full px-4 py-1.5 flex items-center gap-2 mb-6 shadow-sm border border-gray-100/50">
                        <Star className="w-4 h-4 text-gray-400 fill-gray-400" />
                        <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">Benefits</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-black mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Partner with an engineering firm delivering excellence.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Card 1: Real-Time Analytics */}
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[450px] rounded-[32px] p-8 border hover:bg-white transition-colors duration-300">
                            <CardItem translateZ="100" className="w-full h-[60%] flex items-center justify-center mt-4">
                                {/* Clock/Gauge Graphic */}
                                <div className="relative w-48 h-48 rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white flex items-center justify-center">
                                    <div className="absolute top-4 right-[40%] text-gray-200">
                                        <div className="w-3 h-3 rounded-full bg-current" />
                                    </div>

                                    {/* Clock Hand */}
                                    <div className="w-2 h-20 bg-gray-200 rounded-full absolute top-[20%] left-[48%] origin-bottom animate-spin-slow shadow-sm" style={{ animationDuration: '10s' }}></div>
                                    <div className="w-4 h-4 bg-gray-400 rounded-full absolute z-10 shadow-inner" />
                                </div>
                            </CardItem>
                            <div className="flex flex-col items-start mt-8 text-left pl-2">
                                <CardItem translateZ="50" className="text-xl font-medium text-black mb-2">
                                    Real-Time Analytics
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-gray-500 text-sm max-w-sm mt-2 leading-relaxed"
                                >
                                    Stay ahead with accurate, real-time performance tracking
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>

                    {/* Card 2: AI-Driven Growth */}
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[450px] rounded-[32px] p-8 border hover:bg-white transition-colors duration-300">
                            <CardItem translateZ="100" className="w-full h-[60%] flex items-end justify-center gap-4 pb-8">
                                {/* Bar Chart Graphic */}
                                <div className="relative w-full h-full flex items-end justify-center gap-3 px-8">
                                    {/* 80% Tag */}
                                    <div className="absolute top-[20%] right-[30%] bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 rotate-[-5deg] z-20">
                                        <span className="text-[10px] font-bold text-gray-500">80% Automation</span>
                                    </div>

                                    <div className="w-12 h-[30%] bg-white rounded-t-xl shadow-sm border border-gray-100/50" />
                                    <div className="w-12 h-[50%] bg-white rounded-t-xl shadow-md border border-gray-100/50" />
                                    <div className="w-12 h-[80%] bg-white rounded-t-xl shadow-lg border border-gray-100 relative group-hover/card:scale-y-110 transition-transform origin-bottom duration-500" />
                                    <div className="w-12 h-[60%] bg-white rounded-t-xl shadow-md border border-gray-100/50" />

                                    {/* 10% Tag */}
                                    <div className="absolute top-[50%] right-[10%] bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 rotate-[5deg]">
                                        <span className="text-[10px] font-bold text-gray-500">10% Cost</span>
                                    </div>
                                </div>
                            </CardItem>
                            <div className="flex flex-col items-start mt-8 text-left pl-2">
                                <CardItem translateZ="50" className="text-xl font-medium text-black mb-2">
                                    AI-Driven Growth
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-gray-500 text-sm max-w-sm mt-2 leading-relaxed"
                                >
                                    Make smarter moves with accurate, real-time business insights.
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>

                    {/* Card 3: Sync in real time */}
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[450px] rounded-[32px] p-8 border hover:bg-white transition-colors duration-300">
                            <CardItem translateZ="100" className="w-full h-[60%] flex flex-col items-center justify-center gap-8">
                                {/* Floating Icon Graphic */}
                                <div className="relative w-32 h-32 rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex items-center justify-center border border-gray-100/50">
                                    <div className="transform rotate-[-15deg]">
                                        <Layers className="w-14 h-14 text-black fill-black" />
                                    </div>
                                    {/* Ripple effect rings */}
                                    <div className="absolute inset-0 rounded-full border border-gray-100 scale-125 opacity-50" />
                                </div>

                                {/* User Avatar */}
                                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100">
                                    <User className="w-6 h-6 text-black fill-black" />
                                </div>
                            </CardItem>
                            <div className="flex flex-col items-start mt-8 text-left pl-2">
                                <CardItem translateZ="50" className="text-xl font-medium text-black mb-2">
                                    Sync in real time
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-gray-500 text-sm max-w-sm mt-2 leading-relaxed"
                                >
                                    Connect with your team instantly to track progress and updates
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>

                {/* Bottom Tags */}
                <div className="mt-24 flex flex-wrap justify-center gap-4">
                    {["Cost Effective", "High-Performance", "Scalable Apps", "Data-Driven Decisions", "Faster Innovation", "Custom Software"].map((tag, i) => (
                        <div key={i} className="px-6 py-3 rounded-full bg-gray-50 border border-gray-100 text-sm font-medium text-gray-600 flex items-center gap-2 hover:bg-white hover:shadow-md transition-all cursor-default">
                            {i === 1 && <div className="w-4 h-4 rounded-full border border-black flex items-center justify-center text-[8px]">+</div>}
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
