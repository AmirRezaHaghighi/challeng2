import Image from "next/image";
import styles from "./Product.module.css";

export const Product = ({
  img,
  title,
  price,
  unit,
  offprice,
  offpercent,
  icon,
  padding="0"
}) => {
  return (
    <div className="background p-3 h-100">
      {icon && (
        <div className="text-start">
          <Image src={icon} className="" />
        </div>
      )}
      <div className="text-center">
        <Image src={img} width={204} height={204} className="px-4 " />
      </div>
      {title && (
        <h5 className={styles.title} style={{ padding: padding }}>
          {title}
        </h5>
      )}
      <div className="text-start mt-4">
        <span className={styles.price}>{price}</span>
        <span className={styles.unit}>{unit}</span>
      </div>
      {offprice && offpercent && (
        <div className="d-flex justify-content-between">
          <span
            className={`badge rounded-pill bg-danger d-flex align-items-center ${styles.bargain}`}
          >
            {offpercent}
          </span>
          <span className={styles.OffPrice}>{offprice}</span>
        </div>
      )}
    </div>
  );
};
