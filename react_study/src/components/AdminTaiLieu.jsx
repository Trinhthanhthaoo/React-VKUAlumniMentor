import React from 'react'
import "./AdminTaiLieu.css"
import daiDien from '../img/NQK-Bg.jpg';
import { Link } from 'react-router-dom';

const AdminTaiLieu = () => {
  return (
    <div>
      <div>
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
                  <Link to="/AdminTaiLieu" className="active">
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
              <h1>Tài liệu học tập</h1>
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
                        <th>TRẠNG THÁI</th>
                      </tr>
                    </thead>
                    <tbody id="feature_dulieu">
                      {/* <tr>
                <td>1</td>
                <td>
                  <div class="client">
                    <div class="client-info">
                      <h4>Nguyễn Quang Kính</h4>
                    </div>
                  </div>
                </td>
                <td>C++ cơ bản</td>
                <td>
                  Cung cấp hướng dẫn chi tiết về ngôn ngữ lập trình này và
                  các nguyên tắc thiết kế phần mềm.
                </td>
                <td>19 April, 2024</td>
                <td>
                  <div class="actions">
                    <span>
                      <button class="buttonBox">
                        <i class="las la-check"></i>
                      </button>
                    </span>
                    <span>
                      <button class="buttonBox wrong">
                        <i class="las la-times"></i>
                      </button>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <div class="client">
                    <div class="client-info">
                      <h4>Phạm Quốc Việt</h4>
                    </div>
                  </div>
                </td>
                <td>Lập trình với Python</td>
                <td>
                  Cung cấp kiến thức cơ bản và ứng dụng đa dạng của ngôn ngữ
                  lập trình này.
                </td>
                <td>19 January, 2024</td>
                <td>
                  <div class="actions">
                    <span>
                      <button class="buttonBox">
                        <i class="las la-check"></i>
                      </button>
                    </span>
                    <span>
                      <button class="buttonBox wrong">
                        <i class="las la-times"></i>
                      </button>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <div class="client">
                    <div class="client-info">
                      <h4>Trịnh Thị Thanh Thảo</h4>
                    </div>
                  </div>
                </td>
                <td>Kinh tế vĩ mô</td>
                <td>
                  Cung cấp cái nhìn tổng quan, đưa ra những thông tin mới và
                  sâu sắc về hệ thống kinh tế toàn cầu.
                </td>
                <td>19 May, 2024</td>
                <td>
                  <div class="actions">
                    <span>
                      <button class="buttonBox">
                        <i class="las la-check"></i>
                      </button>
                    </span>
                    <span>
                      <button class="buttonBox wrong">
                        <i class="las la-times"></i>
                      </button>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <div class="client">
                    <div class="client-info">
                      <h4>Huỳnh Đức Nhật</h4>
                    </div>
                  </div>
                </td>
                <td>Cơ sở dữ liệu</td>
                <td>
                  Hiểu và áp dụng ngôn ngữ truy vấn cơ sở dữ liệu để tương
                  tác, truy xuất và quản lý dữ liệu hiệu quả.
                </td>
                <td>1 April, 2024</td>
                <td>
                  <div class="actions">
                    <span>
                      <button class="buttonBox">
                        <i class="las la-check"></i>
                      </button>
                    </span>
                    <span>
                      <button class="buttonBox wrong">
                        <i class="las la-times"></i>
                      </button>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <div class="client">
                    <div class="client-info">
                      <h4>Phạm Quốc Việt</h4>
                    </div>
                  </div>
                </td>
                <td>Tiếng Anhn</td>
                <td>TA1, TA2, TA3, TANC1, TANC2, TACN1, TACN2.</td>
                <td>19 October, 2024</td>
                <td>
                  <div class="actions">
                    <span>
                      <button class="buttonBox">
                        <i class="las la-check"></i>
                      </button>
                    </span>
                    <span>
                      <button class="buttonBox wrong">
                        <i class="las la-times"></i>
                      </button>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <div class="client">
                    <div class="client-info">
                      <h4>Nguyễn Quang Kính</h4>
                    </div>
                  </div>
                </td>
                <td>C#</td>
                <td>
                  Ngôn ngữ lập trình C# và cách phát triển ứng dụng sử dụng
                  nó.
                </td>
                <td>26 April, 2024</td>
                <td>
                  <div class="actions">
                    <span>
                      <button class="buttonBox">
                        <i class="las la-check"></i>
                      </button>
                    </span>
                    <span>
                      <button class="buttonBox wrong">
                        <i class="las la-times"></i>
                      </button>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <div class="client">
                    <div class="client-info">
                      <h4>Huỳnh Đức Nhật</h4>
                    </div>
                  </div>
                </td>
                <td>Luật Kinh tế</td>
                <td>
                  Nguyên lý pháp lý trong lĩnh vực kinh tế, hợp đồng, cạnh
                  tranh, chính sách.
                </td>
                <td>9 April, 2024</td>
                <td>
                  <div class="actions">
                    <span>
                      <button class="buttonBox">
                        <i class="las la-check"></i>
                      </button>
                    </span>
                    <span>
                      <button class="buttonBox wrong">
                        <i class="las la-times"></i>
                      </button>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <div class="client">
                    <div class="client-info">
                      <h4>Trịnh Thị Thanh Thảo</h4>
                    </div>
                  </div>
                </td>
                <td>GT1, GT2, ĐSTT, TRR, XSTK</td>
                <td>Toán học và những điều thú vị về nó.</td>
                <td>5 April, 2024</td>
                <td>
                  <div class="actions">
                    <span>
                      <button class="buttonBox">
                        <i class="las la-check"></i>
                      </button>
                    </span>
                    <span>
                      <button class="buttonBox wrong">
                        <i class="las la-times"></i>
                      </button>
                    </span>
                  </div>
                </td>
              </tr>
            </tbody> */}
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

export default AdminTaiLieu