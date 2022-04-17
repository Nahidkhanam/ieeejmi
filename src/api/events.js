import { gql } from "@apollo/client";
import dayjs from "dayjs";

export const GET_PAST_EVENTS = gql`
  query {
    event(where: { date_lt: "${dayjs().format("YYYY-MM-DD")}" }) {
      id
      title
      excerpt
      link
      date
      coverPhoto {
        url
      }
    }
  }
`;

export const GET_UPCOMING_EVENTS = gql`
  query {
    event(where: { date_gt: "${dayjs().format("YYYY-MM-DD")}" }) {
      id
      title
      date
      excerpt
      link
      coverPhoto {
        url
      }
    }
  }
`;
