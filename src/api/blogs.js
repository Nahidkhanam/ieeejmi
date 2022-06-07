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
      author {
        name
      }
      slug
    }
  }
`;

export const GET_BLOG = (slug) => gql`
query {
    blog(where: {slug: "${slug}"}) {
      title
      author {
        name
        photo {
          url(transformation: {
            image: { resize: { width: 50, height: 50, fit: clip } }
          })
        }
      }
      content {
          markdown
      }
      img {
        url
      }
      publishedAt
    }
  }`;
