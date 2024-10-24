import React from 'react';
import './course.css'; // Import your CSS file
import img1 from '../../img/img6.jpg';
import img2 from '../../img/img7.jpg'; // Add different images
import img3 from '../../img/mentor.jpg';
import img4 from '../../img/VKU.jpg';

const Course = () => {
  return (
    <div>
      <div className="content-text" id="project1" style={styles.contentText}>
        Các dự án nổi bật <i className="fa-solid fa-arrow-right"></i>
      </div>

      <div className="grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="card__img">
              <img src={project.image} alt={project.title} /> {/* Better alt text */}
            </div>
            <div className="card__contenido">
              <h3 className="card__title">{project.title}</h3>
              <div className="divider"></div>
              <p className="card__text">{project.description}</p>
              <a href={project.link} className="card__readbtn" style={{ color: 'red' }}>
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="content-text" style={styles.contentText}>
        Nhật ký của tôi <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

const styles = {
  contentText: {
    display: 'inline-block',
    padding: '16px 32px',
    color: 'whitesmoke',
    borderRadius: '20px',
    margin: '32px',
    backgroundImage: 'linear-gradient(180deg, rgb(22,167,239), rgb(148,45,212))',
  },
};

const projects = [
  {
    image: img1,
    title: 'GIEO MẦM TRÊN NƯƠNG - CÙNG EM ĐẾN TRƯỜNG',
    description:
      'Chào các bạn ✌ Chúng mình là nhóm từ thiện Hand In Hand Việt - Hàn. Hôm nay, chúng mình rất vui giới thiệu đến với mọi người một dự án ý nghĩa mang tên “HIH - Cùng Em Đến Trường”. ☀️ Đây là dự án nằm trong chuỗi hoạt động của chương trình dân vận “Trà Tập 2024 - Đông Ấm Đại Ngàn” nhằm mục đích cải thiện điều kiện học tập cho các em nhỏ tại Nóc Răng Chuỗi, xã Trà Tập, huyện Nam Trà My, tỉnh Quảng Nam.',
    link: 'https://www.facebook.com/share/p/gtDxRdLh9smQUc4n/',
  },
  {
    image: img2, // Unique image
    title: '💌 CHƯƠNG TRÌNH GÂY QUỸ “TUẦN LỄ YÊU THƯƠNG” 💌',
    description:
      '🌻 Chỉ còn hơn một tháng nữa, chương trình dân vận “Trà Tập 2024 - Đông Ấm Đại Ngàn” sẽ chính thức diễn ra. Để chuẩn bị và gây quỹ cho chương trình, Nhóm từ thiện Hand In Hand phát động "Tuần lễ Yêu thương", nhằm hỗ trợ người dân ở Nóc Răng Chuỗi - nơi còn phải đối mặt với nhiều khó khăn. 💙 Hand In Hand Việt - Hàn rất mong sẽ nhận được sự hưởng ứng, ủng hộ tích cực của tất cả mọi người.',
    link: 'https://www.facebook.com/share/p/mZcdAAbmhqXnjw3T/',
  },
  {
    image: img3, // Unique image
    title: 'Chiến dịch chung tay chống dịch sốt xuất huyết 🫶🤲',
    description:
      'Sốt xuất huyết là bệnh nguy hiểm do muỗi vằn gây ra, đặc biệt bùng phát mạnh trong mùa mưa. Chiến dịch của chúng tôi nhằm nâng cao ý thức cộng đồng về việc diệt muỗi, vệ sinh môi trường sống và áp dụng các biện pháp phòng chống như sử dụng màn khi ngủ, xử lý các điểm nước đọng, và bảo vệ gia đình khỏi muỗi đốt. Hãy cùng chung tay hành động để bảo vệ sức khỏe cho mọi người 👐🤲🙌.',
    link: 'https://vncdc.gov.vn/trien-khai-chien-dich-diet-lang-quang-phong-chong-sot-xuat-huyet-neu-cao-vai-tro-trach-nhiem-cua-ca-cong-dong-nd14157.html',
  },
  {
    image: img4, // Unique image
    title: '🥮 CHƯƠNG TRÌNH “ĐÊM RẰM TRUNG THU”',
    description:
      '🍂 Vậy là một mùa trung thu nữa lại đến. Mỗi khi nhắc đến trung thu thì mọi người chỉ biết đến trung thu là Tết thiếu nhi, nhưng ngày đặc biệt ấy lại còn một cái tên khác đầy ý nghĩa: Tết Đoàn Viên - ngày để các thành viên trong gia đình sum họp, quây quần bên nhau. Tuy nhiên, ở thành phố này vẫn còn những người có hoàn cảnh đặc biệt không thể tận hưởng một đêm Trung Thu trọn vẹn.',
    link: '#',
  },
];

export default Course;
