import { Users, Money, TrendUp, Funnel, Megaphone } from '@phosphor-icons/react';

const OperationsAnalytics = () => {
    const features = [
        {
            title: "Audience Intelligence",
            desc: "Understand who attends your experiences - age, interest patterns, booking behaviour - so you can target the right people every time.",
            icon: Users
        },
        {
            title: "Revenue & Payout Tracking",
            desc: "See earnings, dues, and settlement details in one transparent dashboard. No hidden math, no confusion.",
            icon: Money
        },
        {
            title: "Experience Performance Reports",
            desc: "All recurring instances are linked, making it easy to apply updates or changes across the entire series from a single control panel.",
            icon: TrendUp
        },
        {
            title: "Consistent Experience",
            desc: "Know which events, workshops, or treks are trending and which need optimisation. Compare past, current, and recurring events in seconds.",
            icon: Funnel
        },
        {
            title: "Conversion Analytics",
            desc: "Track how people discover, click, and buy your experiences - so you can fix drop-offs and increase ticket sales instantly.",
            icon: TrendUp
        },
        {
            title: "Marketing Effectiveness",
            desc: "View which channels (Instagram, WhatsApp, website, partners) actually bring customers. Stop wasting money, amplify what works.",
            icon: Megaphone
        }
    ];

    return (
        <section className="container-custom py-24 bg-gray-50/50">
            <div className="text-left lg:text-center max-w-4xl mx-auto mb-16">
                <h2 className="font-heading text-4xl lg:text-5xl font-normal text-[#14140F] mb-6 leading-tight">
                    See your entire experience business
                </h2>
                <p className="font-body text-lg text-[#14140F]/80">
                    Trippechalo gives organisers a powerful, real-time analytics engine that turns every booking, click, and interaction into actionable insights. No more guessing what works. No more relying on intuition. You get clean, intelligent data that helps you sell more, plan smarter, and grow faster.
                </p>
            </div>

            {/* Large Dashboard Image Placeholder using Unsplash */}
            <div className="w-full bg-black rounded-3xl overflow-hidden aspect-video relative mb-24 border border-white/10 shadow-2xl group max-w-5xl mx-auto">
                <img src="https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&q=80&w=1000" alt="Operations Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="max-w-6xl mx-auto">
                <h3 className="font-heading text-3xl font-normal text-left lg:text-center mb-12">Why We're Different</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                            <div className="w-12 h-12 rounded-xl bg-[#5050FF]/10 flex items-center justify-center text-[#5050FF] mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon size={24} weight="fill" />
                            </div>
                            <h4 className="font-heading text-xl font-normal text-[#14140F] mb-3">{feature.title}</h4>
                            <p className="font-body text-[#14140F]/70 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OperationsAnalytics;
