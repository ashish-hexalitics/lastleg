import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import ClickEffect from "./components/ClickEffect";

const App = () => {
  return (
    <>
      <ClickEffect />
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col w-full">
            <Navbar />
            <div className="px-5 py-2 flex-grow">
              <Routes>
                <Route path="/" element={<Layout />} />
                {/* Define more routes as needed */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
