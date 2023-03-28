import Image from "next/image";
import imageSlider from "../../../public/images/image 1.png";
import productImage from "../../../public/images/image 2.png";
import {Product,Slider} from "../../common/index";

export const HomeSlider = () => {
  return (
    <section className="my-1 row g-3">
      <div className="col-9">
        <Slider slide={<Image src={imageSlider} fill />} />
      </div>
      <div className="col-3">
        <Slider
          slide={
            <Product
              img={productImage}
              title={"همزن برقی Sanford"}
              price={"۴,۳۴۳,۰۰۰"}
              unit={"تومان"}
              offprice={"۴,۳۴۳,۰۰۰"}
              offpercent={"۳۴%"}
            />
          }
        />
      </div>
    </section>
  );
};

