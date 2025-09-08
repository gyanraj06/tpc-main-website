import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import BookDemo from './components/BookDemo'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'book-demo'>('home')

  const handleNavigateToDemo = () => {
    setCurrentPage('book-demo')
  }

  const handleNavigateToHome = () => {
    setCurrentPage('home')
  }

  return (
    <div className="App bg-white min-h-screen">
      <Header onNavigateToDemo={handleNavigateToDemo} onNavigateToHome={handleNavigateToHome} />
      {currentPage === 'home' ? (
        <main>
          <HeroSection />
          <FeaturesSection />
          <AboutSection />
          <CTASection />
        </main>
      ) : (
        <BookDemo />
      )}
      <Footer />
    </div>
  )
}

export default App