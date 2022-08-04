import { motion } from 'framer-motion';
import styles from './slide.module.scss';

export interface SlideProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export function Slide({ children, hideFooter = false }: SlideProps) {
  return (
    <>
      <motion.section
        className={styles._}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        style={{ zIndex: 10 }} // This is to make sure the first section is always on top
      >
        {!hideFooter && (
          <footer>Portable State Hooks | Innovate Summit 2022</footer>
        )}
        {children}
      </motion.section>
      <section className={styles._}></section>
    </>
  );
}

export default Slide;
