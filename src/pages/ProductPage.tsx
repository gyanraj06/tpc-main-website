import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ProductHero from '../components/products/ProductHero';
import RecurringEvents from '../components/products/RecurringEvents';
import SmartDashboard from '../components/products/SmartDashboard';
import RegistrationFeatures from '../components/products/RegistrationFeatures';
import RevenueTicketing from '../components/products/RevenueTicketing';
import OperationsAnalytics from '../components/products/OperationsAnalytics';
import AutoCommunication from '../components/products/AutoCommunication';
import MarketingGrowth from '../components/products/MarketingGrowth';
import VendorBrand from '../components/products/VendorBrand';

const ProductPage = () => {
    const location = useLocation();

    useEffect(() => {
        // Check for specific section scroll request from navigation state
        if (location.state && location.state.scrollTo) {
            const sectionId = location.state.scrollTo;

            // Timeout to ensure layout is stable
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else {
            // Default to top if no specific section requested
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-[#f4f2ee] font-sans selection:bg-[#BEFF50] selection:text-black">
            {/* Header is handled by App.tsx wrapper usually, but checking App.tsx, it's outside Routes. 
            So we don't need to include it here if the layout stays same. 
            However, user said "Header and footer will be strictly same". 
            In App.tsx, Header is outside Routes, so it persists. Good. 
        */}

            <main className="pt-24 lg:pt-32 pb-20 space-y-20 lg:space-y-32 overflow-hidden">
                <div id="core-ops" className="scroll-mt-32 lg:scroll-mt-40">
                    <ProductHero />
                </div>

                <div id="recurring-events" className="scroll-mt-32 lg:scroll-mt-40">
                    <RecurringEvents />
                </div>

                <div id="smart-dashboard" className="scroll-mt-32 lg:scroll-mt-40">
                    <SmartDashboard />
                </div>

                <div id="registration" className="scroll-mt-32 lg:scroll-mt-40">
                    <RegistrationFeatures />
                </div>

                <div id="revenue-ticketing" className="scroll-mt-32 lg:scroll-mt-40">
                    <RevenueTicketing />
                </div>

                <div id="operations-analytics" className="scroll-mt-32 lg:scroll-mt-40">
                    <OperationsAnalytics />
                </div>

                <div id="auto-communication" className="scroll-mt-32 lg:scroll-mt-40">
                    <AutoCommunication />
                </div>

                <div id="marketing-growth" className="scroll-mt-32 lg:scroll-mt-40">
                    <MarketingGrowth />
                </div>

                <div id="vendor-brand" className="scroll-mt-32 lg:scroll-mt-40">
                    <VendorBrand />
                </div>
                {/* CTA handled by Footer or can be added here explicitly if needed */}
            </main>
        </div>
    );
};

export default ProductPage;
