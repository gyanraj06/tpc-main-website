import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import LegacyHeroSection from './components/LegacyHeroSection'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import NewAppSection from './components/NewAppSection'
import Footer from './components/Footer'
import LegalNotice from './pages/LegalNotice'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import './App.css'
import Watermark from './components/Watermark'
import BookDemo from './pages/BookDemo'
import PageTransition from './components/PageTransition'
import CustomCursor from './components/CustomCursor'

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleNavigateToHome = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo(0, 0);
    }
  }

  // Main homepage component
  const HomePage = () => (
    <>
      <main>
        <HeroSection />
        <LegacyHeroSection />
        <FAQSection />
        <FeaturesSection />
        <NewAppSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )

  return (
    <div className="App min-h-screen">
      <CustomCursor />
      <PageTransition />
      <Header onNavigateToDemo={handleScrollToContact} onNavigateToHome={handleNavigateToHome} />
      <Watermark />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/book-demo" element={<BookDemo />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App