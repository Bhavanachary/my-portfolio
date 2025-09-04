import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>About Me</h2>
      <p>
        With over 10 years of experience in front-end development, I specialize in building responsive, accessible, and high-performance web applications using modern frameworks like Angular and React. I’ve worked across industries, delivering scalable solutions and intuitive user experiences.
      </p>
    </motion.section>
  );
}

export default About;