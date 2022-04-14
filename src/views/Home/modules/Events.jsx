import React from "react";
import EventsTimeline from "../../../components/Events/EventsTimeline";
import { Link } from "react-router-dom";
function Events() {
  return (
    <div className="flex flex-col justify-center font-body items-center">
      <h1 className="text-3xl py-6 font-thin">Events</h1>
      <EventsTimeline count={3} />
      <Link
        to={`/events`}
        className="mt-8 text-lg font-thin underline hover:font-extralight transition-all"
      >
        See More
      </Link>
    </div>
  );
}

export default Events;
