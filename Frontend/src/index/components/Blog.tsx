import React from "react";
import { Link } from "react-router-dom";
import blogContent from "../data/blogs";

const Blog = () => {
  return (
    <>
      {blogContent.slice(0, 3).map((item) => (
        <div className="news-block col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src={item.img} alt="blog post" />
              </figure>
            </div>
            <div className="lower-content">
              <ul className="post-meta">
                <li>
                  <a href="#">August 31, 2021</a>
                </li>
                <li>
                  <a href="#">12 Comments</a>
                </li>
              </ul>
              <h3>
                <Link to={`/blog-details/${item.id}`}>
                  {/* ✅ JSX moved to `Blog.tsx` */}
                  {item.title.includes("Free advertising") ? (
                    <>
                      Free advertising for your <br /> online business
                    </>
                  ) : (
                    item.title
                  )}
                </Link>
              </h3>
              <p className="text">{item.blogText}</p>
              <Link 
                to={`/blog-details/${item.id}`} 
                className="read-more"
                style={{ 
                  color: '#D50000', 
                  transition: 'all 0.3s ease' 
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#B50000'}
                onMouseOut={(e) => e.currentTarget.style.color = '#D50000'}
              >
                Read More <i className="fa fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Blog;
