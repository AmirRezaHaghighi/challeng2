import Image from "next/image";
import startIcon from "../../../public/images/magic-star.svg";
import {BargainSlider} from "../../common/index";

export const BestSeller = () => {
  return (
    <section className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex">
          <Image src={startIcon} className="ms-2" />
          <h6 className="title2">پرفروش ترین محصولات</h6>
        </div>
        <span className="view">مشاهده همه </span>
      </div>
      <BargainSlider />
    </section>
  );
};

