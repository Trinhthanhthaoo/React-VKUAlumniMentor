import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import logo from '../../img/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="VKU MENTOR" />
                    <h1>VKU MENTOR</h1>
                </div>
                <div className="quick-links">
                    <h2>ĐƯỜNG DẪN NHANH</h2>
                    <ul>
                        <li><a href="#">Trang Chủ</a></li>
                        <li><a href="#">Đăng Ký Mentor</a></li>
                        <li><a href="#">Cộng Đồng</a></li>
                        <li><a href="#">Liên Hệ Hợp Tác</a></li>
                        <li><a href="#">Góp Ý Phản Hồi</a></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <h2>LIÊN HỆ</h2>
                    <p>VKU MENTOR</p>
                    <p>Địa Điểm: 470 Trần Đại Nghĩa, Hòa Quý, Ngũ Hành Sơn, Đà Nẵng</p>
                    <p>Số Điện Thoại: (+84) 012345678</p>
                    <p>Email: <a href="mailto:vku.mentor@gmail.com">vku.mentor@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 VKU MENTOR ĐƯỢC XÂY DỰNG VÀ PHÁT TRIỂN BỞI KÍNH, THẢO, VIỆT, NHẬT</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-messenger"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
