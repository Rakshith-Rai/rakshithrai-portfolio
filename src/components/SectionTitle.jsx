import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      {subtitle && (
        <p className="text-secondary font-mono text-sm mb-2">{subtitle}</p>
      )}
      <h2 className="section-title">{title}</h2>
    </motion.div>
  );
};

export default SectionTitle;
