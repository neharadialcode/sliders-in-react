import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Pagination, Navigation } from "swiper/modules";

const Sllider2 = () => {
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    setTotalSlides(document.querySelectorAll(".swiper-slide").length);
  }, []);
  console.log(totalSlides, "totalSlides");
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[Pagination, Navigation, EffectCards]}
        className="mySwiper"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        dir="rtl"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>{" "}
      {/* Add navigation buttons */}
      <div className="swiper-button-next">left</div>
      <div className="swiper-button-prev">right</div>
    </div>
  );
};

export default Sllider2;
