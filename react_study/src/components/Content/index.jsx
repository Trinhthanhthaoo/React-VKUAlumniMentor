import React, { useState, useEffect } from 'react';
import './Content.css'; 
import TP1 from '../../img/TP1.jpg';
import VKU1 from '../../img/VKU1.jpg';
import VKU from '../../img/VKU.jpg';
import Mentor from '../../img/mentor.jpg';


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
                        <h3 className="highlight-title"><b>Vài nét về website VKUAlumniMentor </b></h3>
                        <p>
                        VKU Alumni Mentor là một nền tảng chuyên biệt nhằm kết nối sinh viên với các cựu sinh viên của Trường Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn (VKU). Đây là nơi các cựu sinh viên cung cấp sự hướng dẫn và cố vấn cho sinh viên, giúp họ định hướng trong hành trình học tập và phát triển sự nghiệp. Thông qua chương trình cố vấn một kèm một, các cựu sinh viên cung cấp lời khuyên cá nhân hóa về con đường sự nghiệp, thực tập, và kỹ năng chuyên môn. Nền tảng này cũng cung cấp các tài nguyên nghề nghiệp như bảng thông tin việc làm và thực tập, hướng dẫn xây dựng CV, và luyện tập phỏng vấn, giúp sinh viên nâng cao khả năng cạnh tranh và chuẩn bị tốt hơn cho sự nghiệp tương lai.
                            <br /><br />
                            Ngoài việc cố vấn, VKU Alumni Mentor còn xây dựng một mạng lưới vững mạnh bằng cách tổ chức các sự kiện, hội thảo, và hội thảo trực tuyến do các cựu sinh viên có kinh nghiệm dẫn dắt. Những buổi này bao gồm nhiều chủ đề khác nhau như xu hướng ngành nghề, phát triển kỹ năng, và những hiểu biết thực tiễn về công việc. Nền tảng này cũng giới thiệu những câu chuyện thành công đầy cảm hứng từ các cựu sinh viên, khích lệ sinh viên hiện tại và minh họa các cơ hội đa dạng mà sinh viên tốt nghiệp VKU có thể đạt được. Thông qua những sáng kiến này, VKU Alumni Mentor củng cố cộng đồng VKU, tạo ra một môi trường hợp tác nơi sinh viên và cựu sinh viên có thể cùng nhau phát triển.</p>
                        <a href="#activity" className="btn-read-more">Các trải nghiệm của tôi <big><b>↓</b></big></a>
                    </div>
                    <div className="content-img">
                        <img src={Mentor} alt="Hình ảnh về VKU" />
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
