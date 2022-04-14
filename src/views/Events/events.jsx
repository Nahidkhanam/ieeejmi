import React from "react";
import EventsTimeline from "../../components/Events/EventsTimeline";
function Events() {
  return (
    <React.Fragment>
      <div className="pt-28 pb-10 font-body">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-2xl font-thin py-5 ">Upcoming Events</h1>
          <EventsTimeline count={2} />
        </div>
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-2xl font-thin py-5 ">Past Events</h1>
          <EventsTimeline count={12} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Events;
