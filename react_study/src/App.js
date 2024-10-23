import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import News from "./components/News";
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header /> 
      <Content/>
      {/* <News/> */}
      <Footer/>
    </div>
  );
}

export default App;
