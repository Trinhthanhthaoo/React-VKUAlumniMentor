import React from 'react'
import './AdminTaiLieu.css'
import daiDien from '../img/NQK-Bg.jpg';
import { Link } from 'react-router-dom';

const AdminCuocThi = () => {
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
                                <Link to="/AdminMentor">
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
                                <Link to="/AdminCuocThi" className="active">
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
                                <div className="bg-img" style={{ backgroundImage: 'url(DaiDien)' }} />
                                <span className="las la-power-off" />
                                <span>Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
                <main>
                    <div className="page-header">
                        <h1>Cuộc thi</h1>
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
                                    <input type="search" placeholder="ID" className="record-search" />
                                    <select name id>
                                        <option value>Mentor</option>
                                        <option value>Mentee</option>
                                    </select>
                                    <input className="timkiem" type="button" defaultValue="Tìm kiếm" />
                                </div>
                            </div>
                            <div>
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>HỌ VÀ TÊN</th>
                                            <th>TIÊU ĐỀ</th>
                                            <th>NỘI DUNG</th>
                                            <th>NGÀY TẠO</th>
                                            <th>NGÀY KẾT THÚC</th>
                                            <th>TRẠNG THÁI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div className="client">
                                                    <div className="client-info">
                                                        <h4>Nguyễn Quang Kính</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Thử tài lập trình</td>
                                            <td>
                                                Xin chào các bạn, VKUMentor Contest sẽ diễn ra vào 20h00
                                                ngày 08/11/2024 với thời lượng kéo dài 2 giờ 30 phút.
                                            </td>
                                            <td>8 November, 2024</td>
                                            <td>8 November, 2024</td>
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
                                                        <h4>Phạm Quốc Việt</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Giao lưu thuật toán</td>
                                            <td>
                                                Xin chào các bạn, cuộc thi giao lưu thuật toán sẽ tổ chức
                                                vào 28/05/2024 với thời gian là 1h30p.
                                            </td>
                                            <td>28 May, 2024</td>
                                            <td>28 May, 2024</td>
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
                                                        <h4>Trịnh Thị Thanh Thảo</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Thỏa sức design</td>
                                            <td>
                                                Hãy tham gia cuộc thi tìm thiên tài trong làng design VKU.
                                            </td>
                                            <td>19 May, 2024</td>
                                            <td>19 June, 2024</td>
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
                                                        <h4>Huỳnh Đức Nhật</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Bảo mật chỉ là chuyện nhỏ vs NS</td>
                                            <td>
                                                Xin chào các bạn NS, Cuộc thi bảo mật an toàn thông tin sẽ
                                                giúp các bạn trao đổi kinh nghiệm với nhau nhiều hơn.
                                            </td>
                                            <td>1 April, 2024</td>
                                            <td>1 May, 2024</td>
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
                                            <td>5</td>
                                            <td>
                                                <div className="client">
                                                    <div className="client-info">
                                                        <h4>Phạm Quốc Việt</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Khởi nghiệp</td>
                                            <td>
                                                Xin Chào, Contest ý tưởng khởi nghiệp sáng tạo đang diễn
                                                ra 17/05/2024 đến 27/05/2024
                                            </td>
                                            <td>17 May, 2024</td>
                                            <td>27 May, 2024</td>
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
                                            <td>6</td>
                                            <td>
                                                <div className="client">
                                                    <div className="client-info">
                                                        <h4>Nguyễn Quang Kính</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>ETC</td>
                                            <td>
                                                Cuộc thi thuyết trình TACN đang được diễn ra từ 2/05/2024
                                                - 29/05/2024
                                            </td>
                                            <td>2 May, 2024</td>
                                            <td>29 May, 2024</td>
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
                                            <td>7</td>
                                            <td>
                                                <div className="client">
                                                    <div className="client-info">
                                                        <h4>Huỳnh Đức Nhật</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Đồ án Java đẹp</td>
                                            <td>Cuộc thi tìm kiếm đồ án đẹp nhất</td>
                                            <td>9 April, 2024</td>
                                            <td>9 May, 2024</td>
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
                                            <td>8</td>
                                            <td>
                                                <div className="client">
                                                    <div className="client-info">
                                                        <h4>Trịnh Thị Thanh Thảo</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Best Web Design</td>
                                            <td>
                                                Tham gia cuộc thi best web design bắt đầu từ 25/5/2024
                                            </td>
                                            <td>25 May, 2024</td>
                                            <td>6 September, 2024</td>
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

export default AdminCuocThi