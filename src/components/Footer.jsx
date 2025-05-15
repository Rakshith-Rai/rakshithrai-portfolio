import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 ${darkMode ? 'bg-dark' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Rakshith Rai. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <a
              href="https://github.com/Rakshith-Rai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rakshithraia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:rakshithrai15@gmail.com"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
