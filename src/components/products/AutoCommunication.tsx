import { ChatCircleText, PhoneCall, EnvelopeSimple, Users } from '@phosphor-icons/react';

const AutoCommunication = () => {
    return (
        <section className="container-custom py-24">
            <div className="text-left lg:text-center max-w-4xl mx-auto mb-16">
                <h2 className="font-heading text-4xl lg:text-5xl font-normal text-[#14140F] mb-6 leading-tight">
                    Auto Communication System
                </h2>
                <p className="font-body text-lg text-[#14140F]/80">
                    Managing communication for an experience is chaotic-constant WhatsApp replies, email confirmations, reminders, changes, follow-ups, special messages, and last-minute clarifications. <br />
                    Trippechalo's AI-driven Auto Communication System handles all of it, instantly and intelligently.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Block 1: Personalized Invite */}
                <div className="bg-gray-50 p-8 rounded-3xl md:col-span-1 border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                        <Users size={24} className="text-[#5050FF]" weight="duotone" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[#14140F] mb-4">Personalized Invite & Negotiation System</h3>
                    <p className="font-body text-sm text-[#14140F]/70 leading-relaxed">
                        Send personalized invites to VIPs and sponsors that negotiate for you. Our system automates group discounts and handles smart follow-ups to close special deals faster.
                    </p>
                </div>

                {/* Block 2: WhatsApp Automation (Large) */}
                <div className="bg-gray-50 p-8 rounded-3xl md:col-span-2 border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-center h-full relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                            <ChatCircleText size={24} className="text-[#5050FF]" weight="duotone" />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-[#14140F] mb-4">AI-Powered WhatsApp Automation</h3>
                        <p className="font-body text-base text-[#14140F]/70 leading-relaxed max-w-2xl">
                            Put guest operations on autopilot. We automate the entire lifecycle, using AI to resolve queries, negotiate deals, and personalize the experience without manual input.
                        </p>
                    </div>
                </div>

                {/* Block 3: AI Voice Call */}
                <div className="bg-gray-50 p-8 rounded-3xl md:col-span-1 border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                        <PhoneCall size={24} className="text-[#5050FF]" weight="duotone" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[#14140F] mb-4">AI Voice Call Assistant</h3>
                    <p className="font-body text-sm text-[#14140F]/70 leading-relaxed">
                        Recover lost revenue with smart calls that chase abandoned bookings. Our multilingual AI handles the phone lines-delivering personalized invites, reminders, and urgent updates.
                    </p>
                </div>

                {/* Block 4: Branded Emails */}
                <div className="bg-gray-50 p-8 rounded-3xl md:col-span-2 border border-gray-100 hover:shadow-md transition-shadow flex flex-col justify-center h-full">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                        <EnvelopeSimple size={24} className="text-[#5050FF]" weight="duotone" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[#14140F] mb-4">Branded Confirmation Emails</h3>
                    <p className="font-body text-base text-[#14140F]/70 leading-relaxed max-w-2xl">
                        Elevate operations with branded QR tickets and real-time updates. We automate the full cycle, from sponsor placement to targeted post-event marketing.
                    </p>
                </div>

            </div>


        </section>
    );
};

export default AutoCommunication;
