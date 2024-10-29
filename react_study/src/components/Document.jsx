import React from "react";
import "./Document.css";
import Header from './Header';
import Footer from './Footer';

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
            <h2>Lập trình với Python</h2>
            <p>
              Cung cấp kiến thức cơ bản và ứng dụng đa dạng của ngôn ngữ lập trình này.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                marginTop: "5px",
              }}
            >
              <a href="#">KinhNguyen <i className="fa-solid fa-user"></i></a>
              <span>05-10-2024</span>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
            alt="Tasty Pasta"
          />
          <div className="card-content">
            <h2>C++ cơ bản</h2>
            <p>
              Cung cấp hướng dẫn chi tiết về ngôn ngữ lập trình này và các nguyên tắc thiết kế phần mềm.
            </p>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
            alt="Healthy Salad"
          />
          <div className="card-content">
            <h2>Cơ sở dữ liệu</h2>
            <p>
              Hiểu và áp dụng ngôn ngữ truy vấn cơ sở dữ liệu để tương tác, truy xuất và quản lý dữ liệu hiệu quả.
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
