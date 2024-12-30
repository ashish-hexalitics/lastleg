import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import ClickEffect from "./components/ClickEffect";

const App = () => {
  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ClickEffect />
        <div className="flex h-screen">
          <Navbar />
          <div className="flex w-full">
            <Sidebar />
            <div className="ms-16">
              <Routes>
                <Route path="/" element={<Layout />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
