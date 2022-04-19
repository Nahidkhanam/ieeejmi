import React, { Suspense, useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import "react-loading-skeleton/dist/skeleton.css";

const Home = React.lazy(() => import("./views/Home"));
import Blogs from "./views/Blogs";
import Layout from "./components/Layout";
import Events from "./views/Events/events";
import Teams from "./views/Teams";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-0">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/events" element={<Events />} />
              <Route path="/team" element={<Teams />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
