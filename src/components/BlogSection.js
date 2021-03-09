import React from "react";
import BlogCard from "./BlogCard";

function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      imageUrl:
        "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
      excerpt: "This is my blog about...",
    },
    {
      id: 2,
      title: "Blog 2",
      imageUrl:
        "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
      excerpt: "This is my blog about...",
    },
    {
      id: 3,
      title: "Blog 3",
      imageUrl:
        "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
      excerpt: "This is my blog about...",
    },
  ];
  return (
    <div className="container text-center my-5">
      <h1 className="font-weight-light">
        My <span className="text-info">Blogs</span>
      </h1>
      <div className="lead">
        I share my views on technologies in these blogs
      </div>
      <div className="row my-5 pt-3">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-12 col-md-4 my-2">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
      <div className="my-5">
        <a href="/" className="text-dark text-right">
          <h5>
            See my blogs
            <i className="fas fa-arrow-right align-middle"></i>
          </h5>
        </a>
      </div>
    </div>
  );
}

export default BlogSection;
