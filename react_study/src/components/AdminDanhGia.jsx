import React from 'react'
import './AdminTaiLieu.css'
import daiDien from '../img/NQK-Bg.jpg';
import { Link } from 'react-router-dom';

const AdminDanhGia = () => {
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
                                <Link to="/AdminCuocThi" >
                                    <span className="las la-trophy" />
                                    <small>Cuộc thi</small>
                                </Link>
                            </li>
                            <li>
                                <Link to="/AdminDanhGia" className="active">
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
                <header>
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
                </header>
                <main>
                    <div className="page-header">
                        <h1>Đánh giá của Mentee</h1>
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
                                            <th>ID Mentee</th>
                                            <th>ID Mentor</th>
                                            <th>ĐIỂM</th>
                                            <th>BÌNH LUẬN</th>
                                            <th>NGÀY ĐÁNH GIÁ</th>
                                            <th>TRẠNG THÁI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <div className="client">
                                                    <div className="client-info">
                                                        <h4>132</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>
                                                Mentor rất nhiệt tình và luôn sẵn sàng hỗ trợ tôi khi cần.
                                                Tôi đã học được rất nhiều điều bổ ích.
                                            </td>
                                            <td>8 November, 2024</td>
                                            <td>
                                                <div className="actions">
                                                    <span>
                                                        <button className="buttonBox">
                                                            <i className="las la-wrench" />
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
                                            <td>21</td>
                                            <td>
                                                <div className="client">
                                                    <div className="client-info">
                                                        <h4>67</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>9</td>
                                            <td>
                                                Dịch vụ mentor thật sự giúp tôi tự tin hơn trong công
                                                việc. Cảm ơn sự hướng dẫn tận tâm từ mentor.
                                            </td>
                                            <td>28 May, 2024</td>
                                            <td>
                                                <div className="actions">
                                                    <span>
                                                        <button className="buttonBox">
                                                            <i className="las la-wrench" />
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
                                                        <h4>14</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>8</td>
                                            <td>
                                                Mentor có kiến thức sâu rộng và luôn đưa ra những lời
                                                khuyên thực tế. Tôi cảm thấy mình đã phát triển rất nhiều.
                                            </td>
                                            <td>19 May, 2024</td>
                                            <td>
                                                <div className="actions">
                                                    <span>
                                                        <button className="buttonBox">
                                                            <i className="las la-wrench" />
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
                                            <td>44</td>
                                            <td>
                                                <div className="client">
                                                    <div className="client-info">
                                                        <h4>1</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>9</td>
                                            <td>
                                                Tôi rất ấn tượng với sự kiên nhẫn và chuyên nghiệp của
                                                mentor. Dịch vụ đáng giá từng đồng!
                                            </td>
                                            <td>1 April, 2024</td>
                                            <td>
                                                <div className="actions">
                                                    <span>
                                                        <button className="buttonBox">
                                                            <i className="las la-wrench" />
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
                                            <td>55</td>
                                            <td>
                                                <div className="client">
                                                    <div className="client-info">
                                                        <h4>22</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>
                                                Mentor đã giúp tôi nhìn nhận vấn đề từ nhiều góc độ khác
                                                nhau. Cảm ơn mentor vì đã truyền cảm hứng cho tôi.
                                            </td>
                                            <td>17 May, 2024</td>
                                            <td>
                                                <div className="actions">
                                                    <span>
                                                        <button className="buttonBox">
                                                            <i className="las la-wrench" />
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
                                                        <h4>99</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>8</td>
                                            <td>
                                                Rất hài lòng với dịch vụ mentor. Mentor luôn tạo động lực
                                                và đưa ra những gợi ý cụ thể giúp tôi cải thiện kỹ năng.
                                            </td>
                                            <td>2 May, 2024</td>
                                            <td>
                                                <div className="actions">
                                                    <span>
                                                        <button className="buttonBox">
                                                            <i className="las la-wrench" />
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
                                                        <h4>24</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>
                                                Sự hỗ trợ từ mentor thật tuyệt vời. Tôi đã có thêm nhiều ý
                                                tưởng mới và cách tiếp cận công việc hiệu quả hơn.
                                            </td>
                                            <td>9 April, 2024</td>
                                            <td>
                                                <div className="actions">
                                                    <span>
                                                        <button className="buttonBox">
                                                            <i className="las la-wrench" />
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
                                                        <h4>1</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>10</td>
                                            <td>
                                                "Mentor rất am hiểu lĩnh vực mà tôi đang theo đuổi và luôn
                                                đưa ra những hướng dẫn cụ thể, giúp tôi tiến bộ rõ rệt.
                                            </td>
                                            <td>25 May, 2024</td>
                                            <td>
                                                <div className="actions">
                                                    <span>
                                                        <button className="buttonBox">
                                                            <i className="las la-wrench" />
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

export default AdminDanhGia