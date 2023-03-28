import Image from "next/image";
import discountIcon from '../../../public/images/ticket-discount.svg'
import {BargainSlider} from "../../common/index";

export const Bargain = () => {
  return (
    <section className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex">
          <Image src={discountIcon} className="ms-2" />
          <h6 className="title2">تخفیف های ویتسل</h6>
        </div>
        <span className="view">مشاهده همه </span>
      </div>
      <BargainSlider/>
    </section>
  );
};

