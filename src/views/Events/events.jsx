import React from "react";
import EventsTimeline from "../../components/Events/EventsTimeline";
function Events() {
  return (
    <React.Fragment>
      <div className="pt-28 pb-10 font-body">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-2xl font-medium py-5 font-[Platypus]">Upcoming Events</h1>
          <EventsTimeline count={2} type="UPCOMING" />
        </div>
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-2xl font-medium py-5 font-[Platypus]">Past Events</h1>
          <EventsTimeline count={12} type="PAST" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Events;
