import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GenerateData from "./generateData";
import { GET_PAST_EVENTS, GET_UPCOMING_EVENTS } from "../../api/events";
import { useQuery } from "@apollo/client";
import Loading from "../Loading";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
const apiMap = {
  PAST: GET_PAST_EVENTS,
  UPCOMING: GET_UPCOMING_EVENTS,
};
dayjs.extend(customParseFormat);
function EventsTimeline(props) {
  const contentStyle = {
    background: "#fff",
    color: "#000",
  };
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // covers 11th to 19th
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };
  const { loading, error, data } = useQuery(apiMap[props.type]);

  if (loading) return <Loading className={"relative min-h-screen"} />;
  if (error) return <p>Error :(</p>;

  console.log(data);

  const Data = GenerateData(props.count);

  if (data?.event?.length === 0)
    return <p className="my-10 text-gray-400">No events found</p>;
  const sortedEvents=[...data.event].sort((a, b) => new Date(b?.date) - new Date(a?.date));
  return (
    <div className="font-body">
      <VerticalTimeline lineColor="rgb(107 114 128)" animate="true">
        {sortedEvents.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              ...contentStyle,
              boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.1)",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date={`${dayjs(item?.date).date()}${getOrdinalSuffix(dayjs(item?.date).date())} ${dayjs(item?.date).format('MMMM YYYY')}`}
            iconStyle={{ background: "#fff", color: "#000" }}
            icon={
              <img
                src={item?.coverPhoto?.url}
                className="rounded-full h-full w-full object-cover  hover:rotate-6 transition-all"
                alt="avatar"
              />
            }
          >
            <h2>{item?.title}</h2>
            <p
              className="font-thin"
              style={{
                fontWeight: 200,
                fontSize: "0.8rem",
              }}
            >
              {item?.excerpt}
            </p>
            <div className="w-full flex justify-between mt-9">
              <div className="self-end text-sm px-4 font-extralight py-2 bg-black text-white rounded-full">
                {item?.date}
              </div>
              {props.type=="UPCOMING" && <button className="px-2 py-1 underline font-light hover:underline-offset-4 hover:-translate-y-1 transition-all">
                Apply Now!
              </button>}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default EventsTimeline;
