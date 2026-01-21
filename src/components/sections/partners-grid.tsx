

import { motion } from 'framer-motion';

// Partner data matches the requested list
const PARTNERS = [
    { name: 'Varroc', file: 'varroc', url: 'https://varroc.com' },
    { name: 'Greaves Cotton', file: 'greaves', url: 'https://www.greavescotton.com' },
    { name: 'Videocon', file: 'videocon', url: 'https://www.videocon.com' },
    { name: 'Endurance Technologies', file: 'endurance', url: 'https://www.endurancegroup.com' },
    { name: 'Sterlite Technologies', file: 'sterlite', url: 'https://www.stl.tech' },
    { name: 'Ceekay Daikin', file: 'ceekay', url: 'https://www.daikinindia.com' },
    { name: 'DSK Digital', file: 'dsk', url: '' },
    { name: 'Bartronics', file: 'bartronics', url: 'https://bartronics.com' },
    { name: 'Mother Dairy', file: 'motherdairy', url: 'https://www.motherdairy.com' },
    { name: 'Maharashtra Gramin Bank', file: 'mgb', url: 'https://mahagramin.in' },
    { name: 'NDDB', file: 'nddb', url: 'https://www.nddb.coop' },
    { name: 'Mission Milk', file: 'missionmilk', url: 'https://www.nddb.coop' },
    { name: 'Sujan Corporate Wisdom', file: 'sujan', url: 'https://sujan.in' },
    { name: 'AIOCD AWACS', file: 'aiocd', url: 'https://aiocdawacs.com' },
    { name: 'Aegis', file: 'aegis', url: 'https://www.aegisglobal.com' },
    { name: 'Amul', file: 'amul', url: 'https://amul.com' },
];

export function PartnersGrid() {
    return (
        <section className="py-24 px-6 bg-[#FBFBF9] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        We work with the most forward-thinking companies to build the future of infrastructure.
                    </p>
                </div>

                {/* Responsive Grid: 2 cols mobile, 3 tablet, 6 desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
                    {PARTNERS.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="group flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 aspect-[3/2]"
                        >
                            <div className="relative w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-105">
                                {/* We use specific dimensions 1200x600 for the source, but display contain */}
                                <img
                                    src={`/assets/partners/${partner.file}.jpg`}
                                    alt={`${partner.name} logo`}
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                    onError={(e) => {
                                        // Fallback to text if image fails to load
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        if (target.parentElement) {
                                            const span = document.createElement('span');
                                            span.innerText = partner.name;
                                            span.className = "text-xs font-bold text-slate-400 text-center uppercase tracking-wider";
                                            target.parentElement.appendChild(span);
                                        }
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
