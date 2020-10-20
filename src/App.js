import React from "react";

import NavBar from "./components/navBar";
import Team from "./components/team";
import About from "./components/about";
import Services from "./components/services";
import Footer from "./components/footer";
import Partners from "./components/partners";
import Contact from "./components/contact";

//import $ from "jquery";
//import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="masthead">
        <div className="container"></div>
      </header>
      <Services></Services>
      <About></About>
      <Team></Team>
      <Partners></Partners>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
