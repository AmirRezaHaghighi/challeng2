import Image from "next/image";
import baner1 from "../../../public/images/image 17.png";
import baner2 from "../../../public/images/image 18.png";
import baner3 from "../../../public/images/image 19.png";

export const TripleBanner = () => {
  return (
    <section className="d-flex ">
      <div className=" w-50 ms-2">
        <Image src={baner1} className="w-100 border" />
      </div>
      <div className="d-flex flex-column w-50">
        <Image src={baner2} className="w-100 mb-3 border" />
        <Image src={baner3} className="w-100 border mt-1" />
      </div>
    </section>
  );
};
