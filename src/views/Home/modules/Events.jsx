import React from "react";
import EventsTimeline from "../../../components/Events/EventsTimeline";
import { useNavigate } from "react-router-dom";
function Events() {
  const navigation = useNavigate();
  return (
    <div className="flex flex-col justify-center font-body items-center">
      <h1 className="text-3xl py-6 font-thin">Events</h1>
      <EventsTimeline count={3} />
      <div
        className="mt-8 text-lg font-thin underline hover:font-extralight transition-all cursor-pointer"
        onClick={() => {
          window.scrollTo(0, 0);
          setTimeout(() => {
            navigation("/events");
          }, 100);
        }}
      >
        See More
      </div>
    </div>
  );
}

export default Events;
