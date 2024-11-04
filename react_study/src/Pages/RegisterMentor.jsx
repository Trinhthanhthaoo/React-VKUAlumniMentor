import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './RegisterMentor.css'

const RegisterMentor = () => {
    return (
        <>
            <Header />
            {/* content  */}
            <div id="content">
                <div className="content__container">
                    <div className="content__container--header">
                        <div className="content__container--header__title">
                            nền tảng kết nối <br />vku mentor
                            <div className="content__container--header--line" />
                        </div>
                        <div className="content__container--header--content">
                            mentoring is a brain to pick, an ear to listen <br />
                            and a push in the right direction
                        </div>
                        <a href="/FormDK.html">    <button className="content__container--header--button">đăng ký ngay</button> </a>
                        {/* <div id="mentorModal" class="modal">
        <div class="modal-content">
          <span class="close-btn">&times;</span>
          <iframe src="/FormDangKyMentor.html" style="width:100%; height: 900px; border:none;"></iframe>
        </div>      
      </div> */}

                        {/* Slider */}
                        <div className="container-slider">
                            <div className="slider">
                                <div className="slide">
                                    <a href="/PublicVKU.html">
                                        <div className="card">
                                            <img className="card-img" src="assets/img/NQK.jpg" alt />
                                            <div className="card-body">
                                                <h1 className="card-title">Nguyễn Quang Kính</h1>
                                                <p className="card-sub-title">Lập trình cơ bản</p>
                                                <p className="card-sub-title">Mentor của F8 <br /> Giải nhì cuộc thi bí ẩn bảo mật <br /> Giải nhì Tin học trẻ Ngũ Hành Sơn </p>
                                                <p className="card-sub-title">Sinh viên : Khoa khoa học máy tính</p>
                                                <p className="card-sub-title">Ngành : Công nghệ thông tin</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="slide"><a href="TTMentor.html">
                                    <div className="card">
                                        <img className="card-img" src="/assets/img/HDN.jpg" alt />
                                        <div className="card-body">
                                            <h1 className="card-title">Huỳnh Đức Nhật</h1>
                                            <p className="card-sub-title">Lập trình cơ bản</p>
                                            <p className="card-sub-title">Giải ba ICPC <br /> Giải ba giải đáp thuật toán <br /> Giải nhì Tin học trẻ </p>
                                            <p className="card-sub-title">Sinh viên : Khoa khoa học máy tính</p>
                                            <p className="card-sub-title">Ngành : Truyền thông đa phương tiện</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="slide"><a href="TTMentor.html">
                                    <div className="card">
                                        <img className="card-img" src="/assets/img/HDN.jpg" alt />
                                        <div className="card-body">
                                            <h1 className="card-title">Huỳnh Đức Nhật</h1>
                                            <p className="card-sub-title">Lập trình cơ bản</p>
                                            <p className="card-sub-title">Giải ba ICPC <br /> Giải ba giải đáp thuật toán <br /> Giải nhì Tin học trẻ </p>
                                            <p className="card-sub-title">Sinh viên : Khoa khoa học máy tính</p>
                                            <p className="card-sub-title">Ngành : Truyền thông đa phương tiện</p>
                                        </div>
                                    </div>
                                </a>
                                </div>
                                <div className="slide"><a href="/TTMentorT.html">
                                    <div className="card">   <img className="img__slider--sub" src="./assets/img/TTTT.jpg" alt />
                                        <div className="card-body">
                                            <h1 className="card-title">Trịnh Thị Thanh Thảo</h1>
                                            <p className="card-sub-title">Lập trình OOP Java</p>
                                            <p className="card-sub-title">Java: 9.3/10 <br /> Giải ba cuộc thi đồ án OOP Java <br /> Top 50 luyencode.net </p>
                                            <p className="card-sub-title">Sinh viên : Khoa khoa học máy tính</p>
                                            <p className="card-sub-title">Ngành : Công nghệ thông tin</p>
                                        </div>
                                    </div>
                                </a></div>
                                <div className="slide"><div className="card">
                                    <img className="card-img" src="assets/img/NQK.jpg" alt />
                                    <div className="card-body">
                                        <h1 className="card-title">Nguyễn Quang Kính</h1>
                                        <p className="card-sub-title">Lập trình cơ bản</p>
                                        <p className="card-sub-title">Mentor của F8 <br /> Giải nhì cuộc thi bí ẩn bảo mật <br /> Giải nhì Tin học trẻ Ngũ Hành Sơn </p>
                                        <p className="card-sub-title">Sinh viên : Khoa khoa học máy tính</p>
                                        <p className="card-sub-title">Ngành : Công nghệ thông tin</p>
                                    </div>
                                </div></div>
                                <div className="slide"><a href>
                                </a>
                                    <div className="card"><a href>
                                        <img className="img__slider--sub" src="./assets/img/TAT.jpg" alt />
                                        <div className="card-body">
                                            <h1 className="card-title">Trần Anh Tú</h1>
                                            <p className="card-sub-title">Thiết kế web</p>
                                            <p className="card-sub-title">GPA 4.0/4.0<br /> Giải nhì Best Web Design <br /> Giải ba super web </p>
                                            <p className="card-sub-title">Sinh viên : Khoa khoa học máy tính</p>
                                            <p className="card-sub-title">Ngành : Công nghệ thông tin</p>
                                        </div>
                                    </a>
                                    </div>
                                </div>
                                <div className="slide"><a href>
                                </a><div className="card"><a href>
                                    <img className="img__slider--sub" src="./assets/img/DTDH.jpg" alt />
                                    <div className="card-body">
                                        <h1 className="card-title">Đoàn Thị Diệu Huyền</h1>
                                        <p className="card-sub-title">Lập trình cơ bản</p>
                                        <p className="card-sub-title">Mentor của F8 <br /> Giải nhì cuộc thi bí ẩn bảo mật <br /> Giải nhì Tin học trẻ Ngũ Hành Sơn </p>
                                        <p className="card-sub-title">Sinh viên : Khoa khoa học máy tính</p>
                                        <p className="card-sub-title">Ngành : Công nghệ thông tin</p>
                                    </div>
                                </a>
                                    </div>
                                </div>
                                <div className="slide">
                                    <div className="card">
                                        <a href><img className="img__slider--sub" src="./assets/img/VTTH.jpg" alt />
                                            <div className="card-body">
                                                <h1 className="card-title">Vũ Thị Thúy Hiền</h1>
                                                <p className="card-sub-title">Tiếng anh</p>
                                                <p className="card-sub-title">IELTS 7.0<br /> Giải nhì Tiếng anh Tp Đà Nẵng<br /> Giải nhất Tiếng anh trẻ</p>
                                                <p className="card-sub-title">Sinh viên : Khoa Kinh tế số</p>
                                                <p className="card-sub-title">Ngành : Marketing</p>
                                            </div></a></div></div>
                            </div>
                            <div className="control-slider">
                                <i className="fa-solid fa-circle-left" id="arrow-left" />
                                <i className="fa-solid fa-circle-right" id="arrow-right" />
                            </div>
                        </div>

                        {/* End Slider  */}



                        <ul className="thongke">
                            <div className="phu">
                                <li>
                                    <p>120</p>
                                    Mentees <br />
                                    <div className="border-right" />
                                </li>
                                <li>
                                    <p>40</p>
                                    Mentors
                                    <div className="border-right" />
                                </li>
                                <li>
                                    <p>16</p>
                                    chuyên ngành
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="content__container--body">
                        <div className="content__container--body--title">
                            công việc của một VKU MENTOR
                        </div>
                        <div className="content__container--body--content">
                            Một sinh viên đại học hoặc người đi làm có trải nghiệm sống phong phú, rõ ràng về định <br />
                            hướng cá nhân, có mong muốn đồng hành và dẫn dắt những bạn bè vượt qua những vấn <br /> đề cuộc sống. Mentor và Mentee sẽ cùng nhau lên kế hoạch vượt qua những khó <br />
                            khăn, phát triển bản thân, thay đổi tư duy và đồng hành cùng thực hiện.
                        </div>
                        <ul className="sub--content">
                            <li><p>hướng dẫn và đào tạo</p>
                                - Mentor cung cấp kiến thức, kỹ năng và kinh nghiệm của mình cho mentee. Họ giúp mentee phát triển kỹ năng chuyên môn và cái thiện.
                                hiệu suất làm việc. <br />
                                - Cung cấp lời khuyên và phản hồi cụ thể để mentee có thế học hỏi từ những sai lầm và phát triển bản thân.
                            </li>
                            <li><p>định hướng và phát triển</p>
                                - Mentor giúp mentee xác định mục tiêu học tập và lập kế hoạch để đạt được những mục tiêu đó. <br />
                                - Hỗ trợ mentee trong việc nhận diện cơ hội phát triển, chuẩn bị cho các cuộc phỏng vấn và xây dựng mạng lưới quan hệ chuyên nghiệp.
                            </li>
                            <li><p>động lực và tinh thần</p>
                                - Mentor cung cấp sự hỗ trợ tinh thần, động viên mentee vượt qua những thách thức và khó khăn trong công việc và cuộc sống. <br />
                                - Tạo môi trường tin cậy, nơi mentee có thê thoái mái chia sẻ những lo ngại và nhận được sự khích lệ.
                            </li>
                        </ul>
                    </div>
                    <div className="content__container--footer">
                        <p className="content__container--footer--title">
                            CÔNG VIỆC CỦA MỘT VKU MENTOR</p>
                        <div className="content">
                            <table>
                                <tbody><tr>
                                    <td><h2>PHÁT TRIỂN KỸ NĂNG LÃNH ĐẠO VÀ GIAO TIẾP</h2></td>
                                    <td>
                                        <ul>
                                            <li>- Làm mentor giúp nâng cao kỹ năng lãnh đạo, quản lý và giao tiếp.</li>
                                            <li>- Việc hướng dẫn và hỗ trợ mentee đòi hỏi mentor phải biết cách truyền đạt thông tin một cách rõ ràng, hiệu quả và động viên người khác phát triển.</li>
                                        </ul>
                                    </td>
                                </tr>
                                    <tr>
                                        <td><h2>CỦNG CỐ KIẾN THỨC VÀ KINH NGHIỆM</h2></td>
                                        <td>
                                            <ul>
                                                <li>- Khi chia sẻ kiến thức và kinh nghiệm của mình, mentor có cơ hội củng cố và làm mới lại những gì mình đã học.</li>
                                                <li>- Việc giải thích và truyền đạt thông tin giúp mentor hiểu sâu hơn về lĩnh vực chuyên môn của mình.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><h2>MỞ RỘNG MẠNG LƯỚI QUAN HỆ</h2></td>
                                        <td>
                                            <ul>
                                                <li>- Làm mentor tạo cơ hội gặp gỡ và xây dựng mối quan hệ với các mentee và các chuyên gia khác.</li>
                                                <li>- Mạng lưới quan hệ này có thể mang lại những cơ hội hợp tác, phát triển nghề nghiệp và mở rộng tầm ảnh hưởng trong ngành.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><h2>NÂNG CAO UY TÍN VÀ DANH TIẾNG TRONG NGÀNH</h2></td>
                                        <td>
                                            <ul>
                                                <li>- Làm mentor giúp nâng cao uy tín và danh tiếng của bản thân trong ngành.</li>
                                                <li>- Khi mentor được biết đến là người có khả năng hướng dẫn và phát triển tài năng, họ sẽ được tôn trọng và đánh giá cao hơn trong cộng đồng chuyên môn.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody></table>
                        </div>
                    </div>
                    <div className="content__container--end">
                        đăng ký ngay để trở thành một mentor
                    </div>
                    <div className="comment">
                        <p>Đăng nhập hoặc đăng ký tài khoản </p>
                        <p>Chọn mục "Đăng ký làm Mentor"</p>
                        <p>Điền thông tin hồ sơ Mentor <br /> Hoặc tải CV lên</p>
                        <p>Xác nhận và nộp hồ sơ </p>
                        <p>Chờ xét duyệt</p>
                        <p> <strong>Hoàn tất và bắt đầu hướng dẫn: </strong><br />
                            <small>Nếu được chấp thuận, bạn sẽ trở thành một Mentor chính thức trên VKUMentor.</small>
                            <small> Bạn có thể bắt đầu nhận các yêu cầu từ sinh viên và bắt đầu hướng dẫn.</small></p>
                        <div className="vertical" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RegisterMentor