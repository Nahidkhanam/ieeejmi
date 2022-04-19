import React from "react";
import faker from "@faker-js/faker";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";

function Card(props) {
  return (
    <div
      className={`${props.className} flex flex-col justify-center items-center `}
    >
      {props.url ? (
        <img
          className="rounded-full w-24 h-24 md:w-52 md:h-52 object-cover  transition-all"
          src={props.url}
          alt=""
        />
      ) : (
        <Skeleton circle={true} height={208} width={208} />
      )}
      <div className="w-full flex flex-col justify-center items-center text-center">
        {props.name ? (
          <h2 className="md:text-xl mt-7">{props.name}</h2>
        ) : (
          <Skeleton className="md:text-xl mt-7" height={20} width={100} />
        )}
        {props.designation ? (
          <p className="text-sm  md:text-base mt-2 opacity-30">
            {props.designation}
          </p>
        ) : (
          <Skeleton width={200} height={20} />
        )}
        <div className="flex gap-x-2 my-3">
          {props.linkedIn ? (
            <AiFillLinkedin className="w-6 h-6 text-blue-500" />
          ) : null}
          {props.Twitter ? (
            <AiOutlineTwitter className="w-6 h-6 text-blue-400" />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
