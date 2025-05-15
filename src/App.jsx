import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'

// Pages
import Home from './pages/Home'

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to handle when loading is complete
  const finishLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 500); // Small delay for smooth transition
  };

  // Prevent scrolling when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    <Router>
      <ScrollToTop />

      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen finishLoading={finishLoading} />}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        className={`min-h-screen ${darkMode ? 'bg-primary' : 'bg-lightest text-primary'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/#about" element={<Home darkMode={darkMode} />} />
            <Route path="/#experience" element={<Home darkMode={darkMode} />} />
            <Route path="/#projects" element={<Home darkMode={darkMode} />} />
            <Route path="/#contact" element={<Home darkMode={darkMode} />} />
          </Routes>
        </AnimatePresence>
        <Footer darkMode={darkMode} />
      </motion.div>
    </Router>
  )
}

export default App
