import { PresentationChart, Megaphone, Trophy } from '@phosphor-icons/react';

const BrandSponsorships = () => {
    return (
        <section className="container-custom py-24">

            {/* Tag */}
            <div className="flex justify-center mb-16">
                <span className="px-5 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-[#5050FF] font-heading font-medium text-sm tracking-widest uppercase shadow-sm">
                    Brands
                </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                <div className="relative">
                    <div className="aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white group">
                        <img src="https://images.unsplash.com/photo-1560523160-754a9e25c68f?auto=format&fit=crop&q=80&w=1000" alt="Brand Sponsorship Display" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                    </div>
                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                        <p className="text-sm text-gray-500 font-body mb-1">Sponsor ROI</p>
                        <p className="text-3xl font-heading font-bold text-[#5050FF]">+340%</p>
                    </div>
                </div>

                <div>
                    <h2 className="font-heading text-4xl lg:text-5xl font-normal text-[#14140F] mb-6 leading-tight">
                        Unlock High-Value Sponsorships
                    </h2>
                    <p className="font-body text-lg text-[#14140F]/80 mb-10 leading-relaxed">
                        Give brands the visibility they crave. Move beyond logos on banners to digital engagement, lead generation, and measurable ROI that keeps sponsors coming back year after year.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#5050FF]/5 flex items-center justify-center text-[#5050FF] group-hover:bg-[#5050FF] group-hover:text-white transition-colors duration-300">
                                <PresentationChart size={24} weight="duotone" />
                            </div>
                            <div>
                                <h4 className="font-heading text-xl font-bold text-[#14140F] mb-1">Measurable Exposure</h4>
                                <p className="font-body text-sm text-[#14140F]/70">Provide sponsors with real-time data on impressions, clicks, and engagement.</p>
                            </div>
                        </li>

                        <li className="flex gap-4 items-start group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#5050FF]/5 flex items-center justify-center text-[#5050FF] group-hover:bg-[#5050FF] group-hover:text-white transition-colors duration-300">
                                <Megaphone size={24} weight="duotone" />
                            </div>
                            <div>
                                <h4 className="font-heading text-xl font-bold text-[#14140F] mb-1">Digital Activation</h4>
                                <p className="font-body text-sm text-[#14140F]/70">In-app banners, push notifications, and branded ticket tiers for maximum reach.</p>
                            </div>
                        </li>

                        <li className="flex gap-4 items-start group">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#5050FF]/5 flex items-center justify-center text-[#5050FF] group-hover:bg-[#5050FF] group-hover:text-white transition-colors duration-300">
                                <Trophy size={24} weight="duotone" />
                            </div>
                            <div>
                                <h4 className="font-heading text-xl font-bold text-[#14140F] mb-1">Exclusive Lead Gen</h4>
                                <p className="font-body text-sm text-[#14140F]/70">Capture attendee interest directly for sponsors through surveys and gamification.</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default BrandSponsorships;
