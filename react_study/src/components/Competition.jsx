import React from "react";
import "./Competition.css"; // Note: The extension is usually .css for CSS files.
import Header from './Header';
import Footer from './Footer';

import { Helmet } from "react-helmet";

// DocumentCard Component
const CompetitionCard = () => {
  return (
    
    <section>
    <div className="container">
      {[ // Using an array to map through the card data
        {
          imgSrc: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "trust & co.",
          description: "Fill out the form and the algorithm will offer the right team of experts",
          tags: ["branding", "packaging"],
        },
        {
          imgSrc: "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "tonic",
          description: "Fill out the form and the algorithm will offer the right team of experts",
          tags: ["branding", "marketing"],
        },
        {
          imgSrc: "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "shower gel",
          description: "Fill out the form and the algorithm will offer the right team of experts",
          tags: ["branding", "packaging", "marketing"],
        },
      ].map((card, index) => (
        <div className="card" key={index}>
          <div className="card-inner" style={{ "--clr": "#fff" }}>
            <div className="box">
              <div className="imgBox">
                <img src={card.imgSrc} alt={card.title} />
              </div>
              <div className="icon">
                <a href="#" className="iconBox">
                  <span className="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <ul>
              {card.tags.map((tag, tagIndex) => (
                <li key={tagIndex} style={{ "--clr-tag": tag === "branding" ? "#d3b19a" : tag === "packaging" ? "#70b3b1" : "#d05fa2" }} className={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

function Competition() {
  return (
    <div className="Competition">
        <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </Helmet>
      <Header />
      <CompetitionCard />
      <Footer />
    </div>
  );
}

export default Competition;
