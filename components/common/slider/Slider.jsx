import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import overlayLeft from "../../../public/images/VectorLeft.svg";
import overlayRight from "../../../public/images/VectorRight.svg";

export const Slider = ({ slide }) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-100 h-100 main slider"
      >
        <SwiperSlide>{slide}</SwiperSlide>
        <SwiperSlide>{slide}</SwiperSlide>
        <Image src={overlayLeft} className="next" />
        <Image src={overlayRight} className="prev" />
      </Swiper>
    </>
  );
};
