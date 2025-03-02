import styles from './border.module.css';

export default function Border({ children }) {
  return (
    <div id="box" className={`${styles.blurColor} flex-grow rounded-xl w-full`}>
      {children}
    </div>
  );
}
