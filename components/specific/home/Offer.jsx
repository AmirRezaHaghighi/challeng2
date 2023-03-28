import Image from "next/image";
import productImage from "../../../public/images/image 2.png";
import fireIcon from "../../../public/images/fire.svg";
import { Slider, Product, OfferedProduct } from "../../common/index";

export const Offer = () => {
  return (
    <section className="my-5">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="d-flex">
          <Image src={fireIcon} className="ms-2" />
          <h6 className="title2">پیشنهادات شگفت انگیز</h6>
        </div>
        <span className="view">مشاهده همه</span>
      </div>
      <div className="row h-100">
        <div className="col-3 h-100">
          <Slider
            slide={
              <Product
                img={productImage}
                title={"همزن برقی Sanford"}
                price={"۴,۳۴۳,۰۰۰"}
                unit={"تومان"}
                icon={fireIcon}
                padding="3rem 0"
              />
            }
          />
        </div>
        <div className="col-9 offer-grid-container">
          <OfferedProduct />
          <OfferedProduct />
          <OfferedProduct />
          <OfferedProduct />
          <OfferedProduct />
          <OfferedProduct />
          <OfferedProduct />
          <OfferedProduct />
          <OfferedProduct />
        </div>
      </div>
    </section>
  );
};
