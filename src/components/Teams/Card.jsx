import React from "react";
import {faker} from "@faker-js/faker";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import { useMediaQuery } from "react-responsive";

function Card(props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div
      className={`${props.className} flex flex-col justify-center items-center `}
    >
      {props.url ? (
        <div style={{
            "filter": "drop-shadow(0px 0px 10px var(--shadow-color))",
            "--shadow-color":(props.shadowColor?props.shadowColor:"rgba(255,0,0,1)"),
          }}>
        <img
          className="rounded-3xl w-32 max-h-44 md:w-56 md:h-52 object-cover object-top transition-all"
          src={props.url}
          alt=""
          style={{
              "mask-image":"linear-gradient(to bottom, rgba(0,0,0,1)90%, rgba(0,0,0,0) 100%)",
          }}
        />
        </div>
      ) : (
        <Skeleton
          circle={true}
          height={!isTabletOrMobile ? 208 : 100}
          width={!isTabletOrMobile ? 208 : 100}
        />
      )}
      <div className="w-full flex flex-col justify-center items-center text-center">
        {props.name ? (
          <h2 className="md:text-xl mt-7">{props.name}</h2>
        ) : (
          <Skeleton
            className="md:text-xl mt-7"
            height={isTabletOrMobile ? 10 : 20}
            width={isTabletOrMobile ? 70 : 100}
          />
        )}
        {props.designation ? (
          <p className="text-sm  md:text-base mt-2 opacity-30">
            {props.designation}
          </p>
        ) : (
          <Skeleton
            width={isTabletOrMobile ? 120 : 200}
            height={isTabletOrMobile ? 10 : 20}
          />
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
