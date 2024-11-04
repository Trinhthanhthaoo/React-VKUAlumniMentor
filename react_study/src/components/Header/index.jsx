import React from 'react';
import "./Header.css";
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const toggleBtn = document.querySelector('.toggle_btn')
  const toggleBtnIcon = document.querySelector('.icon')
  const dropMenu = document.querySelector('.dropdown_menu')
  toggleBtn.onclick = function () {
    dropMenu.classList.toggle('open')
    const isOpen = dropMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
      ? '<FontAwesomeIcon icon={faX} />'
      : '<FontAwesomeIcon icon={faBars} />'
  }

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
            <li><Link to={"/"} href="/">Trang chủ</Link></li>
            <li><Link to={"/RegisterMentor"} href="#">Đăng ký Mentor</Link></li>
            <li><Link to={"/Document"} href="/PublicVKU.html">Cộng đồng</Link></li>
            <li><Link to={"/src/Pages"} href="/HopTac.html">Hợp tác</Link></li>
            <li><Link to={"/src/Pages"} href="/DanhGia.html">Đánh giá</Link></li>
            <li><Link to={"/src/Pages"} href="/LienHe.html">Về chúng tớ</Link></li>
          </ul>
          <a className="action_btn" href="/Login.html">BẮT ĐẦU</a>
          <div className="toggle_btn">
            <div className='icon'> <FontAwesomeIcon icon={faBars} /> </div>
          </div>

          {/* Dropnav */}
          <div className="dropdown_menu">
            <ul>
              <li><Link to={"/"} href="/">Trang chủ</Link></li>
              <li><Link to={"/RegisterMentor"} href="#">Đăng ký Mentor</Link></li>
              <li><Link to={"/Document"} href="/PublicVKU.html">Cộng đồng</Link></li>
              <li><Link to={"/src/Pages"} href="/HopTac.html">Hợp tác</Link></li>
              <li><Link to={"/src/Pages"} href="/DanhGia.html">Đánh giá</Link></li>
              <li><Link to={"/src/Pages"} href="/LienHe.html">Về chúng tớ</Link></li>
              <li><a className="action_btn2" href="/Login.html">BẮT ĐẦU</a></li>
            </ul>
          </div>
        </div>
      </div >
      {/* end header  */}
    </>
  );
};

export default Header;
