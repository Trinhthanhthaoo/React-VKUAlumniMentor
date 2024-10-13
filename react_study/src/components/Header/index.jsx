import React from 'react';
// import Content from "../Content";
import "./Header.css";
import logo from '../../img/logo.png';

const Header = () => {
  return (
    <header> 
    <div class="container">
        <div class="logo">
            <img src={logo}  alt="logo" />
        </div>
        <nav class="nav-menu">
            <ul class="menu-list">
                <li><a href="/index.html">Trang chủ</a></li>
                <li class="dropdown">
                    <a href="/Blog.html">Hoạt động</a>
                    {/* <!-- <ul class="dropdown-content">
                        <li><a href="#nhatky">Nhật ký cá nhân</a></li>
                        <li><a href="#cauchuyen">Câu chuyện thanh niên Việt Nam</a></li>
                     
                    </ul> --> */}
                </li>
                <li class="dropdown">
                    <a href="#project1">Dự án</a>
                   
                </li>
                <li class="dropdown">
                  <a href="#diary">Nhật ký</a>
                 
              </li>
                <li><a href="/About.html">Về tôi</a></li>
            </ul>
        </nav>
        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</header>
  );
};

export default Header;
