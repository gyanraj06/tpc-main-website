import { Storefront, Handshake, Money, IdentificationCard } from '@phosphor-icons/react';

const VendorManagement = () => {
    return (
        <section className="container-custom py-24 bg-gray-50/50">

            {/* Tag */}
            <div className="flex justify-center mb-16">
                <span className="px-5 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-[#5050FF] font-heading font-medium text-sm tracking-widest uppercase shadow-sm">
                    Vendor
                </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="font-heading text-4xl lg:text-5xl font-normal text-[#14140F] mb-6 leading-tight">
                        Streamlined Vendor Operations
                    </h2>
                    <p className="font-body text-lg text-[#14140F]/80 mb-10 leading-relaxed">
                        From food stalls to merchandise partners, managing vendors shouldn't be a headache. Trippechalo centralizes vendor applications, payments, and logistics into one smooth workflow, ensuring your event marketplace runs flawlessly.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-full bg-[#5050FF]/10 flex items-center justify-center text-[#5050FF] mb-4">
                                <Storefront size={24} weight="duotone" />
                            </div>
                            <h4 className="font-heading text-lg font-bold text-[#14140F] mb-2">Vendor Portal</h4>
                            <p className="font-body text-sm text-[#14140F]/70">Dedicated dashboard for vendors to upload docs, manage products, and track sales.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-full bg-[#5050FF]/10 flex items-center justify-center text-[#5050FF] mb-4">
                                <Money size={24} weight="duotone" />
                            </div>
                            <h4 className="font-heading text-lg font-bold text-[#14140F] mb-2">Automated Settlements</h4>
                            <p className="font-body text-sm text-[#14140F]/70">Split payments automatically. Vendors get paid faster, and you avoid manual reconciliation errors.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-full bg-[#5050FF]/10 flex items-center justify-center text-[#5050FF] mb-4">
                                <IdentificationCard size={24} weight="duotone" />
                            </div>
                            <h4 className="font-heading text-lg font-bold text-[#14140F] mb-2">Document Compliance</h4>
                            <p className="font-body text-sm text-[#14140F]/70">Collect and verify licenses, IDs, and permits digitally before the event begins.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 rounded-full bg-[#5050FF]/10 flex items-center justify-center text-[#5050FF] mb-4">
                                <Handshake size={24} weight="duotone" />
                            </div>
                            <h4 className="font-heading text-lg font-bold text-[#14140F] mb-2">Seamless Onboarding</h4>
                            <p className="font-body text-sm text-[#14140F]/70">Approval workflows that let you curate the best mix of partners for your attendees.</p>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-700 group">
                        <img src="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=1000" alt="Vendor Market Stalls" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VendorManagement;
