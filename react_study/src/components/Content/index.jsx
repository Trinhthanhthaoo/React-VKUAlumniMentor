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
        <>
            {/* Slider Section */}
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

            {/* Intro Section */}
            <section className="intro-section">
                <div className="intro-grid">
                    <div className="intro-item">
                        <i className="fas fa-graduation-cap"></i>
                        <p>Hoạt động thanh niên sôi nổi</p>
                    </div>
                    <div className="intro-item">
                        <i className="fas fa-briefcase"></i>
                        <p>Dự án sáng tạo, tỏa sáng thanh xuân</p>
                    </div>
                    <div className="intro-item">
                        <i className="fas fa-calendar-alt"></i>
                        <p>Thành tựu và giải thưởng ấn tượng</p>
                    </div>
                    <div className="intro-item">
                        <i className="fas fa-book"></i>
                        <p>Blog chia sẻ - Góc nhìn mới, tư duy mới</p>
                    </div>
                    <div className="intro-item">
                        <i className="fas fa-desktop"></i>
                        <p>Giao lưu - Kết nối và chia sẻ cảm hứng</p>
                    </div>
                    <div className="intro-item">
                        <i className="fas fa-users"></i>
                        <p>Lưu giữ khoảnh khắc thanh xuân</p>
                    </div>
                    <div className="intro-item">
                        <i className="fas fa-file-alt"></i>
                        <p>Đề xuất hoạt động - Nâng tầm ảnh hưởng</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="content"> 
                <div className="sub-content">
                    <div className="content-blog">
                        <h3 className="highlight-title"><b>Vài nét chính Nhật ký thanh niên</b></h3>
                        <p>
                            Nhật ký thanh niên là nơi lưu giữ những khoảnh khắc đáng nhớ, những cảm xúc chân thật và những trải nghiệm tuyệt vời tại trường Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (VKU). 
                            Từ những ngày đầu bước chân vào cánh cổng đại học, chúng tôi đã trải qua bao thăng trầm, từ những hoạt động đoàn hội sôi nổi, những buổi sinh hoạt đầy ý nghĩa, cho đến những giờ học căng thẳng nhưng không kém phần thú vị. 
                            <br /><br />
                            Đặc biệt, trong môi trường này, không chỉ kiến thức mà còn là những bài học về tinh thần đoàn kết, lòng nhân ái, và trách nhiệm đối với cộng đồng đã thấm sâu vào mỗi sinh viên. Cuốn nhật ký này không chỉ đơn giản là ghi lại hành trình trưởng thành, mà còn là một cách để nhắc nhở chúng ta về ý nghĩa của tuổi trẻ - khoảng thời gian tươi đẹp nhưng ngắn ngủi, nơi mà chúng ta đã từng cống hiến và sống hết mình. Hành trình này còn gắn liền với ký ức tuổi trẻ tại quê nhà xã Bình Lâm, một nơi bình dị mà tôi luôn tự hào.
                        </p>
                        <a href="#activity" className="btn-read-more">Các trải nghiệm của tôi <big><b>↓</b></big></a>
                    </div>
                    <div className="content-img">
                        <img src={VKU} alt="Hình ảnh về VKU" />
                    </div>
                </div>
            </div>

            {/* Activity Section */}
            <div className="wrap" id="activity">
                <div className="article">
                    <div className="overlay"></div>
                    <div className="wrap-cat">
                        <span className="cat" data-hover="My team BWD-VKU2024">My team BWD-VKU2024</span>
                    </div>
                    <h1>
                        <span>Đội thi VKUMentor</span>
                    </h1>
                </div>
                <div className="article">
                    <div className="overlay"></div>
                    <div className="wrap-cat">
                        <span className="cat" data-hover="Khai giảng tại VKU 2023">Khai giảng tại VKU 2023</span>
                    </div>
                    <h1>
                        <span>Môi trường mới, bạn bè mới & khởi đầu mới</span>
                    </h1>
                </div>
                <div className="article">
                    <div className="overlay"></div>
                    <div className="wrap-cat">
                        <span className="cat" data-hover="Quân sự K11">Quân sự K11</span>
                    </div>
                    <h1>
                        <span>Học tập và rèn luyện trở thành một bồ đội cụ Hồ.</span>
                    </h1>
                </div>
                <div className="article">
                    <div className="overlay"></div>
                    <div className="wrap-cat">
                        <span className="cat" data-hover="Trại 2024 Khóa 23 VKU">Trại 2024 Khóa 23 VKU</span>
                    </div>
                    <h1>
                        <span>Trải nghiệm nhiều niềm vui với những người bạn</span>
                    </h1>
                </div>
                <div className="article">
                    <div className="overlay"></div>
                    <div className="wrap-cat">
                        <span className="cat" data-hover="Xin chào 23IT2">Xin chào 23IT2</span>
                    </div>
                    <h1>
                        <span>Lớp tôi 23IT2</span>
                    </h1>
                </div>
                <div className="article">
                    <div className="overlay"></div>
                    <div className="wrap-cat">
                        <span className="cat" data-hover="Bợ giải BWD 2024">Bợ giải BWD 2024</span>
                    </div>
                    <h1>
                        <span>Giải 3 cuộc thi thiết kế web, giải nhất phần thi truyền thông web</span>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Content;
