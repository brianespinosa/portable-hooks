import styles from './DevMessage.module.scss';
export function DevMessage() {
  if (process.env.NODE_ENV === 'development') {
    return <div className={styles['_']}>DEV</div>;
  } else {
    return null;
  }
}
export default DevMessage;
