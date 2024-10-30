import React from 'react';
import "./Header.css";
import logo from '../../img/logo.png';

const Header = () => {
  return (
    <>
      {/* header  */}
      <div id="header" data-header>
        <div className="navbar">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          <ul className="links">
            <li><a href="/">Trang chủ</a></li>
            <li><a href="#">Đăng ký Mentor</a></li>
            <li><a href="/">Tìm kiếm Mentor</a></li>
            <li><a href="/PublicVKU.html">Cộng đồng</a></li>
            <li><a href="/HopTac.html">Hợp tác</a></li>
            <li><a href="/DanhGia.html">Đánh giá</a></li>
            <li><a href="/LienHe.html">Về chúng tớ</a></li>
          </ul>
          <a className="action_btn" href="/Login.html">BẮT ĐẦU</a>
          <div className="toggle_btn">
            <i className="fa-solid fa-bars"></i>
          </div>

          {/* Dropnav */}
          <div className="dropdown_menu">
            <ul>
              <li><a href="/">Trang chủ</a></li>
              <li><a href="#">Đăng ký Mentor</a></li>
              <li><a href="/">Tìm kiếm Mentor</a></li>
              <li><a href="/PublicVKU.html">Cộng đồng</a></li>
              <li><a href="/HopTac.html">Hợp tác</a></li>
              <li><a href="/DanhGia.html">Đánh giá</a></li>
              <li><a href="/LienHe.html">Về chúng tớ</a></li>
              <li><a className="action_btn2" href="/Login.html">BẮT ĐẦU</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* end header  */}
    </>
  );
};

export default Header;
