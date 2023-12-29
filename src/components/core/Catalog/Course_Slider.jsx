import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "../../.."
// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import { getAllCourses } from "../../services/operations/courseDetailsAPI"
import Course_Card from "./Course_Card";

function Course_Slider({ Courses }) {
  console.log("Courses in card slider--> ", Courses);
  return (
    <>
      {Courses?.length ? (
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  );
}

export default Course_Slider;
