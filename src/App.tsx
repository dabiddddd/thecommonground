import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Story from './components/Story';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Support from './pages/Support';
import Checkout from './pages/Checkout';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

function App() {
  const location = useLocation();
  const isCheckout = location.pathname === '/checkout';

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <div className="min-h-screen">
        <Navbar />
        <Cart />
        <Routes>
          <Route path="/" element={
            <main id="main-content">
              <Hero />
              <Collection />
              <Story />
              <About />
              <CTA />
            </main>
          } />
          <Route path="/support" element={<Support />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {!isCheckout && <Footer />}
      </div>
    </>
  );
}

export default App;
