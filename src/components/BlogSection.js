import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { Consumer } from "./Context";

function BlogSection() {
  return(
    <Consumer>
      {(value) => {
        const {blogs} = value;
        return (
          <div className="container text-center my-5">
            <h1 className="font-weight-light blogs">
              My <span className="text-warning blog-svg">
              Blogs
              </span>
            </h1>
            <div className="lead projects">
              I share my views on technologies in these blogs
            </div>
            <div className="row my-5 pt-3">
              {blogs.slice(0,3).map((blog) => (
                <div key={blog.id} className="col-12 col-md-4 my-2">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
            <div className="my-5">
              <Link to="/allBlogs" className="text-dark text-right">
                <h5>
                  See my blogs
                  <i className="fas fa-arrow-right align-middle"></i>
                </h5>
              </Link>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default BlogSection;
