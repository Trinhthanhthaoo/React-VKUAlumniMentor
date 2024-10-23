import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Nhập biểu tượng
import './mentor.css'; // Đảm bảo đường dẫn đúng

const Mentor = () => {
  const images = [
    "https://i.imgur.com/UFJQcYY.png",
    "https://i.imgur.com/UFJQcYY.png",
    "https://i.imgur.com/UFJQcYY.png",
    "https://i.imgur.com/UFJQcYY.png",
    "https://i.imgur.com/UFJQcYY.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true, // Bật nút điều hướng
    prevArrow: <button className="slick-prev"><FaChevronLeft /></button>, // Nút điều hướng trước
    nextArrow: <button className="slick-next"><FaChevronRight /></button>, // Nút điều hướng sau
  };

  return (
    <div className="slider-container">
    <div className="mentor-text">
     Mentor nổi bật <i class="fa-solid fa-arrow-right"></i>
    </div>

      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slider-item">
            <img src={src} alt={`img-${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Mentor;
