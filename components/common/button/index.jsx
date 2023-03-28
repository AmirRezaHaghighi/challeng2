import styles from "./Button.module.css";
import Image from "next/image";

export const Button = ({ value, icon }) => {
  return (
    <button type="button" className={styles.btn}>
      {icon && <Image src={icon} className="ms-1" />}
      {value && <span>{value}</span>}
    </button>
  );
};
