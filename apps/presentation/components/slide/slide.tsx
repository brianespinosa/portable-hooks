import { motion } from 'framer-motion';
import styles from './slide.module.scss';
import details from '../../details.json';

const { title, date, event } = details;

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
          <footer>
            {title} | {event} {date}
          </footer>
        )}
        {children}
      </motion.section>
      <section className={styles._}></section>
    </>
  );
}

export default Slide;
