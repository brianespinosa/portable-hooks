import styles from './slide.module.scss';

/* eslint-disable-next-line */
export interface SlideProps {}

export function Slide(props: SlideProps) {
  return (
    <section className={styles._}>
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </section>
  );
}

export default Slide;
