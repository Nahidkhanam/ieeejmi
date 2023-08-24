import React from "react";
import ReactDOM from "react-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient";

ReactDOM.render(
  <React.StrictMode>
    {/* Hello */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
