import { motion } from 'framer-motion';
import styles from './slide.module.scss';

/* eslint-disable-next-line */
export interface SlideProps {}

export function Slide(props: SlideProps) {
  return (
    <motion.section
      className={styles._}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </motion.section>
  );
}

export default Slide;
