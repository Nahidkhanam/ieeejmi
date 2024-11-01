import React from "react";
import Card from "./Card";

function TeamLoading(props) {
  return (
    <React.Fragment>
      {Array(props.count)
        .fill(0)
        .map((item,index) => (
          <Card className={props.className} key ={index} />
        ))}
    </React.Fragment>
  );
}

export default TeamLoading;
