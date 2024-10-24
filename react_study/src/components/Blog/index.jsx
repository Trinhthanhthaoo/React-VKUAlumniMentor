import React from 'react';
import './blog.css'; 
import img1 from '../../img/img6.jpg';
import img2 from '../../img/img7.jpg'; 
import img3 from '../../img/mentor.jpg';
import img4 from '../../img/VKU.jpg';

const Blog = () => {
  return (
    <div>
      <div className="blog-posts">
        <div className="post">
          <img src={img1} alt="Blog post 1" className="post-img" />
          <div className="post-content">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, soluta?</h3>
            <span className="date">July 13, 2020</span>
          </div>
        </div>

        <div className="post">
          <img src={img2} alt="Blog post 2" className="post-img" />
          <div className="post-content">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, soluta?</h3>
            <span className="date">July 13, 2020</span>
          </div>
        </div>

        <div className="post">
          <img src={img3} alt="Blog post 3" className="post-img" />
          <div className="post-content">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, soluta?</h3>
            <span className="date">July 13, 2020</span>
          </div>
        </div>

        <div className="post">
          <img src={img4} alt="Blog post 4" className="post-img" />
          <div className="post-content">
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, soluta?</h3>
            <span className="date">July 13, 2020</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
