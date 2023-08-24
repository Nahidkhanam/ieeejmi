import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://ap-northeast-1.cdn.hygraph.com/content/ckwalwekx2ch201xpcd469y3d/master",
  cache: new InMemoryCache(),
});
