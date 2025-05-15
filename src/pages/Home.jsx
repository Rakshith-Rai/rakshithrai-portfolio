import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiExternalLink, FiCode, FiAward, FiBookOpen } from 'react-icons/fi';

// Import images
import profilePlaceholder from '../assets/images/profile-placeholder.svg';
import project1Image from '../assets/images/project1.svg';
import project2Image from '../assets/images/project2.svg';
import project3Image from '../assets/images/project3.svg';
import project4Image from '../assets/images/project4.svg';

// Components
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';

const Home = ({ darkMode }) => {
  // Refs for scroll animations
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effect for hero section
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  // State for interactive elements
  const [activeSkill, setActiveSkill] = useState(null);
  // Projects data
  const projects = [
    {
      title: 'Unique Solutions (Tech Service hub)',
      description: 'A responsive website for Unique Solutions Mangalore, transformed from HTML/CSS/JS/PHP/MySQL to React for improved design and functionality.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'PHP', 'MySQL'],
      github: 'https://github.com/Rakshith-Rai',
      demo: 'https://www.rakshithrai.xyz',
      image: project1Image,
    },
    {
      title: 'SURAKSHA (Women Safety App)',
      description: 'A women safety app with user login, favorite contact management, AI chat service based on Gemini API, and SMS alerts for emergency contacts.',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Firebase', 'Gemini API'],
      github: 'https://github.com/Rakshith-Rai',
      image: project2Image,
    },
    {
      title: 'Question Paper Generation System',
      description: 'A dynamic system enabling teachers to manage questions, define patterns, and generate papers aligned with COs, POs, and Bloom\'s Taxonomy.',
      technologies: ['React', 'PHP', 'MySQL'],
      github: 'https://github.com/Rakshith-Rai',
      image: project3Image,
    },
    {
      title: 'CodeXspot (Learn Coding Platform)',
      description: 'A platform to facilitate coding tutoring and resale of learning materials with different user roles and permissions.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/Rakshith-Rai',
      image: project4Image,
    },
  ];

  // Experience data
  const experiences = [
    {
      company: 'Softionik',
      position: 'Full-Stack Web Developer Intern',
      duration: 'May 2025 - Present',
      description: 'Full-Stack Web Development internship on the MERN stack (MongoDB, Express.js, React.js, Node.js), with hands-on practice in developing full-stack applications, working with RESTful APIs, and understanding deployment, hosting, and real-world industry practices.',
    },
    {
      company: 'St. Joseph Engineering College (SJEC)',
      position: 'Flutter Developer Intern',
      duration: 'Oct 2025 - Nov 2025',
      description: 'One-month Flutter internship at SJEC, working practically on Flutter and Dart, implementing Firebase for authentication and database handling, and building various mini projects.',
    },
    {
      company: 'Qtech Solutions',
      position: 'Web Development Intern',
      duration: 'Feb 2020 - Jan 2021',
      description: 'One-month Web Development internship at Qtech Solutions, with hands-on experience in web development with HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL.',
    },
  ];

  // Skills data
  const skills = [
    { category: 'Programming Languages', items: ['C', 'Java', 'Python', 'C#', 'VB.Net'] },
    { category: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'Node.js', 'Bootstrap', 'Material UI'] },
    { category: 'App Development', items: ['Flutter', 'Dart'] },
    { category: 'Database', items: ['SQL', 'MySQL', 'Firebase', 'MongoDB'] },
    { category: 'Software Tools', items: ['MS Office', 'Visual Studio', 'Notepad++', 'Android Studio', 'Xampp'] },
  ];

  // Education data
  const education = [
    {
      degree: 'Master of Computer Application',
      institution: 'St Joseph Engineering College, Vamanjoor',
      duration: '2023-25',
      score: 'CGPA: 8.03',
    },
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Sharada College (Aff-Mangalore University), Talapady',
      duration: '2020-23',
      score: 'CGPA: 7.40',
    },
    {
      degree: 'PUC',
      institution: 'HHSIB Swamiji\'s Higher Secondary School, Edneer, Kasarsgod',
      duration: '2018-20',
      score: 'Percentage: 77.57%',
    },
    {
      degree: 'SSLC',
      institution: 'B.E.M Higher Secondary School, Kasaragod',
      duration: '2017-18',
      score: 'Percentage: 95%',
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const letterAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  // Split text animation helper
  const SplitText = ({ text, className }) => {
    return (
      <motion.span
        className={className}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.5, delay: index * 0.03 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <div className="pt-20 relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-secondary/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-3/5"
              style={{ y }}
            >
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-secondary font-mono mb-4 text-lg"
              >
                Hi, my name is
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="overflow-hidden"
              >
                <SplitText
                  text="Rakshith Rai."
                  className="text-4xl md:text-7xl font-bold text-lightest mb-4 inline-block"
                />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.8,
                  type: "spring",
                  stiffness: 50
                }}
                className="text-3xl md:text-5xl font-bold text-gray-400 mb-6 relative"
              >
                I build things for the web.
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.7, delay: 1.0 }}
                className="text-gray-400 mb-8 max-w-xl text-lg"
              >
                I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex space-x-4"
              >
                <motion.a
                  href="#projects"
                  className="btn flex items-center group"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(100, 255, 218, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: 5 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.6
                    }}
                  >
                    <FiArrowRight className="ml-2" />
                  </motion.span>
                </motion.a>

                <motion.div
                  className="flex space-x-4 items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  <a
                    href="https://github.com/Rakshith-Rai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-secondary transition-all duration-300"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/rakshithraia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-secondary transition-all duration-300"
                  >
                    <FiLinkedin size={20} />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="md:w-2/5 mt-12 md:mt-0"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="relative">
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary mx-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={profilePlaceholder}
                    alt="Rakshith Rai"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 w-full h-full rounded-full border-4 border-secondary -z-10"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute -top-4 -left-4 w-full h-full rounded-full border-4 border-secondary/30 -z-10"
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative" ref={aboutRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle title="About Me" subtitle="01." />
          <div className="flex flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 50
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:w-3/5 mb-8 md:mb-0 md:pr-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-dark/50 backdrop-blur-sm p-6 rounded-lg border border-secondary/20 shadow-xl mb-6 transform hover:translate-y-[-5px] transition-all duration-300"
              >
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Hello! I'm <span className="text-secondary font-semibold">Rakshith</span>, a passionate web and app developer with a strong foundation in full-stack development. I enjoy creating websites and applications that provide exceptional user experiences.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I'm currently pursuing my Master's in Computer Applications, where I'm expanding my knowledge and skills in software development. I'm dedicated to continuous learning and staying up-to-date with industry advancements.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My goal is to create quality development solutions that enhance user experiences. I'm ready to start new projects, demonstrating effective teamwork and excellent time management skills.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center gap-2 bg-dark/30 px-4 py-2 rounded-full border border-secondary/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(100, 255, 218, 0.1)" }}
                >
                  <FiCode className="text-secondary" />
                  <span>Web Development</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 bg-dark/30 px-4 py-2 rounded-full border border-secondary/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(100, 255, 218, 0.1)" }}
                >
                  <FiAward className="text-secondary" />
                  <span>App Development</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 bg-dark/30 px-4 py-2 rounded-full border border-secondary/20"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(100, 255, 218, 0.1)" }}
                >
                  <FiBookOpen className="text-secondary" />
                  <span>Continuous Learning</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 50,
                delay: 0.2
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:w-2/5"
            >
              <motion.h3
                className="text-2xl font-bold mb-6 relative inline-block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                My Skills
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-secondary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </motion.h3>

              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-dark/50 backdrop-blur-sm p-5 rounded-lg border border-secondary/20 shadow-lg"
                  >
                    <h4 className="text-secondary font-mono text-lg mb-3 flex items-center">
                      <span className="mr-2 text-xs opacity-70">0{index + 1}.</span>
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <motion.span
                          key={i}
                          className={`text-sm px-3 py-1 rounded-full cursor-pointer ${
                            activeSkill === `${index}-${i}`
                              ? 'bg-secondary text-primary font-medium'
                              : darkMode ? 'bg-dark hover:bg-dark/80' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          } transition-all duration-300`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setActiveSkill(activeSkill === `${index}-${i}` ? null : `${index}-${i}`)}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative" ref={experienceRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle title="Where I've Worked" subtitle="02." />

          <motion.div
            className="max-w-4xl mx-auto relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline line */}
            <motion.div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-secondary/30 transform md:translate-x-[-50%]"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-[50%]' : 'md:pl-12 md:ml-[50%]'}`}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 50
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-[-8px] md:left-auto md:right-[-8px] top-0 w-4 h-4 rounded-full bg-secondary z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    [index % 2 === 0 ? 'right' : 'left']: '-8px',
                    [index % 2 === 0 ? 'left' : 'right']: 'auto',
                    transform: 'translateX(50%)'
                  }}
                />

                <motion.div
                  className="bg-dark/50 backdrop-blur-sm p-6 rounded-lg border border-secondary/20 shadow-xl"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(100, 255, 218, 0.1)",
                    borderColor: "rgba(100, 255, 218, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <motion.h3
                      className="text-xl font-bold text-lightest"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {exp.position}
                    </motion.h3>
                    <motion.span
                      className="text-secondary font-mono text-sm mt-1 md:mt-0"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {exp.duration}
                    </motion.span>
                  </div>

                  <motion.h4
                    className="text-lg mb-4 text-gray-300 flex items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-secondary mr-2">@</span>{exp.company}
                  </motion.h4>

                  <motion.p
                    className="text-gray-400 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {exp.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative" ref={projectsRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle title="Things I've Built" subtitle="03." />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
              <span className="text-secondary"> Click on a project card to see more details.</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                darkMode={darkMode}
              />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/Rakshith-Rai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(100, 255, 218, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View More Projects <FiExternalLink className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative" ref={educationRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle title="Education" subtitle="04." />

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 50
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px -10px rgba(100, 255, 218, 0.2)"
                }}
                className={`p-6 rounded-xl bg-dark/50 backdrop-blur-sm border border-secondary/20 shadow-xl relative overflow-hidden group`}
              >
                {/* Decorative elements */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full -mr-10 -mt-10"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />

                <motion.span
                  className="text-secondary/20 text-8xl font-bold absolute -bottom-6 -right-2 z-0 opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {index + 1}
                </motion.span>

                <div className="relative z-10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-1 bg-secondary mb-4"
                  />

                  <motion.h3
                    className="text-2xl font-bold mb-2 text-lightest"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {edu.degree}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {edu.institution}
                  </motion.p>

                  <div className="flex justify-between text-sm items-center">
                    <motion.span
                      className="text-secondary font-mono px-3 py-1 rounded-full border border-secondary/30 bg-primary/50"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(100, 255, 218, 0.1)" }}
                    >
                      {edu.duration}
                    </motion.span>

                    <motion.span
                      className="font-medium text-gray-300"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {edu.score}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative" ref={contactRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-secondary/5"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
          <SectionTitle title="Get In Touch" subtitle="05." />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-dark/50 backdrop-blur-sm p-8 rounded-xl border border-secondary/20 shadow-xl mb-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-8 text-lg leading-relaxed"
            >
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8"
            >
              <motion.a
                href="https://github.com/Rakshith-Rai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-all duration-300 bg-primary/50 px-6 py-3 rounded-full border border-secondary/20 hover:border-secondary/50 group"
                whileHover={{ y: -5, x: 0 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <FiGithub size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/rakshithraia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-all duration-300 bg-primary/50 px-6 py-3 rounded-full border border-secondary/20 hover:border-secondary/50 group"
                whileHover={{ y: -5, x: 0 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                href="mailto:rakshithrai15@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-secondary transition-all duration-300 bg-primary/50 px-6 py-3 rounded-full border border-secondary/20 hover:border-secondary/50 group"
                whileHover={{ y: -5, x: 0 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <FiMail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Email</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:rakshithrai15@gmail.com"
                className="btn inline-block text-lg px-8 py-3"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(100, 255, 218, 0.1)",
                  boxShadow: "0 0 15px rgba(100, 255, 218, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Say Hello
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            Designed & Built by Rakshith Rai
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Home;
