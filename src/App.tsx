import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import LegalNotice from './pages/LegalNotice'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
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

  // Main homepage component
  const HomePage = () => (
    <>
      <Header onNavigateToDemo={handleScrollToContact} onNavigateToHome={handleNavigateToHome} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )

  return (
    <div className="App min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </div>
  )
}

export default App