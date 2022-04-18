import React, { useState } from "react";
import faker from "@faker-js/faker";
import Card from "../../components/Teams/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useMediaQuery } from "react-responsive";

function Teams() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const [currentTeam, setCurrentTeam] = useState("Header");

  return (
    <div className="font-body pt-28 flex flex-col justify-center items-center">
      <div className="">
        <h1 className="text-3xl border-b-2 pb-3">Meet Our Team</h1>
      </div>

      <div className="w-full p-4">
        <div className="flex justify-center items-center flex-wrap gap-y-16 mt-20">
          {Array(4)
            .fill(0)
            .map((item, index) => (
              <Card className="w-1/2 md:w-1/3" />
            ))}
        </div>
      </div>
      <div className="w-full overflow-hidden team-list">
        <Swiper
          spaceBetween={50}
          slidesPerView={isTabletOrMobile ? 1 : 3}
          loop={true}
          centeredSlides={true}
          onSlideChange={(swiper) => {
            console.log(swiper.clickedSlide?.children[0]?.innerHTML);
          }}
          onSwiper={(swiper) => console.log(swiper)}
          slideToClickedSlide={true}
        >
          {Array(8)
            .fill(0)
            .map((item, index) => (
              <SwiperSlide className="text-center p-5 px-14">
                <div className="p-6 header-team-list">
                  {faker.name.jobTitle()}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="w-full flex justify-center items-center">
          <Card className="w-1/2 md:w-1/4 py-12 rounded-md border" />
        </div>
        <div className="flex flex-wrap md:gap-8 justify-center items-center mt-10">
          {Array(8)
            .fill(0)
            .map((item, index) => (
              <Card className="w-1/2 md:w-1/4 py-12 rounded-md md:border" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;
