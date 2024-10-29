import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import News from "./News";
import Mentor from "./Mentor";
import Course from "./course";

function Homepage() {
  return (
    <div className="App">
      {/* Header */}
      <Header /> 
      <Content/>
      {/* <News/> */}
      <Mentor/>
      <Course/>
      
      <Footer/>
 
    </div>
  );
}

export default Homepage;
