
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Projects</h2>
      <div>
        <h3>Identity Guard Membership Site</h3>
        <p>Built UI with HTML5, CSS3, AngularJS, and Bootstrap for responsive design.</p>
      </div>
      <div>
        <h3>Healthcare Imaging Platform</h3>
        <p>Developed Angular-based UI for diagnostic imaging systems with GraphQL integration.</p>
      </div>
      <div>
        <h3>Financial Management Dashboard</h3>
        <p>Redesigned UI for Capital Group’s flagship app using React and Bootstrap.</p>
      </div>
    </motion.section>
  );
}

export default Projects;