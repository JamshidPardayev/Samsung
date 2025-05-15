import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { HEROES } from "../../static";

const Hero = () => {
  return (
    <div className="min-h-[450px] bg-[#F5F5F580] content-end">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        // }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {HEROES?.map((hero) => (
          <SwiperSlide
            key={hero?.id}
            style={{
              backgroundImage: `url(${hero?.backImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "450px", // kerak bo‘lsa, balandlik belgilang
            }}
          >
            <div className="flex flex-col items-start justify-center min-h-[450px]">
              <h2>{hero?.name}</h2>
              <h1>{hero?.title}</h1>
              <p>{hero?.desc}</p>
              <button className=" text-[16px] text-[black] hover:border:rotate-y-360 font-semibold duration-500 cursor-pointer">
                {hero.btn1}
              </button>
              <button className="text-[16px] text-[black] bg-white font-semibold px-4 py-2 rounded-3xl border hover:text-[white] hover:bg-black duration-500 cursor-pointer">
                {hero.btn2}
              </button>
            </div>
          </SwiperSlide>
        ))}{" "}
        <br /> <br />
        {/* <SwiperSlide></SwiperSlide> */}
        {/* <SwiperSlide></SwiperSlide> */}
        {/* <SwiperSlide></SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Hero;
