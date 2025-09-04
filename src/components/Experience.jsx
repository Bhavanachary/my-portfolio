
import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Experience</h2>
      <div>
        <h3>Charter Communications – Sr. Frontend Developer</h3>
        <p>Angular 13–17, AWS, REST APIs, NGRX, Python Django, Jest, Cypress</p>
      </div>
      <div>
        <h3>Liberty Mutual – Sr. Frontend Developer</h3>
        <p>Angular 9, Azure DevOps, GraphQL, Adobe Analytics, CircleCI</p>
      </div>
      <div>
        <h3>Capital Group – Sr. UI Developer</h3>
        <p>React, Redux, Bootstrap, MERN Stack, Vue.js, Material UI</p>
      </div>
    </motion.section>
  );
}
export default Experience;