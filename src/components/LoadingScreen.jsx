import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ finishLoading }) => {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter < 100) {
        setCounter(prev => prev + 1);
      } else {
        finishLoading();
      }
    }, 15); // Adjust speed here
    
    return () => clearTimeout(timer);
  }, [counter, finishLoading]);
  
  // Text animation variants
  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };
  
  // Particle animation
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      const size = Math.random() * 6 + 2;
      particles.push(
        <motion.div
          key={i}
          className="absolute rounded-full bg-secondary"
          style={{
            width: size,
            height: size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 2,
          }}
        />
      );
    }
    return particles;
  };
  
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {generateParticles()}
        </div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="w-full h-px bg-secondary"
              style={{ top: `${(i + 1) * (100 / 6)}%` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="h-full w-px bg-secondary"
              style={{ left: `${(i + 1) * (100 / 6)}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}
        </div>
        
        {/* Logo/Name */}
        <motion.div
          className="relative z-10 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-secondary">R</span>akshith <span className="text-secondary">R</span>ai
          </h1>
        </motion.div>
        
        {/* Loading bar */}
        <div className="relative w-64 md:w-96 h-1 bg-dark rounded-full overflow-hidden mb-4">
          <motion.div
            className="absolute top-0 left-0 h-full bg-secondary"
            style={{ width: `${counter}%` }}
            initial={{ width: 0 }}
          />
        </div>
        
        {/* Loading text */}
        <div className="h-8 relative">
          <AnimatePresence mode="wait">
            {counter < 25 && (
              <motion.p
                key="initializing"
                className="text-secondary font-mono text-sm absolute left-0 right-0 text-center"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                Initializing...
              </motion.p>
            )}
            {counter >= 25 && counter < 50 && (
              <motion.p
                key="loading"
                className="text-secondary font-mono text-sm absolute left-0 right-0 text-center"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                Loading modules...
              </motion.p>
            )}
            {counter >= 50 && counter < 75 && (
              <motion.p
                key="rendering"
                className="text-secondary font-mono text-sm absolute left-0 right-0 text-center"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                Rendering components...
              </motion.p>
            )}
            {counter >= 75 && counter < 100 && (
              <motion.p
                key="finalizing"
                className="text-secondary font-mono text-sm absolute left-0 right-0 text-center"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                Finalizing experience...
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        
        {/* Loading percentage */}
        <motion.p
          className="text-lightest font-mono mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {counter}%
        </motion.p>
        
        {/* Binary code animation in background */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`binary-${i}`}
              className="absolute text-xs font-mono text-secondary whitespace-nowrap"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [0, 100],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "loop",
                delay: Math.random() * 2,
              }}
            >
              {Array.from({ length: 20 }, () => Math.round(Math.random())).join('')}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
