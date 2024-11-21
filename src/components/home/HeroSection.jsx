// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import banner13 from "../../assets/heroImg/hero-1.jpg";
import banner14 from "../../assets/heroImg/hero-2.jpg";
import banner11 from "../../assets/heroImg/hero-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { useContext, useRef, useState } from "react";
// import LoadingContext from "../ContextApi/LoadingContext";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import HeroBanner from "./HeroBanner";
import Button from "../ui/Button";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Custom navigation buttons
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          // Necessary to update refs for custom buttons
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-full w-full">
            <HeroBanner source={banner13} />
            <div
              className={`absolute flex flex-col justify-center items-center lg:inline lg:pl-[50rem] ${
                activeIndex === 0 ? "animate__animated animate__zoomIn" : ""
              }`}
            >
              <h1 className="text-primary text-2xl lg:text-5xl font-semibold select-none pointer-events-none bg-gradient-to-r from-gray-700 to-transparent rounded-lg px-1 py-1 animate__animated animate__zoomIn">
                Explore the Mountain
              </h1>
              <div className="lg:pl-[20rem]">
                <Button
                  label="Explore Now"
                  type="primary"
                  onClick={() => {
                    window.scrollTo({ top: 500, behavior: "smooth" });
                  }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full w-full">
            <HeroBanner source={banner11} />
            <div
              className={`absolute flex flex-col justify-center items-center  lg:inline lg:pr-[50rem] ${
                activeIndex === 1 ? "animate__animated animate__zoomIn" : ""
              }`}
            >
              <h1 className="text-primary text-2xl lg:text-5xl font-semibold select-none pointer-events-none bg-gradient-to-r from-gray-700 to-transparent rounded-lg px-1 py-1">
                Explore the Greenery
              </h1>
              <div className="">
                <Button
                  className=""
                  label="Explore Now"
                  type="primary"
                  onClick={() => {
                    window.scrollTo({ top: 500, behavior: "smooth" });
                  }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full w-full">
            <HeroBanner source={banner14} />
            <div
              className={`absolute flex flex-col justify-center items-center lg:inline lg:pr-[60rem] ${
                activeIndex === 2 ? "animate__animated animate__zoomIn" : ""
              }`}
            >
              <h1 className="text-primary text-2xl lg:text-5xl font-semibold select-none pointer-events-none bg-gradient-to-r from-gray-700 to-transparent rounded-lg px-1 py-1 ">
                View the Sunrise
              </h1>

              <Button
                label="Explorer Now"
                type="primary"
                onClick={() => {
                  window.scrollTo({ top: 500, behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button
        ref={navigationPrevRef}
        className="text-primary hover:text-primaryHover hover:cursor-pointer lg:text-[3rem] text-[1.8rem] absolute left-2 top-1/2 z-10"
      >
        <FaArrowCircleLeft />
      </button>
      <button
        ref={navigationNextRef}
        className="text-primary hover:text-primaryHover hover:cursor-pointer lg:text-[3rem] text-[1.8rem] absolute right-2 top-1/2 z-10"
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
}
