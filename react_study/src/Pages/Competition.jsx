import React from "react";
import "./Competition.css"; // Note: Ensure the CSS file is correctly linked.
import Header from '../components/Header';
import Footer from '../components/Footer';
import TP1 from '../img/TP1.jpg';
import VKU1 from '../img/VKU1.jpg';
import VKU from '../img/VKU.jpg';
const competitionData = [
  {
    id: 1,
    title: "Tiêu đề 1",
    description: "Miêu tả 1",
    author: "Tác giả 1",
    startDate: "01/01/2024",
    endDate: "01/31/2024",
    image: TP1, // Replace with actual image URLs
  },
  {
    id: 2,
    title: "Tiêu đề 2",
    description: "Miêu tả 2",
    author: "Tác giả 2",
    startDate: "02/01/2024",
    endDate: "02/28/2024",
    image: VKU1, // Replace with actual image URLs
  },
  {
    id: 3,
    title: "Tiêu đề 3",
    description: "Miêu tả 3",
    author: "Tác giả 3",
    startDate: "03/01/2024",
    endDate: "03/31/2024",
    image: VKU, // Replace with actual image URLs
  },
  {
    id: 4,
    title: "Tiêu đề 3",
    description: "Miêu tả 3",
    author: "Tác giả 3",
    startDate: "03/01/2024",
    endDate: "03/31/2024",
    image: VKU, // Replace with actual image URLs
  },
  {
    id: 3,
    title: "Tiêu đề 3",
    description: "Miêu tả 3",
    author: "Tác giả 3",
    startDate: "03/01/2024",
    endDate: "03/31/2024",
    image: VKU, // Replace with actual image URLs
  },
];

// CompetitionCard Component
const CompetitionCard = ({ competition }) => {
  return (
    <div className="Sub-Card" key={competition.id}>
      <img src={competition.image} alt={competition.title} />
      <h4>{competition.title}</h4>
      <p>{competition.description}</p>
      <h5>Tên tác giả: {competition.author}</h5>
      <h5>Ngày bắt đầu: {competition.startDate}</h5>
      <h5>Ngày kết thúc: {competition.endDate}</h5>
      <button>Tham gia</button>
    </div>
  );
};

function Competition() {
  return (
    <div className="Competition">
      <Header />
      <div className="CardWrapper">
        {competitionData.map((competition) => (
          <CompetitionCard key={competition.id} competition={competition} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Competition;
