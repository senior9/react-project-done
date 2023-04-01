import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Blogs.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Question from "../Question/Question";

const Blogs = () => {
  // State variables
  const [blogsPost, setBlogsPost] = useState([]);
  const [bookmarkBlogs, setBookmarkBlog] = useState([]);
  const [timeCounter, setTimeCounter] = useState(0);
  // Data Load
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogsPost(data));
  }, []);
  // console.log(blogsPost);
  // Bookmark Eventhandler + Find Method for Toaster
  const handleBookmarked = (id) => {
    const bookmarkedBlog = blogsPost.find((blog) => blog.id === id);

    let isAlreadyBookmarked = false;
    for (let i = 0; i < bookmarkBlogs.length; i++) {
      if (bookmarkBlogs[i].id === id) {
        isAlreadyBookmarked = true;
        break;
      }
    }
    // Condition declare for bookmark
    if (isAlreadyBookmarked) {
      // Error message Shown
      toast.error(
        "This is already Bookmarked If you want to again bookmarked It seen to be unsuported behaviour in react",
        {
          position: toast.POSITION.TOP_LEFT,
        }
      );
      setBookmarkBlog([...bookmarkBlogs, bookmarkedBlog]);
    } else {
      setBookmarkBlog([...bookmarkBlogs, bookmarkedBlog]);
    }
  };
  // Reading Time calculate Event Handler Function
  const handleTimeCounter = (time) => {
    setTimeCounter((prevTime) => prevTime + time);
  };
  return (
    // Container Section
    <div className="container d-flex total-container">
      <div className=" container-part">
        <div className="container card-blog ">
          {blogsPost.map((sBlog) => (
            <Blog
              key={"blog-" + sBlog.id}
              singleBlog={sBlog}
              onClickBookmarked={handleBookmarked}
              timeCounter={handleTimeCounter}
            ></Blog>
          ))}
          <hr />
          <div>
            <Question></Question>
          </div>
        </div>
        {/* Bookmark Section */}
        <div className="bookmark-part">
          <div className="time-count  ">
            <p className="my-3">Spent Time on read : {timeCounter} min</p>
            <div className="save-bookMraked mt-5 pb-5">
              <p>Bookmarked Blogs : {bookmarkBlogs.length}</p>
              {bookmarkBlogs.map((blog) => (
                <div key={blog.id} className="title-bookmarked">
                  <p>{blog.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
