import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';

// Components
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';

const Home = ({ darkMode }) => {
  // Projects data
  const projects = [
    {
      title: 'Unique Solutions (Tech Service hub)',
      description: 'A responsive website for Unique Solutions Mangalore, transformed from HTML/CSS/JS/PHP/MySQL to React for improved design and functionality.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'PHP', 'MySQL'],
      github: 'https://github.com/Rakshith-Rai',
      demo: 'https://www.rakshithrai.xyz',
    },
    {
      title: 'SURAKSHA (Women Safety App)',
      description: 'A women safety app with user login, favorite contact management, AI chat service based on Gemini API, and SMS alerts for emergency contacts.',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Firebase', 'Gemini API'],
      github: 'https://github.com/Rakshith-Rai',
    },
    {
      title: 'Question Paper Generation System',
      description: 'A dynamic system enabling teachers to manage questions, define patterns, and generate papers aligned with COs, POs, and Bloom\'s Taxonomy.',
      technologies: ['React', 'PHP', 'MySQL'],
      github: 'https://github.com/Rakshith-Rai',
    },
    {
      title: 'CodeXspot (Learn Coding Platform)',
      description: 'A platform to facilitate coding tutoring and resale of learning materials with different user roles and permissions.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/Rakshith-Rai',
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-secondary font-mono mb-4"
              >
                Hi, my name is
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-lightest mb-4"
              >
                Rakshith Rai.
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-gray-400 mb-6"
              >
                I build things for the web.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-400 mb-8 max-w-xl"
              >
                I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex space-x-4"
              >
                <a
                  href="#projects"
                  className="btn flex items-center"
                >
                  View My Work <FiArrowRight className="ml-2" />
                </a>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:w-2/5 mt-12 md:mt-0"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary mx-auto">
                  <img
                    src="https://via.placeholder.com/400x400?text=Rakshith+Rai"
                    alt="Rakshith Rai"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-full border-4 border-secondary -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="About Me" subtitle="01." />
          <div className="flex flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-3/5 mb-8 md:mb-0 md:pr-12"
            >
              <p className="text-gray-400 mb-4">
                Hello! I'm Rakshith, a passionate web and app developer with a strong foundation in full-stack development. I enjoy creating websites and applications that provide exceptional user experiences.
              </p>
              <p className="text-gray-400 mb-4">
                I'm currently pursuing my Master's in Computer Applications, where I'm expanding my knowledge and skills in software development. I'm dedicated to continuous learning and staying up-to-date with industry advancements.
              </p>
              <p className="text-gray-400">
                My goal is to create quality development solutions that enhance user experiences. I'm ready to start new projects, demonstrating effective teamwork and excellent time management skills.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-2/5"
            >
              <h3 className="text-xl font-bold mb-4">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-secondary mb-2">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span
                          key={i}
                          className={`text-sm px-3 py-1 rounded ${
                            darkMode ? 'bg-dark' : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-opacity-30 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Where I've Worked" subtitle="02." />
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                experience={exp}
                index={index}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Things I've Built" subtitle="03." />
          <div>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-opacity-30 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Education" subtitle="04." />
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${darkMode ? 'bg-dark' : 'bg-gray-100'}`}
              >
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">{edu.duration}</span>
                  <span>{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <SectionTitle title="Get In Touch" subtitle="05." />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-400 mb-8"
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            <a
              href="https://github.com/Rakshith-Rai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rakshithraia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:rakshithrai15@gmail.com"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            href="mailto:rakshithrai15@gmail.com"
            className="btn inline-block"
          >
            Say Hello
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Home;
