import { motion } from 'framer-motion';

const ExperienceCard = ({ experience, index, darkMode }) => {
  const { company, position, duration, description } = experience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-secondary before:z-10 ${
        index !== 0 ? 'before:shadow-[0_-30px_0_#0a192f,0_-60px_0_#0a192f]' : ''
      }`}
    >
      <div className="absolute left-[7px] top-6 bottom-0 w-[2px] bg-gray-700"></div>
      <div className={`p-6 rounded-lg ${darkMode ? 'bg-dark' : 'bg-gray-100'}`}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
          <h3 className="text-xl font-bold">{position}</h3>
          <span className="text-secondary font-mono text-sm">{duration}</span>
        </div>
        <h4 className="text-lg mb-4 text-gray-400">{company}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
