import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_EXECOMM_TEAM } from "../../api/teams";
import Loading from "../Loading";
import Card from "./Card";
import TeamLoading from "./TeamLoading";

function Execomm() {
  const Order = [
    "Faculty Advisor",
    "Chairperson",
    "Vice Chairperson",
    "General Secretary",
    "Chairperson IEEE CS",
    "Vice Chairperson IEEE CS",
    "Chairperson IEEE WIE",
    "Vice Chairperson IEEE WIE",
    "Chairperson IEEE PELS",
    "Vice Chairperson IEEE PELS",
    "Chairperson IEEE PES",
    "Vice Chairperson IEEE PES",
    "Chairperson IEEE CAS",
    "Vice Chairperson IEEE CAS",
    "Chairperson IEEE IAS",
    "Vice Chairperson IEEE IAS",
  ];
  const { loading, error, data } = useQuery(GET_EXECOMM_TEAM);
  const [Teams, setTeams] = useState([]);

  useEffect(() => {
    if (Array.isArray(data?.teams)) {
      const temp = data?.teams.slice().sort((a, b) => {
        //console.log(Order.indexOf(a.designation), Order.indexOf(b.designation));
        return Order.indexOf(a.designation) - Order.indexOf(b.designation);
      });
      const grouped = temp.reduce((acc, person) => {
        // Find if the designation already exists in the accumulator
        const existingGroup = acc.find(group => group[0].designation === person.designation);
      
        // If group exists, push the person into that group, else create a new group
        if (existingGroup) {
          existingGroup.push(person);
        } else {
          acc.push([person]);
        }
      
        return acc;
      }, []);
      console.log(grouped);
      setTeams(grouped);
    }
  }, [data]);

  if (loading || Teams === null || Teams.length === 0)
    return (
      <div className="flex justify-center items-center flex-wrap gap-y-16 mt-20">
        <TeamLoading count={10} className="w-1/2 md:w-1/3" />
      </div>
    );
  if (error) return <p>Error :(</p>;

  return (
    <div className="flex justify-center items-center flex-wrap gap-y-16 mt-20">
      {Teams?.map((team,i) => (
        <div className="flex flex-row w-full justify-center">
        {team?.map((item, index) => (
        <Card
          className="w-1/2 md:w-1/3"
          url={item.photo.url}
          name={item.name}
          designation={item.designation}
        />
      ))}
      </div>))}
    </div>
  );
}

export default Execomm;
