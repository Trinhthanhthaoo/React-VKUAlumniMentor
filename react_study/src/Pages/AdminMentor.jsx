import React from 'react'
import './AdminTaiLieu.css'
import daiDien from '../img/NQK-Bg.jpg';
import { Link } from 'react-router-dom';
const AdminMentor = () => {
    return (
        <div><div>
            <input type="checkbox" id="menu-toggle" />
            <div className="sidebar">
                <div className="side-header">
                    <h3>VKU<span> Mentor</span></h3>
                </div>
                <div className="side-content">
                    <div className="profile">
                        <div className="profile-img bg-img" style={{ backgroundImage: `url(${daiDien})` }} />
                        <h4>Nguyễn Quang Kính</h4>
                    </div>
                    <div className="side-menu">
                        <ul>
                            <li>
                                <Link to="/AdminMentor" className="active">
                                    <span className="las la-user-alt" />
                                    <small>Mentor</small>
                                </Link>
                            </li>
                            {/* <li>
          <a href="/admin_mentee.html">
            <span class="las la-user-alt"></span>
            <small>Mentee</small>
          </a>
        </li> */}
                            <li>
                                <Link to="/AdminTaiLieu">
                                    <span className="las la-clipboard-list" />
                                    <small>Tài liệu</small>
                                </Link>
                            </li>
                            <li>
                                <Link to="/AdminCuocThi">
                                    <span className="las la-trophy" />
                                    <small>Cuộc thi</small>
                                </Link>
                            </li>
                            <li>
                                <Link to="/AdminDanhGia">
                                    <span className="las la-comment-alt" />
                                    <small>Đánh giá</small>
                                </Link>
                            </li>
                            <li>
                                <Link to="/AdminHopTac">
                                    <span className="las la-handshake" />
                                    <small>Đối tác</small>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className='header__navbar'>
                    <div className="header-content">
                        <label htmlFor="menu-toggle">
                            <span className="las la-bars" />
                        </label>
                        <div className="header-menu">
                            <div className="notify-icon">
                                <span className="las la-bell" />
                                <span className="notify">3</span>
                            </div>
                            <div className="user">
                                <div className="bg-img" style={{ backgroundImage: 'url(assets/img/NQK-Bg.jpg)' }} />
                                <span className="las la-power-off" />
                                <span>Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
                <main>
                    <div className="page-header">
                        <h1>Mentor</h1>
                    </div>
                    <div className="page-content">
                        {/* <div class="analytics">
        <div class="card">
          <div class="card-head">
            <h2>107,200</h2>
            <span class="las la-user-friends"></span>
          </div>
          <div class="card-progress">
            <small>User activity this month</small>
            <div class="card-indicator">
              <div class="indicator one" style="width: 60%"></div>
            </div>
          </div>
        </div>
  
        <div class="card">
          <div class="card-head">
            <h2>340,230</h2>
            <span class="las la-eye"></span>
          </div>
          <div class="card-progress">
            <small>Page views</small>
            <div class="card-indicator">
              <div class="indicator two" style="width: 80%"></div>
            </div>
          </div>
        </div>
  
        <div class="card">
          <div class="card-head">
            <h2>$653,200</h2>
            <span class="las la-shopping-cart"></span>
          </div>
          <div class="card-progress">
            <small>Monthly revenue growth</small>
            <div class="card-indicator">
              <div class="indicator three" style="width: 65%"></div>
            </div>
          </div>
        </div>
  
            <div class="card">
          <div class="card-head">
            <h2>47,500</h2>
            <span class="las la-envelope"></span>
          </div>
          <div class="card-progress">
            <small>New E-mails received</small>
            <div class="card-indicator">
              <div class="indicator four" style="width: 90%"></div>
            </div>
          </div>
        </div> 
      </div> */}
                        <div className="records table-responsive">
                            <div className="record-header">
                                <div className="browse">
                                    <input type="search" placeholder="ID Mentor" className="record-search" />
                                    <input type="search" placeholder="Tên Mentor" className="record-search" />
                                    <input className="timkiem" type="button" defaultValue="Tìm kiếm" />
                                </div>
                            </div>
                            <div>
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>ID Người Dùng</th>
                                            <th>Họ và tên</th>
                                            <th>Chuyên Môn</th>
                                            <th>Tổ Chức</th>
                                            <th>Thành Tựu</th>
                                            <th>Khoa</th>
                                            <th>Ngành</th>
                                            <th>Môn</th>
                                            <th>TRẠNG THÁI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div className="client">
                                                    <div className="client-info">
                                                        <h4>1</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Nguyễn Quang Kính</td>
                                            <td>Lập trình java</td>
                                            <td>Sinh viên trường Đại học Việt-Hàn</td>
                                            <td>3.7/4.0 GPA</td>
                                            <td>Khoa học máy tính</td>
                                            <td>Công nghệ thông tin</td>
                                            <td>Lập trình hướng đối tượng</td>
                                            <td>
                                                <div className="actions">
                                                    <span>
                                                        <button className="buttonBox">
                                                            <i className="las la-check" />
                                                        </button>
                                                    </span>
                                                    <span>
                                                        <button className="buttonBox wrong">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <div className="client">
                                                    <div className="client-info">
                                                        <h4>2</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Phạm Quốc Việt</td>
                                            <td>Thiết kế web</td>
                                            <td>Sinh viên trường Đại học Việt-Hàn</td>
                                            <td>3.8/4.0 GPA</td>
                                            <td>Khoa học máy tính</td>
                                            <td>Công nghệ thông tin</td>
                                            <td>Thiết kế web</td>
                                            <td>
                                                <div className="actions">
                                                    <span>
                                                        <button className="buttonBox">
                                                            <i className="las la-check" />
                                                        </button>
                                                    </span>
                                                    <span>
                                                        <button className="buttonBox wrong">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>
                                                <div className="client">
                                                    <div className="client-info">
                                                        <h4>3</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Trịnh Thị Thanh Thảo</td>
                                            <td>Cấu trúc dữ liệu và giải thuật</td>
                                            <td>Sinh viên trường Đại học Việt-Hàn</td>
                                            <td>3.7/4.0 GPA</td>
                                            <td>Khoa học máy tính</td>
                                            <td>Công nghệ thông tin</td>
                                            <td>Cấu trúc dữ liệu và giải thuật</td>
                                            <td>
                                                <div className="actions">
                                                    <span>
                                                        <button className="buttonBox">
                                                            <i className="las la-check" />
                                                        </button>
                                                    </span>
                                                    <span>
                                                        <button className="buttonBox wrong">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>
                                                <div className="client">
                                                    <div className="client-info">
                                                        <h4>4</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Huỳnh Đức Nhật</td>
                                            <td>Giải tích</td>
                                            <td>Sinh viên trường Đại học Việt-Hàn</td>
                                            <td>3.9/4.0 GPA</td>
                                            <td>Khoa học máy tính</td>
                                            <td>Công nghệ thông tin</td>
                                            <td>Giải tích</td>
                                            <td>
                                                <div className="actions">
                                                    <span>
                                                        <button className="buttonBox">
                                                            <i className="las la-check" />
                                                        </button>
                                                    </span>
                                                    <span>
                                                        <button className="buttonBox wrong">
                                                            <i className="las la-times" />
                                                        </button>
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </div>
    )
}

export default AdminMentor