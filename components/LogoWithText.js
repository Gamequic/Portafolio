import Image from 'next/image';
import styles from './LogoWithText.css';

const LogoWithText = ({ text, src, width = 50 }) => {
  return (
    <div className={"LogoWithTextContainer"}>
        <Image src={src} alt="Logo" width={width} height={50} />
        <span className={styles.text}>{text}</span>
    </div>
  );
};

export default LogoWithText;
