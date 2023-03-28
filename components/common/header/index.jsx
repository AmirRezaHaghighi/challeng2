import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import categoryIcon from "../../../public/images/category.svg";
import fireIcon from "../../../public/images/fire.svg";
import searchIcon from "../../../public/images/search.svg";
import cartIcon from "../../../public/images/cart.svg";
import ticketIcon from "../../../public/images/ticket-discount.svg";
import { Button } from "../index";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.Navbar}>
      <div className={styles.right}>
        <Image src={logo} />
        <ul className={styles.list}>
          <li className="">
            <Image src={categoryIcon} className="ms-2" />
            <span>دسته بندی ها</span>
          </li>
          <li className="">
            <Image src={fireIcon} className="ms-2" />
            <span>پرفروش ترین ها</span>
          </li>
          <li className="">
            <Image src={ticketIcon} className="ms-2" />
            <span>تخفیف دار ها</span>
          </li>
        </ul>
      </div>
      <div className={styles.left}>
        <div className={styles.searchBar}>
          <input type="search" placeholder="جستجوی محصولات ..." className={styles.searchQueryInput} />
          <button className={styles.searchQuerySubmit} type="submit">
            <Image src={searchIcon} />
          </button>
        </div>

        <Image src={cartIcon} className="ms-2" />
        <Button value={"ورود/ثبت نام"} />
      </div>
    </header>
  );
};
