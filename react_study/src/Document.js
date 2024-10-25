import React from "react";
import "./Document.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// DocumentCard Component
const DocumentCard = () => {
  return (
    <main>
      {/* Search bar container */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a document..."
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>

      {/* Cards container */}
      <div className="card-container">
        <div className="card">
          <img
            src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
            alt="Delicious Food"
          />
          <div className="card-content">
            <h2>Gourmet Burger</h2>
            <p>
              Experience the taste of gourmet burgers with this simple yet
              delicious recipe.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
            alt="Tasty Pasta"
          />
          <div className="card-content">
            <h2>Italian Pasta</h2>
            <p>
              Indulge in a classic Italian pasta dish, perfect for any occasion.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
            alt="Healthy Salad"
          />
          <div className="card-content">
            <h2>Healthy Salad</h2>
            <p>
              Stay healthy and fit with this fresh and nutritious salad recipe.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

function Document() {
  return (
    <div className="Document">
      <Header />
      <DocumentCard />
      <Footer />
    </div>
  );
}

export default Document;
