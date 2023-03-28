import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation ,Pagination } from "swiper";
import overlayLeft from "../../../public/images/VectorLeft.svg";
import overlayRight from "../../../public/images/VectorRight.svg";
import productImage from "../../../public/images/image 5.png";
import {Product} from "../index";


export const BargainSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper w-100 main"
      >
        <SwiperSlide>
          <Product
            img={productImage}
            price={"۴,۳۴۳,۰۰۰"}
            unit={"تومان"}
            offprice={"۴,۳۴۳,۰۰۰"}
            offpercent={"۳۴%"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={productImage}
            price={"۴,۳۴۳,۰۰۰"}
            unit={"تومان"}
            offprice={"۴,۳۴۳,۰۰۰"}
            offpercent={"۳۴%"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={productImage}
            price={"۴,۳۴۳,۰۰۰"}
            unit={"تومان"}
            offprice={"۴,۳۴۳,۰۰۰"}
            offpercent={"۳۴%"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={productImage}
            price={"۴,۳۴۳,۰۰۰"}
            unit={"تومان"}
            offprice={"۴,۳۴۳,۰۰۰"}
            offpercent={"۳۴%"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={productImage}
            price={"۴,۳۴۳,۰۰۰"}
            unit={"تومان"}
            offprice={"۴,۳۴۳,۰۰۰"}
            offpercent={"۳۴%"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={productImage}
            price={"۴,۳۴۳,۰۰۰"}
            unit={"تومان"}
            offprice={"۴,۳۴۳,۰۰۰"}
            offpercent={"۳۴%"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={productImage}
            price={"۴,۳۴۳,۰۰۰"}
            unit={"تومان"}
            offprice={"۴,۳۴۳,۰۰۰"}
            offpercent={"۳۴%"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={productImage}
            price={"۴,۳۴۳,۰۰۰"}
            unit={"تومان"}
            offprice={"۴,۳۴۳,۰۰۰"}
            offpercent={"۳۴%"}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Product
            img={productImage}
            price={"۴,۳۴۳,۰۰۰"}
            unit={"تومان"}
            offprice={"۴,۳۴۳,۰۰۰"}
            offpercent={"۳۴%"}
          />
        </SwiperSlide>

        <Image src={overlayLeft} className="next" />
        <Image src={overlayRight} className="prev" />
      </Swiper>
    </>
  );
};
