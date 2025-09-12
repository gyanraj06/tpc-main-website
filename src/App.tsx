import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleNavigateToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="App min-h-screen">
      <Header onNavigateToDemo={handleScrollToContact} onNavigateToHome={handleNavigateToHome} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App