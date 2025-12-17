import { useNavigate } from 'react-router-dom';
import {
    Bank,
    Handshake,
    Compass,
    MicrophoneStage,
    Camera,
    ArrowRight
} from '@phosphor-icons/react';

const WhoWeBuiltFor = () => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate('/book-demo');
    };

    const topCards = [
        {
            title: "Event & Experience Organisers",
            description: "From intimate gatherings to large-scale festivals, get the tools you need to plan, sell, and manage experiences effortlessly.",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Venues & Experience Spaces",
            description: "Maximize space utilization, streamline bookings, and manage operations with a dedicated dashboard for your venue.",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        }
    ];

    const listItems = [
        {
            title: "Institutions & Cultural Houses",
            description: "Modernize visitor management while preserving heritage.",
            icon: <Bank className="w-6 h-6" />
        },
        {
            title: "Brands & Sponsorship Partners",
            description: "Connect with engaged audiences through curated events.",
            icon: <Handshake className="w-6 h-6" />
        },
        {
            title: "Tour & Activity Providers",
            description: "Automate bookings and focus on delivering great tours.",
            icon: <Compass className="w-6 h-6" />
        },
        {
            title: "Entertainment & Cultural Hosts",
            description: "Showcase talent and manage gigs with zero hassle.",
            icon: <MicrophoneStage className="w-6 h-6" />
        },
        {
            title: "Travel Agencies & Production Houses",
            description: "Curate unique itineraries with seamless backend execution.",
            icon: <Camera className="w-6 h-6" />
        }
    ];

    return (
        <section className="pt-6 pb-24 border-t border-neutral-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-6">
                        Who We're Built For
                    </h2>
                    <p className="font-body text-lg text-gray-600 leading-relaxed">
                        We bring AI, automation, and intelligent tools together to help experience providers scale their business with ease and deliver unforgettable moments.
                    </p>
                </div>

                {/* Top Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {topCards.map((card, index) => (
                        <div key={index} onClick={handleDetailsClick} className="group cursor-pointer">
                            <div className="aspect-video rounded-3xl mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="font-body text-gray-600 leading-relaxed text-sm sm:text-base">
                                        {card.description}
                                    </p>
                                </div>
                                <div className="hidden sm:flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    <ArrowRight weight="bold" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* List Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listItems.map((item, index) => (
                        <div key={index} onClick={handleDetailsClick} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer group">
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-heading font-bold text-gray-900 mb-1 truncate">
                                    {item.title}
                                </h4>
                                <p className="font-body text-sm text-gray-500 line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                            <div className="shrink-0 self-center text-gray-300 group-hover:text-gray-900 transition-colors">
                                <ArrowRight />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhoWeBuiltFor;
