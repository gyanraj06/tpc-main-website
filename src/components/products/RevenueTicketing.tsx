import { CreditCard, Ticket, Receipt, ChartLineUp } from '@phosphor-icons/react';

const RevenueTicketing = () => {
    const features = [
        {
            title: "Integrated Revenue Engine (Not a Separate Link)",
            desc: "Unlike generic forms that redirect to external payment systems, our ticketing and payment processing are natively integrated. This means a single, unbroken checkout flow for your attendees, drastically reducing cart abandonment and improving conversions.",
            icon: CreditCard
        },
        {
            title: "Dynamic Pricing & Tiered Sales",
            desc: "Go beyond a single price point. Effortlessly create multiple ticket types (Early Bird, VIP, General Admission), set dynamic pricing that changes over time, or offer group discounts. Maximise your revenue potential with intelligent sales strategies.",
            icon: Ticket
        },
        {
            title: "Effortless Refunds & Management",
            desc: "Handle cancellations and refunds directly within your dashboard with just a few clicks. Gain full control over your financial operations and provide excellent customer service without manual reconciliations.",
            icon: Receipt
        },
        {
            title: "Granular Sales Insights",
            desc: "See exactly how your tickets are selling in real-time. Track revenue by ticket type, monitor sales trends, and get instant visibility into your financial performance, allowing for quick adjustments to your strategy.",
            icon: ChartLineUp
        }
    ];

    return (
        <section className="container-custom pb-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20">
                <div className="order-2 lg:order-1">
                    <h2 className="font-heading text-4xl lg:text-5xl font-normal text-[#14140F] mb-6 leading-tight">
                        Our Revenue, Reimagined: <br /> Intelligent Ticketing & Seamless Payments
                    </h2>
                    <p className="font-body text-lg text-[#14140F]/80 mb-8">
                        In today's fast-paced event landscape, relying on clunky payment links or basic forms for ticketing isn't just inefficient-it costs you revenue and attendee trust. Our Smart Ticketing & Payments system is engineered to provide a robust, secure, and incredibly flexible solution that elevates your sales process from a necessity to a strategic advantage. It's not just about taking money; it's about optimising every transaction.
                    </p>
                </div>

                <div className="order-1 lg:order-2 relative bg-white rounded-2xl border border-gray-200 shadow-xl p-2 transform -rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden group">
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000" alt="Revenue Management" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                <h3 className="font-heading text-3xl font-normal text-center mb-12">Why We're Different</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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

export default RevenueTicketing;
