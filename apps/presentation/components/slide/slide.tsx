import styles from './slide.module.scss';

export interface SlideProps {
  children: React.ReactNode;
}

export function Slide({ children }: SlideProps) {
  return <section className={styles._}>{children}</section>;
}

export default Slide;
