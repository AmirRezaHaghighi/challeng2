import Image from "next/image";
import logo from "../../../public/images/Logo.png";
import sign1 from "../../../public/images/image 21.png";
import sign2 from "../../../public/images/image 22.png";
import send from "../../../public/images/send.svg";
import call from "../../../public/images/call.svg";
import map from "../../../public/images/map.svg";
import instagram from "../../../public/images/instagram.svg";
import telegram from "../../../public/images/telegram.svg";
import whatsapp from "../../../public/images/whatsapp.svg";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={`d-flex  justify-content-between align-items-start pb-3 ${styles.border}` }>
        <div className="col-2">
          <Image src={logo} />
          <h6 className={styles.title}>ویتسل</h6>
          <p className={styles.desc}>
            صرافی هفت ارز پلتفرم ایمن و سریع برای انجام معاملات ارز دیجیتال در
            بستری مطمئن
          </p>
        </div>
        <div>
          <h6 className={styles.title}>با ویتسل</h6>
          <ul className="list-group px-0">
            <li className={`list-group-item border-0  px-0 ${styles.desc}`}>
              درباره ما
            </li>
            <li className={`list-group-item border-0  px-0 ${styles.desc}`}>
              تماس با ما
            </li>
            <li className={`list-group-item border-0  px-0 ${styles.desc}`}>
              حریم خصوصی
            </li>
            <li className={`list-group-item border-0  px-0 ${styles.desc}`}>
              شرایط بازگشت کالا
            </li>
          </ul>
        </div>
        <div>
          <h6 className={styles.title}>محصولات ویتسل</h6>
          <ul className="list-group px-0">
            <li className={`list-group-item border-0  px-0 ${styles.desc}`}>
              کالای دیجیتال
            </li>
            <li className={`list-group-item border-0  px-0 ${styles.desc}`}>
              سوپرمارکت
            </li>
            <li className={`list-group-item border-0  px-0 ${styles.desc}`}>
              گوشی موبایل
            </li>
            <li className={`list-group-item border-0  px-0 ${styles.desc}`}>
              ابزار آلات
            </li>
            <li className={`list-group-item border-0  px-0 ${styles.desc}`}>
              لوازم تحریر
            </li>
          </ul>
        </div>
        <div>
          <h6 className={styles.title}>ارتباط با ویتسل</h6>
          <ul className="list-group px-0 ">
            <li className={`list-group-item border-0  px-0 ${styles.desc}`}>
              <Image src={send} className="ms-2" />
              <span>ٰvitdell@gmail.com</span>
            </li>
            <li className={`list-group-item border-0  px-0 ${styles.desc}`}>
              <Image src={call} className="ms-2" />
              <span>۰۸۴۷۷۴۷۳۲۲</span>
            </li>
            <li className={`list-group-item border-0  px-0 ${styles.desc}`}>
              <Image src={map} className="ms-2" />
              <span>خیابان ولی عصرنرسیده به سینما آفریقا</span>
            </li>
          </ul>
          <div className="d-flex justify-content-between mt-2 px-3">
            <div className={styles.background}>
              <Image src={instagram} className=" background p-1" />
            </div>
            <div className={styles.background}>
              <Image src={telegram} className=" background p-1" />
            </div>
            <div className={styles.background}>
              <Image src={whatsapp} className="background p-1 " />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between align-items-center">
          <div className={`mb-2 ${styles.background}`}>
            <Image src={sign1} className="p-2" />
          </div>
          <div className={styles.background}>
            <Image src={sign2} className="p-2" />
          </div>
        </div>
      </div>
      <div>
        <span className={styles.desc}>کلیه حقوق متعلق به شرکت ویستا است. </span>
      </div>
    </footer>
  );
};

