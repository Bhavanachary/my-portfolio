import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Angular', 'Bootstrap',
    'TypeScript', 'Redux', 'Node.js', 'MongoDB', 'Azure', 'AWS',
    'GraphQL', 'Docker', 'Jest', 'Cypress'
  ];

  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => <motion.li key={skill}  whileHover={{ scale: 1.05, backgroundColor: '#d0e0ff' }}   transition={{ type: 'spring', stiffness: 300 }} > {skill} </motion.li>)}
      </ul>
    </section>
  );
}
export default Skills;
