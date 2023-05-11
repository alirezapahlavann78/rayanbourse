import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import Grid from "./pages/Grid/Grid";
import Drop from "./pages/Drop/Drop";
import Page404 from "./pages/404/404";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route index element={<Home />} />
        <Route path="grid" element={<Grid />} />
        <Route path="drop" element={<Drop />} />
      </Routes>
    </Layout>
  );
}

export default App;
