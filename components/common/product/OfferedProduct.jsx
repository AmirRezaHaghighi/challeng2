import Image from "next/image";
import styles from "./Product.module.css";
import ProductImage from "../../../public/images/image 16.png";
import fireIcon from "../../../public/images/fire.svg";

export const OfferedProduct = () => {
  return (
    <div className="background border d-flex justify-content-between align-items-center px-2 ">
      <div>
        <Image src={ProductImage} />
      </div>
      <div className="w-100 text-start">
        <Image src={fireIcon} />
        <h5 className={styles.title}>کتونی نایک شماره ۱۲۱</h5>
        <div className="text-start">
          <span className={styles.price}>۴,۳۴۳,۰۰۰</span>
          <span className={styles.unit}>تومان</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span
            className={`badge rounded-pill bg-danger d-flex align-items-center ${styles.bargain}`}
          >
            ۳۴%
          </span>
          <span className={styles.OffPrice}>۴,۳۴۳,۰۰۰</span>
        </div>
      </div>
    </div>
  );
};
