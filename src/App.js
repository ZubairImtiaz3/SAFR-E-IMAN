import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import "./App.css";

// Components
import Infobar from "./Components/Infobar";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Infosection from "./Components/Infosection";
import Footer from "./Components/Footer";
import Umarah from "./Components/Umarah";
import Visa from "./Components/Visa";
import Contact from "./Components/Contact";
import Iframe from "./Components/Iframe";
import logoLoader from "../src/assets/logo2.svg";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);

    setTimeout(() => {
      setloading(false);
    }, 2500);
  }, []);

  //scroll to  top on link
  const linkScroll = () => {
    window.scroll(0, 0);
  };

  return (
    <>
      <div className="App">
        {loading ? (
          <div className="loader">
            <div className="loaderContent relative -top-16 sm:static">
              <img
                className="w-[290px] sm:w-auto sm:relative sm:left-[-7%]"
                src={logoLoader}
                alt="loader"
              />
              <PropagateLoader color="#ceb041" />
            </div>
          </div>
        ) : (
          <Router>
            <Infobar />
            <Navbar linkScroll={linkScroll} />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <div>
                    <Hero /> <Infosection linkScroll={linkScroll} />
                  </div>
                }
              ></Route>
              <Route
                exact
                path="/umarah"
                element={
                  <div>
                    <Umarah linkScroll={linkScroll} />
                    <Visa />
                  </div>
                }
              ></Route>
              <Route
                exact
                path="/contact"
                element={
                  <div>
                    <Contact linkScroll={linkScroll} />
                    <Iframe />
                  </div>
                }
              ></Route>
            </Routes>
            <Footer linkScroll={linkScroll} />
          </Router>
        )}
      </div>
    </>
  );
}
export default App;
