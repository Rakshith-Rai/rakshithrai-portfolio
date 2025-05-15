import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen ${darkMode ? 'bg-primary' : 'bg-lightest text-primary'}`}>
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
      </div>
    </Router>
  )
}

export default App
