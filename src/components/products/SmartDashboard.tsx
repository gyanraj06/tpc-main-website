import { ChartBar, UserCircle, PresentationChart, Lightbulb } from '@phosphor-icons/react';

const SmartDashboard = () => {
    const features = [
        {
            title: "Real-Time Engagement Metrics (Not Just Post-Event Reports)",
            desc: "Get live updates on who's checked in, how many sessions are full, and which areas of your event are buzzing. Make on-the-spot adjustments to staffing, content, or flow, rather than waiting for insights after it's too late.",
            icon: ChartBar
        },
        {
            title: "360-Degree Attendee Profiles",
            desc: "Move beyond basic registration lists. Access comprehensive attendee profiles that merge registration data with check-in times, session attendance, and even interaction points. Understand individual journeys, not just aggregate numbers.",
            icon: UserCircle
        },
        {
            title: "Actionable Visual Dashboards (Not Complex Spreadsheets)",
            desc: "Forget exporting data to Excel. Our intuitive, visually rich dashboards present complex data in easy-to-understand charts and graphs. Spot trends, identify bottlenecks, and pinpoint success factors at a glance",
            icon: PresentationChart
        },
        {
            title: "Predictive & Behavioral Insights",
            desc: "Leverage AI to uncover patterns in attendee behavior. Identify popular sessions, anticipate crowd movements, and understand preferences to refine future event programming and personalize experiences.",
            icon: Lightbulb
        }
    ];

    return (
        <section className="container-custom">

            {/* Large Dashboard Image Placeholder */}
            <div className="w-full bg-black rounded-3xl overflow-hidden aspect-video relative mb-24 border border-white/10 shadow-2xl group">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Smart Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            <div className="max-w-6xl mx-auto">
                <h3 className="font-heading text-3xl font-normal text-left lg:text-center mb-12">Why We're Different</h3>
                <div className="grid md:grid-cols-2 gap-6">
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
        </section >
    );
};

export default SmartDashboard;
// End of component
