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
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {HEROES?.map((hero) => {
          const isWhite = hero.color === "white";
          const textColor = isWhite ? "text-white" : "text-black";
          const borderColor = isWhite ? "bg-white" : "bg-black";
          const btn2Base = isWhite
            ? "text-black bg-white hover:bg-black hover:text-white"
            : "text-white bg-black hover:bg-white hover:text-black";

          return (
            <SwiperSlide
              key={hero?.id}
              style={{
                backgroundImage: `url(${hero?.backImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "450px",
              }}
            >
              
              <div className="flex flex-col items-start justify-end min-h-[450px] px-[100px] py-[50px] gap-y-2 max-md:px-[50px] max-sm:px-[20px]">
                <h2 className={`max-w-[400px] text-[24px] font-semibold ${textColor}`}>
                  {hero?.name}
                </h2>
                <h1 className={`max-w-[500px] text-[40px] font-bold leading-[44px] ${textColor}`}>
                  {hero?.title}
                </h1>
                <p className={`max-w-[500px] text-[16px] ${textColor}`}>{hero?.desc}</p>
                <div className="flex gap-4 my-4 flex-wrap-reverse">
                  <button
                    className={`group relative font-semibold duration-300 cursor-pointer text-[16px] ${textColor} $`}
                  >
                    {hero.btn1}
                    <span
                      className={`absolute left-0 bottom-0 w-full h-[2px] duration-300 scale-0 group-hover:scale-100 ${borderColor}`}
                    ></span>
                  </button>

                  <button
                    className={`text-[16px] font-semibold px-4 py-2 rounded-3xl duration-500 cursor-pointer ${btn2Base}`}
                  >
                    {hero.btn2}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Hero;
