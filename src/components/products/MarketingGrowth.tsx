import { ShareNetwork, MagicWand, ChatsCircle, TrendUp, Laptop, Rocket, MagnifyingGlass, Tag, InstagramLogo, FacebookLogo, WhatsappLogo } from '@phosphor-icons/react';

const MarketingGrowth = () => {
    return (
        <section className="container-custom py-24">

            {/* Top Centered Pill Tag */}
            <div className="flex justify-start lg:justify-center mb-16">
                <span className="px-5 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-[#5050FF] font-heading font-medium text-sm tracking-widest uppercase shadow-sm">
                    Marketing and Growth
                </span>
            </div>

            {/* Section 1: Social Media Management */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32">
                <div className="order-2 lg:order-1">
                    <h2 className="font-heading text-4xl lg:text-5xl font-normal text-[#14140F] mb-6 leading-tight">
                        Social Media Management - <br /> Unified, Intelligent, Always-On
                    </h2>
                    <p className="font-body text-lg text-[#14140F]/80 mb-10 leading-relaxed">
                        Managing Instagram here, replying on WhatsApp there, checking insights somewhere else-Traditional workflows waste time and break consistency. Trippechalo gives organisers a single, intelligent dashboard to manage every social channel, automate content, and keep their brand active without juggling apps.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-[#5050FF]/10 text-[#5050FF]">
                                    <MagicWand size={20} weight="fill" />
                                </div>
                                <h4 className="font-heading text-lg font-bold text-[#14140F]">AI Content Creation</h4>
                            </div>
                            <p className="font-body text-sm text-[#14140F]/70">
                                Generates ready-to-post captions, hashtags, and visual ideas tailored to your vibe.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-[#5050FF]/10 text-[#5050FF]">
                                    <ShareNetwork size={20} weight="fill" />
                                </div>
                                <h4 className="font-heading text-lg font-bold text-[#14140F]">Cross-Platform Sync</h4>
                            </div>
                            <p className="font-body text-sm text-[#14140F]/70">
                                Publish to Instagram, Facebook, and YouTube from one single pane. No switching apps.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-[#5050FF]/10 text-[#5050FF]">
                                    <ChatsCircle size={20} weight="fill" />
                                </div>
                                <h4 className="font-heading text-lg font-bold text-[#14140F]">Engagement Hub</h4>
                            </div>
                            <p className="font-body text-sm text-[#14140F]/70">
                                One inbox for every DM and comment. Respond faster and never miss a lead.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg bg-[#5050FF]/10 text-[#5050FF]">
                                    <TrendUp size={20} weight="fill" />
                                </div>
                                <h4 className="font-heading text-lg font-bold text-[#14140F]">Effortless Growth</h4>
                            </div>
                            <p className="font-body text-sm text-[#14140F]/70">
                                Consistent posting equals growth. We give you the tools to stay active without the burnout.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center items-center">
                    <div className="relative w-full max-w-md aspect-square">
                        {/* Decorative Background Blurs */}
                        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

                        {/* 3D-like Icon Blobs */}
                        {/* Instagram */}
                        <div className="absolute top-10 right-10 p-6 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-[2.5rem] shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110 cursor-pointer z-20 border-4 border-white/10">
                            <InstagramLogo size={44} weight="fill" className="text-white drop-shadow-md" />
                        </div>

                        {/* Facebook */}
                        <div className="absolute bottom-20 left-6 p-6 bg-[#1877F2] rounded-3xl shadow-xl transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-110 cursor-pointer z-10 border-4 border-white/10">
                            <FacebookLogo size={52} weight="fill" className="text-white drop-shadow-md" />
                        </div>

                        {/* WhatsApp */}
                        <div className="absolute top-20 left-10 p-5 bg-[#25D366] rounded-3xl shadow-xl transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110 cursor-pointer z-10 border-4 border-white/10">
                            <WhatsappLogo size={44} weight="fill" className="text-white drop-shadow-md" />
                        </div>

                        {/* Twitter/X */}
                        <div className="absolute bottom-10 right-20 p-6 bg-black rounded-[2rem] shadow-xl transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-110 cursor-pointer z-20 border-4 border-white/10">
                            <svg viewBox="0 0 24 24" className="w-12 h-12 text-white drop-shadow-md" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Website Builder */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="order-2 lg:order-1 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                        alt="Website Builder Interface"
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#5050FF]/10 to-transparent mix-blend-overlay"></div>
                </div>

                <div className="order-1 lg:order-2">
                    <h2 className="font-heading text-4xl lg:text-5xl font-normal text-[#14140F] mb-6 leading-tight">
                        Website Builder & Microsites
                    </h2>
                    <p className="font-body text-lg text-[#14140F]/80 mb-10 leading-relaxed">
                        Launch stunning microsites for your experiences in minutes-no coding, no designers, no delays. Just add your event details and Trippechalo auto-generates a modern, mobile-first website ready to share and sell.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#5050FF]">
                                <Laptop size={20} weight="fill" />
                            </div>
                            <div>
                                <h4 className="font-heading text-lg font-bold text-[#14140F]">AI-Designed Layouts</h4>
                                <p className="font-body text-sm text-[#14140F]/70">Automatically tailored design that fits your experience's vibe perfectly.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#5050FF]">
                                <MagnifyingGlass size={20} weight="fill" />
                            </div>
                            <div>
                                <h4 className="font-heading text-lg font-bold text-[#14140F]">SEO-Optimized</h4>
                                <p className="font-body text-sm text-[#14140F]/70">Built-in best practices so your events get found on Google.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#5050FF]">
                                <Rocket size={20} weight="fill" />
                            </div>
                            <div>
                                <h4 className="font-heading text-lg font-bold text-[#14140F]">Instant Publishing</h4>
                                <p className="font-body text-sm text-[#14140F]/70">Go live in seconds with your branding, rules, and images.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#5050FF]">
                                <Tag size={20} weight="fill" />
                            </div>
                            <div>
                                <h4 className="font-heading text-lg font-bold text-[#14140F]">Sales-Ready</h4>
                                <p className="font-body text-sm text-[#14140F]/70">Optimized for conversions, ticket sales, and sponsor visibility.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingGrowth;
