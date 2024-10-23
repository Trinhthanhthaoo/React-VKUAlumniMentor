import React from 'react';
import './news.css'; 

const BlogCard = ({ title, date, link, image }) => {
  return (
    <div className="blog_card">
      <a href={link} className="figure">
        <img src={image} alt="" />
        <span className="tag">{date}</span>
      </a>
      <section>
        <a href="#" className="title">{title}</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
      </section>
    </div>
  );
};

const RightContent = () => {
  return (
    <div className="right_content">
      <SearchColumn />
      <BooksColumn />
      <CategoriesColumn />
      <RecentPosts />
      <RecentComments />
      <SocialIcons />
    </div>
  );
};

const SearchColumn = () => (
  <div className="columns search_column">
    <section className="search">
      <form>
        <fieldset>
          <input type="text" name="search" placeholder="Search..." maxLength="100" required />
        </fieldset>
        <fieldset>
          <button type="submit" className="btn1">
            <i className="fa fa-search"></i>
          </button>
        </fieldset>
      </form>
    </section>
  </div>
);

const BooksColumn = () => (
  <div className="columns books">
    <span className="title">
      New Books <a href="#" title="Explore More"><i className="fa fa-share"></i></a>
    </span>
    <section>
      <div className="cards">
        <div className="card_part" style={{ backgroundImage: 'url(https://i.postimg.cc/2SD5y5RS/book-1.png)' }}></div>
        {/* Repeat for other parts */}
      </div>
    </section>
  </div>
);

const CategoriesColumn = () => (
  <div className="columns categories">
    <span className="title">Categories</span>
    <section>
      <a href="#">Bhagavad Gita</a>
      {/* Repeat for other categories */}
    </section>
  </div>
);

const RecentPosts = () => (
  <div className="columns posts">
    <span className="title">
      Recent Posts <a href="#" title="Explore More"><i className="fa fa-share"></i></a>
    </span>
    <section>
      <a href="#">
        <img src="https://i.postimg.cc/KcwkZQsx/dummy.png" alt="" />
        <p>Be brave, be strong, be bold...</p>
      </a>
      {/* Repeat for other posts */}
    </section>
  </div>
);

const RecentComments = () => (
  <div className="columns comments">
    <span className="title">
      Recent Comments <a href="#" title="Explore More"><i className="fa fa-share"></i></a>
    </span>
    <section>
      <marquee direction="up" scrollAmount="4">
        <p>Remember, torn clothes...</p>
        {/* Repeat for other comments */}
      </marquee>
    </section>
  </div>
);

const SocialIcons = () => (
  <div className="columns social_icons">
    <a href="#" title="Facebook"><i className="fa fa-facebook"></i></a>
    {/* Repeat for other social icons */}
  </div>
);

const BlogSection = () => {
  return (
    <div className="blog_container">
      <div className="left_content">
        <BlogCard 
          title="Blog title goes here..." 
          date="15 JAN" 
          link="article.html" 
          image="https://i.postimg.cc/KcwkZQsx/dummy.png" 
        />
        {/* Repeat BlogCard component for other blog posts */}
        <button className="btn1 load-btn">Load more</button>
      </div>
      <RightContent />
    </div>
  );
};

// Rename 'Index' to 'News' or export 'Index' based on your requirement
const News = () => {
  return (
    <div>
      <BlogSection />
    </div>
  );
};

export default News;
