import React from "react";
import faker from "@faker-js/faker";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
function Card(props) {
  return (
    <div
      className={`${props.className} flex flex-col justify-center items-center `}
    >
      <img
        className="rounded-full w-5/12 object-cover  transition-all"
        src={faker.image.people(500, 500, true)}
        alt=""
      />
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h2 className="md:text-xl mt-7">{faker.name.findName()}</h2>
        <p className="text-sm  md:text-base mt-2 opacity-30">
          {faker.name.jobTitle()}
        </p>
        <div className="flex gap-x-2 my-3">
          <AiFillLinkedin className="w-6 h-6 text-blue-500" />
          <AiOutlineTwitter className="w-6 h-6 text-blue-400" />
        </div>
      </div>
    </div>
  );
}

export default Card;
