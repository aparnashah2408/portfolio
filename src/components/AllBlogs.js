import React from 'react'
import { Consumer } from './Context';
import BlogCard from './BlogCard';

function AllBlogs() {
    return(
        <Consumer>
            {(value) => {
                const {blogs} = value;
                return (
                    <div className="container my-5 text-center">
                        <h1 className="text-dark py-5 font-weight-light blogs">
                            All My<span className="text-warning"> Blogs</span>
                        </h1>
                        <div className="row">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="col-12 col-md-6">
                                    <BlogCard blog={blog} />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            }}
        </Consumer>
    );
}

export default AllBlogs;