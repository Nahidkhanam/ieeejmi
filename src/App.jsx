import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Blogs from "./views/Blogs";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
