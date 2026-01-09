import { ArrowsClockwise, Clock, Users, CalendarCheck, ChartLineUp } from '@phosphor-icons/react';

const RecurringEvents = () => {
    const features = [
        {
            title: "Set It and Forget It",
            desc: "Create a single template for your recurring event, define its schedule (daily, weekly, monthly, custom), and our platform automatically generates all future instances.",
            icon: CalendarCheck
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
            icon: ChartLineUp
        }
    ];

    return (
        <section className="container-custom">

            <div className="flex justify-start lg:justify-center mb-16">
                <span className="px-5 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-[#5050FF] font-heading font-medium text-sm tracking-widest uppercase shadow-sm">
                    Core Experience
                </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
                <div>
                    <h2 className="font-heading text-4xl lg:text-5xl font-normal text-[#14140F] mb-6 leading-tight">
                        Stop Recreating the Same Experience Every Time.
                    </h2>
                    <p className="font-body text-lg text-[#14140F]/80 mb-8">
                        Are you tired of manually setting up the same event week after week, or month after month? Our Recurring Experience Mode is designed to eliminate repetitive tasks and streamline your operations. Whether it's a weekly class, a monthly workshop, a daily tour, or a seasonal festival, you can set it up once and let our system handle the rest.
                    </p>

                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl aspect-square w-full relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000" alt="Flexible Scheduling" className="absolute inset-0 w-full h-full object-cover shadow-inner" />
                    </div>
                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl aspect-square w-full relative overflow-hidden mt-12">
                        <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000" alt="Recurring Automation" className="absolute inset-0 w-full h-full object-cover shadow-inner" />
                    </div>
                </div>
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

export default RecurringEvents;
// End of component
