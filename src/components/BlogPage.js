import React from 'react'
import { Consumer } from './Context';
import ReactMarkdown from 'react-markdown';

function BlogPage(props) {
    return (
        <Consumer>
            {(value) => {
                const {blogs} = value;
                const id = props.match.params.id;
                const blog= blogs.filter((blog) => blog.id==id)[0];
                const {imageUrl, title, body} = blog;
                return (
                    <div className="my-5 py-5 container">
                        <div className="justify-content-center markdown">
                            <img src={imageUrl} alt={title} className="img-fluid w-100" />
                        </div>
                        <h1 className="text-center font-weight-light py-5">{title}</h1>
                        <ReactMarkdown source={body} />
                    </div>
                );
            }}
        </Consumer>
    );
}

export default BlogPage;