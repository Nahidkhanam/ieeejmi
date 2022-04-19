import React from "react";
import Card from "./Card";

function TeamLoading(props) {
  return (
    <React.Fragment>
      {Array(props.count)
        .fill(0)
        .map(() => (
          <Card className={props.className} />
        ))}
    </React.Fragment>
  );
}

export default TeamLoading;
