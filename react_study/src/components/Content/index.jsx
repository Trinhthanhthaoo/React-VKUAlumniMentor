import React, { useState, useEffect } from 'react';
import './Content.css'; 
import TP1 from '../../img/TP1.jpg';
import VKU1 from '../../img/VKU1.jpg';
import VKU from '../../img/VKU.jpg';

const Content = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [TP1, VKU1, VKU];

    const plusSlides = (n) => {
        setCurrentSlide((prev) => {
            const newSlide = prev + n;
            if (newSlide < 0) return slides.length - 1; // Loop back to the last slide
            if (newSlide >= slides.length) return 0; // Loop back to the first slide
            return newSlide;
        });
    };

    // Automatic slide transition
    useEffect(() => {
        const interval = setInterval(() => {
            plusSlides(1);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="slider-container">
            {slides.map((slide, index) => (
                <div className={`mySlides fade ${index === currentSlide ? 'active' : ''}`} key={index}>
                    <img src={slide} alt={`Slide ${index + 1}`} className="slider-image" />
                </div>
            ))}
            {/* Navigation Buttons */}
            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
    );
};

export default Content;
