import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Login from "./components/Login";
import News from "./components/News";
function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* <Content/> */}
      <News/>
      <Footer/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
