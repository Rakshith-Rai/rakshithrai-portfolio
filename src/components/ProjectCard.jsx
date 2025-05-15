import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index, darkMode }) => {
  const { title, description, technologies, github, demo, image } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`rounded-lg overflow-hidden shadow-lg mb-8 ${
        darkMode ? 'bg-dark' : 'bg-white'
      }`}
    >
      <div className="md:flex">
        <div className="md:w-1/2">
          <div className="h-64 overflow-hidden">
            <img
              src={image || 'https://via.placeholder.com/600x400?text=Project+Image'}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
        <div className="p-6 md:w-1/2">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="mb-4 text-gray-400">{description}</p>
          
          <div className="mb-4 flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className={`text-xs px-2 py-1 rounded ${
                  darkMode ? 'bg-primary' : 'bg-gray-100 text-gray-800'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors duration-300"
                aria-label="GitHub Repository"
              >
                <FiGithub size={20} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors duration-300"
                aria-label="Live Demo"
              >
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
