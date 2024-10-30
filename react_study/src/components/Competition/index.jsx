import React from 'react';
import "./competition.css";

const CompetitionCard = () => {
  return (
    <section>
      <h2>leading companies<br />have trusted us</h2>
      <div className="container">
        <div className="card">
          <div className="card-inner" style={{ "--clr": "#fff" }}>
            <div className="box">
              <div className="imgBox">
                <img src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Trust & Co." />
              </div>
              <div className="icon">
                <a href="#" className="iconBox"> 
                  <span className="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <h3>trust &amp; co.</h3>
            <p>Fill out the form and the algorithm will offer the right team of experts</p>
            <ul>
              <li style={{ "--clr-tag": "#d3b19a" }} className="branding">branding</li>
              <li style={{ "--clr-tag": "#70b3b1" }} className="packaging">packaging</li>
            </ul>
          </div>
        </div>
        {/* Repeat the card structure for "tonic" and "shower gel" with className changes */}
      </div>
    </section>
  );
};

export default CompetitionCard;
