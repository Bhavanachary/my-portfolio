import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ textAlign: 'center', marginBottom: '2rem' }}
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Bhavana Chary
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Front-End Developer | Angular | React | JavaScript | Azure
      </motion.p>
    </motion.header>
  );
}

export default Header;