import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import RouteEffects from './components/RouteEffects';
import Home from './pages/Home';

const Products = lazy(() => import('./pages/Products'));
const BookDemo = lazy(() => import('./pages/BookDemo'));
const Legal = lazy(() => import('./pages/Legal'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Preloader />
      <Header />
      <RouteEffects />
      <main id="main">
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/legal-notice" element={<Legal doc="legal-notice" />} />
            <Route path="/privacy-policy" element={<Legal doc="privacy-policy" />} />
            <Route path="/terms-and-conditions" element={<Legal doc="terms-and-conditions" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
