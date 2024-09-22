import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_TEAM_BY_NAME } from "../../api/teams";
import Card from "./Card";

export const IndividualLoading = () => {
  return (
    <React.Fragment>
      <div className="w-full flex justify-center items-center">
        <Card className="w-1/2 md:w-1/4 py-12 rounded-md border" />
      </div>
      <div className="flex flex-wrap md:gap-8 justify-center items-center mt-10">
        {Array(8)
          .fill(0)
          .map((item, index) => (
            <Card className="w-1/2 md:w-1/4 py-12 rounded-md md:border" />
          ))}
      </div>
    </React.Fragment>
  );
};

function Team(props) {
  console.log(props.name);
  const { loading, error, data, refetch } = useQuery(GET_TEAM_BY_NAME, {
    variables: { name: props.name },
    pollInterval: 500,
  });

  const [team, setTeam] = useState(null);

  useEffect(() => {
    refetch();
  }, [props.name]);

  useEffect(() => {
    if (Array.isArray(data?.teams)) {
      setTeam({
        heads: data?.teams.filter((item) => item.designation === "Team Head"),
        members: data?.teams.filter((item) => item.designation !== "Team Head"),
      });
    }
  }, [data]);

  if (loading || props.name === null || team == null)
    return <IndividualLoading />;

  if (error) {
    console.log(error);
    return <p>Error :(</p>;
  }

  console.log(team);

  return (
    <React.Fragment>
      <div className="w-full flex justify-center items-center">
        {team?.heads.map((item, index) => (
          <Card
          className="w-1/2 md:w-1/5 py-12 rounded-md "
          url={"/images/image_18.jpg"}
          name={item.name}
          designation={item.designation}
        />
        ))}
        
        {/**/}
      </div>
      <div className="flex w-full flex-wrap md:gap-8 justify-center items-center mt-10">
        {team?.members.map((item, index) => (
          <Card
            className="w-1/2 md:w-1/4 py-12 rounded-md"
            url={item.photo.url}
            name={item.name}
            designation={item.designation}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Team;
