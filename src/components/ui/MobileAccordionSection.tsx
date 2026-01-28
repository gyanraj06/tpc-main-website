import { useState, useEffect } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';

interface MobileAccordionSectionProps {
    title: string;
    id: string; // Group ID, also used for scrolling if needed
    children: React.ReactNode;
    childIds?: string[]; // List of IDs contained within this section for auto-opening
}

const MobileAccordionSection = ({ title, id, children, childIds = [] }: MobileAccordionSectionProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Auto-expand if navigation targets this section or its children
    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const targetId = location.state.scrollTo;
            // Check if target is this section or one of its children
            if (targetId === id || childIds.includes(targetId)) {
                setIsOpen(true);
                // Once expanded, let the page logic handle the scrolling
            }
        }
    }, [location.state, id, childIds]);

    return (
        <div id={id} className="scroll-mt-32 lg:scroll-mt-40">
            {/* Desktop View: Just render content directly */}
            <div className="hidden lg:block">
                {children}
            </div>

            {/* Mobile View: Accordion Structure */}
            <div className="lg:hidden border-b border-gray-200 bg-white">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
                >
                    <h3 className="font-heading text-xl font-bold text-[#14140F]">
                        {title}
                    </h3>
                    <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <CaretDown size={20} weight="bold" />
                    </div>
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="pb-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileAccordionSection;
