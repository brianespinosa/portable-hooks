import { motion } from 'framer-motion';
import clsx from 'clsx';
import styles from './slide.module.scss';
import details from '../../details.json';

const { title, date, event } = details;

export interface SlideProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  isSmall?: boolean;
}

export function Slide({
  children,
  hideFooter = false,
  isSmall = false,
}: SlideProps) {
  return (
    <>
      <motion.section
        className={clsx(styles._, isSmall && styles.small)}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        style={{ zIndex: 10 }} // This is to make sure the first section is always on top
      >
        {!hideFooter ||
          (!isSmall && (
            <footer>
              {title} | {event} {date}
            </footer>
          ))}
        {children}
      </motion.section>
      <section className={clsx(styles._, isSmall && styles.small)}></section>
    </>
  );
}

export default Slide;
