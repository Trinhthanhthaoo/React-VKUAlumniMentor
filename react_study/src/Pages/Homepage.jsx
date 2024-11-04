import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import News from "../components/News";
import Mentor from "../components/Mentor";
import Course from "../components/course";

function Homepage() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Content />
      {/* <News/> */}
      <Mentor />
      <Course />

      <Footer />

    </div>
  );
}

export default Homepage;
