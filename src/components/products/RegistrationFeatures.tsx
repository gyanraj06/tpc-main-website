import { CreditCard, Clock, ArrowsClockwise, Users, Lightning } from '@phosphor-icons/react';

const RegistrationFeatures = () => {
    // Note: The provided image had repetitive text for points 2-5. 
    // I stuck to the image text strictly as requested ("create as per webpage").
    // However, for Point 1, it was unique.
    const features = [
        {
            title: "Seamless Payments & Ticketing (Not a Workaround)",
            desc: "Go from registration to revenue in one frictionless step. Securely accept credit card payments, sell multiple ticket tiers, and manage discount codes directly within your form. No more awkward payment links or manual invoice tracking.",
            icon: CreditCard
        },
        {
            title: "Time-Saving Automation",
            desc: "Drastically reduce administrative overhead. No more manual duplication, date changes, or individual event setups.",
            icon: Clock
        },
        {
            title: "Seamless Management",
            desc: "All recurring instances are linked, making it easy to apply updates or changes across the entire series from a single control panel.",
            icon: ArrowsClockwise
        },
        {
            title: "Consistent Experience",
            desc: "Ensure your attendees always get accurate information and a consistent booking process, regardless of the event date.",
            icon: Users
        },
        {
            title: "Boost Capacity",
            desc: "Free up your team to focus on enhancing the experience rather than managing logistics.",
            icon: Lightning
        }
    ];

    return (
        <section className="container-custom pb-24">

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20">
                <div className="order-2 lg:order-1">
                    <h2 className="font-heading text-4xl lg:text-5xl font-normal text-[#14140F] mb-6 leading-tight">
                        The Intelligent Registration Experience: <br /> Go Beyond the Form
                    </h2>

                    <p className="font-body text-lg text-[#14140F]/80 mb-8">
                        Are you tired of wrestling with disconnected forms and messy spreadsheets? Generic forms are a start, but they end where your event experience truly begins. Our Smart Registration & Ticketing platform is built for organizers who demand a professional, integrated, and effortless solution. It's not just a form builder; it's the central nervous system for your entire attendee management process.
                    </p>
                </div>

                {/* Form UI Placeholder from image */}
                <div className="order-1 lg:order-2 relative bg-white rounded-2xl border border-gray-200 shadow-xl p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden group">
                    <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" alt="Registration Form" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                <h3 className="font-heading text-3xl font-normal text-center mb-12">Why We're Different</h3>
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
            <div className="flex justify-center mt-20 pt-10 border-t border-gray-100">
                <span className="px-5 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-[#5050FF] font-heading font-medium text-sm tracking-widest uppercase shadow-sm">
                    Operation and Management
                </span>
            </div>
        </section>
    );
};

export default RegistrationFeatures;
// End of component
