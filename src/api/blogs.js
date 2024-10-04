import { gql } from "@apollo/client";

export const GET_ALL_BLOGS = gql`
  query {
    blogs {
      title
      summary
      id
      img {
        url
      }
      author
      slug
    }
  }
`;

export const GET_BLOG = (slug) => gql`
query {
    blog(where: {slug: "${slug}"}) {
      title
      author 
      content {
          markdown
      }
      img {
        url
      }
      publishedAt
    }
  }`;
