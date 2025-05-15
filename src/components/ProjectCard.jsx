import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiInfo, FiX } from 'react-icons/fi';

const ProjectCard = ({ project, index, darkMode }) => {
  const { title, description, technologies, github, demo, image } = project;
  const [isFlipped, setIsFlipped] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const toggleDetails = (e) => {
    e.stopPropagation();
    setShowDetails(!showDetails);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        type: "spring",
        stiffness: 50
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16 perspective-1000"
    >
      <motion.div
        className={`relative w-full h-full transition-all duration-500 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        whileHover={{
          y: -10,
          boxShadow: "0 10px 30px -10px rgba(100, 255, 218, 0.2)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Front of card */}
        <motion.div
          className={`rounded-xl overflow-hidden shadow-xl backface-hidden ${
            darkMode ? 'bg-dark/80' : 'bg-white'
          } border border-secondary/20 backdrop-blur-sm`}
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            position: isFlipped ? 'absolute' : 'relative',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: isFlipped ? 0 : 1,
            transition: 'transform 0.6s, opacity 0.6s'
          }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 relative group">
              <div className="h-64 md:h-80 overflow-hidden">
                <img
                  src={image || 'https://via.placeholder.com/600x400?text=Project+Image'}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <motion.button
                    onClick={flipCard}
                    className="bg-secondary text-primary font-medium py-2 px-4 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </div>
            <div className="p-6 md:w-1/2">
              <h3 className="text-2xl font-bold mb-2 text-lightest">{title}</h3>
              <p className="mb-4 text-gray-400 line-clamp-3">{description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full ${
                      darkMode ? 'bg-primary/80 text-secondary border border-secondary/30' : 'bg-gray-100 text-gray-800'
                    }`}
                    whileHover={{ scale: 1.05, backgroundColor: darkMode ? 'rgba(100, 255, 218, 0.1)' : '' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex space-x-4 mt-6">
                {github && (
                  <motion.a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-dark/50"
                    aria-label="GitHub Repository"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiGithub size={20} />
                  </motion.a>
                )}
                {demo && (
                  <motion.a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-dark/50"
                    aria-label="Live Demo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiExternalLink size={20} />
                  </motion.a>
                )}
                <motion.button
                  onClick={flipCard}
                  className="text-gray-400 hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-dark/50"
                  aria-label="More Info"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiInfo size={20} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className={`absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-xl backface-hidden ${
            darkMode ? 'bg-dark/90' : 'bg-white'
          } border border-secondary/20 backdrop-blur-sm p-8`}
          style={{
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)',
            opacity: isFlipped ? 1 : 0,
            transition: 'transform 0.6s, opacity 0.6s'
          }}
        >
          <div className="relative h-full flex flex-col">
            <motion.button
              onClick={flipCard}
              className="absolute top-0 right-0 text-gray-400 hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-dark/50"
              aria-label="Close"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX size={20} />
            </motion.button>

            <h3 className="text-2xl font-bold mb-4 text-lightest">{title}</h3>

            <div className="mb-6">
              <h4 className="text-secondary font-mono text-sm mb-2">TECHNOLOGIES</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className={`text-xs px-3 py-1 rounded-full ${
                      darkMode ? 'bg-primary/80 text-secondary border border-secondary/30' : 'bg-gray-100 text-gray-800'
                    }`}
                    whileHover={{ scale: 1.05, backgroundColor: darkMode ? 'rgba(100, 255, 218, 0.1)' : '' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
              <h4 className="text-secondary font-mono text-sm mb-2">DESCRIPTION</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

              <h4 className="text-secondary font-mono text-sm mb-2">KEY FEATURES</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>Responsive design for all devices</li>
                <li>Interactive user interface</li>
                <li>Modern development practices</li>
                <li>Performance optimized</li>
              </ul>
            </div>

            <div className="flex justify-between mt-6 pt-4 border-t border-gray-700">
              {github && (
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex items-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(100, 255, 218, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub className="mr-2" /> View Code
                </motion.a>
              )}
              {demo && (
                <motion.a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex items-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(100, 255, 218, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink className="mr-2" /> Live Demo
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal for mobile view */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleDetails}
          >
            <motion.div
              className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl ${
                darkMode ? 'bg-dark' : 'bg-white'
              } p-6 shadow-2xl`}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-lightest">{title}</h3>
                <motion.button
                  onClick={toggleDetails}
                  className="text-gray-400 hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-dark/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX size={24} />
                </motion.button>
              </div>

              <div className="mb-6">
                <h4 className="text-secondary font-mono text-sm mb-2">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full ${
                        darkMode ? 'bg-primary/80 text-secondary border border-secondary/30' : 'bg-gray-100 text-gray-800'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.05 * i }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-secondary font-mono text-sm mb-2">DESCRIPTION</h4>
                <p className="text-gray-300 leading-relaxed">{description}</p>
              </div>

              <div className="flex justify-between mt-6 pt-4 border-t border-gray-700">
                {github && (
                  <motion.a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub className="mr-2" /> View Code
                  </motion.a>
                )}
                {demo && (
                  <motion.a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
