import React from 'react';
import "./Content.css"; 
// import logo from '../../assets/img/lo.jpg';

const Content = () => {
    return (
        <div id="content-container">
            <div className="content">
                <div className="profile">
                    <div className="profile_image">
                    {/* <img src={logo} alt="Profile" /> */}
                    </div>
                    <div className="name">Trịnh Thị Thanh Thảo</div>
                    <div className="sub-name">
                        Lập trình Java <br />
                        GPA môn: 3.8/4.0
                    </div>
                </div>
                <div className="rating-start">
                    <div className="rating">
                        <input type="radio" name="clr" style={{ '--c': '#ff9933' }} />
                        <input type="radio" name="clr" style={{ '--c': '#ff9933' }} />
                        <input type="radio" name="clr" style={{ '--c': '#ff9933' }} />
                        <input type="radio" name="clr" style={{ '--c': '#ff9933' }} />
                        <input type="radio" name="clr" style={{ '--c': '#ff9933' }} />
                    </div>
                </div>
                <div className="name">Đánh giá mentor này</div>
                <div className="sub-name" style={{ textAlign: 'left' }}>
                    Viết đánh giá :
                </div>
                <textarea id="lydo" name="reason" rows="4" required></textarea>
               
                {/* Button for submitting */}
                <button className="content__container--header--button">Hoàn thành</button>
            </div>
        </div>
    );
};

export default Content;
