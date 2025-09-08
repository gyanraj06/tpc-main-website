import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const steps = [
    {
      step: "1",
      title: "Sign Up & Get Verified",
      description: "Create your vendor account with basic business information. Complete verification in under 24 hours with our streamlined process."
    },
    {
      step: "2", 
      title: "List Your Experiences",
      description: "Upload high-quality photos, set competitive pricing, and create compelling descriptions that attract customers to your unique offerings."
    },
    {
      step: "3",
      title: "Start Receiving Bookings",
      description: "Go live instantly after approval. Manage bookings, track earnings, and grow your business with our dashboard."
    }
  ];

  return (
    <div id="about" className="py-16 md:py-24">
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6"
          >
            Get started in 3 simple <span className="text-blue-600">steps</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="inline-block bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-ui font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutSection;