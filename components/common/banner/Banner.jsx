import Image from "next/image";
import baner1 from "../../../public/images/image 3.png";
import baner2 from "../../../public/images/image 4.png";

export const Banner = ({ reverse = false }) => {
  return (
    <section
      className={`d-flex justify-content-between my-4 ${
        reverse && "flex-row-reverse"
      }`}
    >
      <Image src={baner1} className={`w-100 border ${!reverse && "ms-3"}`} />
      <Image src={baner2} className={`w-100 border ${reverse && "ms-3"}`} />
    </section>
  );
};
