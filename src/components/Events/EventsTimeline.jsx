import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GenerateData from "./generateData";

import { faker } from "@faker-js/faker";

function EventsTimeline(props) {
  const contentStyle = {
    background: "#fff",
    color: "#000",
  };

  const Data = GenerateData(props.count);

  return (
    <div className="font-body">
      <VerticalTimeline lineColor="rgb(107 114 128)" animate="true">
        {Data.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              ...contentStyle,
              boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.1)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date={item.date}
            iconStyle={{ background: "#fff", color: "#000" }}
            icon={<img src={item.icon} className="rounded-full" alt="avatar" />}
          >
            <h2>{item.title}</h2>
            <p
              className="font-thin"
              style={{
                fontWeight: 200,
                fontSize: "0.8rem",
              }}
            >
              {item.description}
            </p>
            <div className="w-full flex justify-between mt-9">
              <div className="self-end text-sm px-4 font-extralight py-2 bg-black text-white rounded-full">
                {item.date}
              </div>
              <button className="px-2 py-1 underline font-light hover:underline-offset-4 hover:-translate-y-1 transition-all">
                Apply Now!
              </button>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default EventsTimeline;
