import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";

const Carousel = ({ children }) => {
  const swiperRef = useRef(null);

  return (
    <Swiper
      className="swiperContainer"
      modules={[Autoplay]}
      slidesPerView="3"
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={3000}
      allowTouchMove={false}
    >
      {children && children.map((child, index) => <SwiperSlide key={index}>{child}</SwiperSlide>)}
    </Swiper>
  );
};

export default Carousel;
