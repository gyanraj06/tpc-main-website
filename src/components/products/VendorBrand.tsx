import { Handshake, Star, PresentationChart, Megaphone, Trophy } from '@phosphor-icons/react';

const VendorBrand = () => {
    return (
        <section className="container-custom py-24" id="vendor-brand">

            {/* Unified Tag */}
            <div className="flex justify-start lg:justify-center mb-16">
                <span className="px-5 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-[#5050FF] font-heading font-medium text-sm tracking-widest uppercase shadow-sm">
                    Vendor and Brand
                </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="font-heading text-4xl lg:text-5xl font-normal text-[#14140F] mb-6 leading-tight">
                        Sponsorship & Brand Matchmaking
                    </h2>
                    <div className="mb-12">
                        <p className="font-heading text-xl font-medium text-[#14140F] mb-4 leading-relaxed">
                            Finding sponsors shouldn’t feel like chasing people on Instagram, emailing PDFs, or begging for callbacks.
                        </p>
                        <p className="font-body text-lg text-[#14140F]/70 leading-relaxed">
                            Trippechalo turns the entire sponsorship workflow into an intelligent, automated system that connects organisers with brands instantly and at scale.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-[#5050FF]/10 text-[#5050FF]">
                                    <Handshake size={24} weight="fill" />
                                </div>
                                <h4 className="font-heading text-lg font-bold text-[#14140F]">AI-Powered Matching</h4>
                            </div>
                            <p className="font-body text-sm text-[#14140F]/70 leading-relaxed">
                                Our engine studies your experience category, target audience, location, and pricing-then matches you with relevant brands automatically.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-[#5050FF]/10 text-[#5050FF]">
                                    <PresentationChart size={24} weight="fill" />
                                </div>
                                <h4 className="font-heading text-lg font-bold text-[#14140F]">Smart Packages</h4>
                            </div>
                            <p className="font-body text-sm text-[#14140F]/70 leading-relaxed">
                                Create plug-and-play sponsorship tiers (Title Sponsor, Co-Sponsor, Sponsor, Media Partner, etc.) with deliverables pre-built.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-[#5050FF]/10 text-[#5050FF]">
                                    <Megaphone size={24} weight="fill" />
                                </div>
                                <h4 className="font-heading text-lg font-bold text-[#14140F]">Automated Outreach</h4>
                            </div>
                            <p className="font-body text-sm text-[#14140F]/70 leading-relaxed">
                                Send proposals with one click. AI handles follow-ups, reminders, negotiation nudges, and even declines-professionally.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-[#5050FF]/10 text-[#5050FF]">
                                    <Trophy size={24} weight="fill" />
                                </div>
                                <h4 className="font-heading text-lg font-bold text-[#14140F]">Revenue Boost</h4>
                            </div>
                            <p className="font-body text-sm text-[#14140F]/70 leading-relaxed">
                                Our system recommends sponsorship combinations that maximise your earnings-based on category, audience, and local demand.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                            alt="AI Sponsorship Matching Interface"
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Overlay Card illustrating Matchmaking - optional visual flourish */}
                        <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 transform translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Star weight="fill" size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Match Found</p>
                                    <p className="font-heading text-lg font-bold text-gray-900">Sponsor</p>
                                </div>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                <div className="bg-green-500 h-full w-[94%]"></div>
                            </div>
                            <p className="text-right text-xs font-bold text-green-600 mt-2">94% Compatibility</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VendorBrand;
