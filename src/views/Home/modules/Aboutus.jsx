import React from "react";
import arrow from "../../../assets/images/home/Aboutus/arrow.svg";
import IEEEJMI from "../../../assets/logo/IEEEJMI.svg";

function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col font-body rounded-lg md:shadow-xl bg-white md:p-10 p-5 justify-center items-center md:w-5/6 md:px-20 py-10 md:py-14 mb-20 mt-20">
        <div className="flex">
          <h1 className="md:text-4xl text-2xl font-bold md:my-7  ">About Us</h1>
          <img
            src={arrow}
            className="absolute opacity-25  scale-75 -rotate-6 -ml-24 mt-14 hidden md:block"
          />
        </div>
        <p className="text-justify md:text-lg my-5 text-gray-500 mt-10">
          IEEE and its members inspire a global community through highly-cited
          publications, conferences, technology standards, and professional and
          educational activities. IEEE is the trusted “voice” for engineering,
          computing, and technology information around the globe.
        </p>
        <p className="text-justify md:text-lg my-5 text-gray-500">
          We are one of the largest societies in Jamia Millia Islamia with over
          200 members and an active staff participation. We promote, encourage
          and assist technological and cultural education in the students who
          join us.
        </p>
        <img src={IEEEJMI} className="w-32 mt-10" />
      </div>
    </div>
  );
}

export default AboutUs;
