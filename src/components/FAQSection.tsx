import { CardStack } from './CardStack';
import TiltedCard from './TiltedCard';
import GridDistortion from './GridDistortion';
import flexibleImg from '../assets/flexible.png';

const FAQSection = () => {
  const cards = [
    {
      id: 0,
      content: (
        <TiltedCard
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={false}
        >
          <div className="relative w-full h-full rounded-[15px] overflow-hidden shadow-sm border border-gray-700 bg-gray-900">
            <div className="absolute inset-0 z-0">
              <GridDistortion
                imageSrc={flexibleImg}
                grid={10}
                mouse={0.1}
                strength={0.15}
                relaxation={0.9}
              />
            </div>
            <div className="relative z-10 w-full h-full p-6 flex flex-col justify-center items-start text-left">
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-white mb-3">
                AI-Powered Marketing Suite
              </h3>
              <p className="font-body text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                Turn every event into a high-performing campaign with automated WhatsApp, email, retargeting, and smart recommendations. Sell out faster with AI that markets for you.
              </p>
            </div>
          </div>
        </TiltedCard>
      ),
    },
    {
      id: 1,
      content: (
        <TiltedCard
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={false}
        >
          <div className="relative w-full h-full rounded-[15px] overflow-hidden shadow-sm border border-gray-700 bg-gray-900">
            <div className="absolute inset-0 z-0">
              <GridDistortion
                imageSrc={flexibleImg}
                grid={10}
                mouse={0.1}
                strength={0.15}
                relaxation={0.9}
              />
            </div>
            <div className="relative z-10 w-full h-full p-6 flex flex-col justify-center items-start text-left">
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-white mb-3">
                Vendor & Brand Ecosystem
              </h3>
              <p className="font-body text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                Discover partners instantly, manage collaborations, and unlock sponsorships with AI-driven matchmaking that connects you to the right brands and vendors—without the manual chase.
              </p>
            </div>
          </div>
        </TiltedCard>
      ),
    },
    {
      id: 2,
      content: (
        <TiltedCard
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={false}
        >
          <div className="relative w-full h-full rounded-[15px] overflow-hidden shadow-sm border border-gray-700 bg-gray-900">
            <div className="absolute inset-0 z-0">
              <GridDistortion
                imageSrc={flexibleImg}
                grid={10}
                mouse={0.1}
                strength={0.15}
                relaxation={0.9}
              />
            </div>
            <div className="relative z-10 w-full h-full p-6 flex flex-col justify-center items-start text-left">
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-white mb-3">
                Attendee Tracking & Insights
              </h3>
              <p className="font-body text-gray-200 text-sm sm:text-base leading-relaxed font-medium">
                Understand your audience with real-time data on behaviour, sales patterns, and engagement. Make smarter decisions and grow every event with actionable insights.
              </p>
            </div>
          </div>
        </TiltedCard>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left Side - Header */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4 sm:mb-6 leading-tight">
              Go Beyond Ticketing with Built-In Growth Tools
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Dealing with Complicated setups? Our intuitive platform lets you create, customise, and launch any kind of event effortlessly. From single-ticket sales to recurring series, your entire operation is managed from one simple dashboard.
            </p>
          </div>

          {/* Right Side - Card Stack */}
          <div className="flex items-center justify-center h-[400px]">
            <CardStack items={cards} offset={15} scaleFactor={0.08} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;