import React from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ singleBlog, onClickBookmarked, timeCounter }) => {
  // Object Destructuring using Propos
  const { id, author, author_image, date, img, time, title } = singleBlog;
  // OnclickBookmarked handler
  const handleBookmarked = () => {
    onClickBookmarked(id);
  };
  // Handle Time EventHandler
  const handleTimeCounter = () => {
    timeCounter(time);
  };
  return (
    <div className=" blog-card">
      <img className="content-img" src={img} alt="" />
      <div className="user">
        <div className="user-info">
          <img className="blog-img" src={author_image} alt="" />
          <div className="user-name">
            <p className="author">{author}</p>
            <p>{date} </p>
          </div>
        </div>
        <div className="time-travel">
          <p>{time} min read</p>
          <button
            onClick={() => handleBookmarked(id)}
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>
      </div>
      <p className="title">{title}</p>
      <p onClick={handleTimeCounter} className="anchor-link">
        Mark as read{" "}
      </p>
    </div>
  );
};

export default Blog;
