import { motion } from 'framer-motion';
import clsx from 'clsx';
import styles from './slide.module.scss';
import details from '../../details.json';

const { title, date, event } = details;

export interface SlideProps {
  columns?: 1 | 2 | 3;
  children?: React.ReactNode;
  hideFooter?: boolean;
  isSmall?: boolean;
  isTop?: boolean;
}

export function Slide({
  children,
  columns,
  hideFooter = false,
  isSmall = false,
  isTop = false,
}: SlideProps) {
  return (
    <>
      <motion.section
        className={clsx(
          styles._,
          isSmall && styles.small,
          isTop && styles.top,
          columns && styles[`columns-${columns}`]
        )}
        animate={{ opacity: 1 }}
        initial={{ opacity: isSmall ? 1 : 0 }}
        style={{ zIndex: 10 }} // This is to make sure the first section is always on top
      >
        {hideFooter ||
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
