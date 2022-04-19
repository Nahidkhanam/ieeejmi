import { gql } from "@apollo/client";

export const ALL_TEAMS = gql`
  query {
    teams {
      id
      name
      designation
      photo {
        id
        url
      }
      team
    }
  }
`;

export const GET_ALL_TEAM_NAMES = gql`
  query {
    __type(name: "Teams") {
      enumValues {
        name
      }
    }
  }
`;

export const GET_TEAM_BY_NAME = gql`
  query ($name: Teams!) {
    teams(where: { team: $name }) {
      id
      name
      designation
      photo {
        id
        url
      }
      team
    }
  }
`;

export const GET_EXECOMM_TEAM = gql`
  {
    teams(where: { team: Execomm }) {
      id
      name
      designation
      photo {
        id
        url
      }
      team
    }
  }
`;
