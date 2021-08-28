import React, {Component} from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
import { Consumer } from "./Context";
import {v4 as uuid} from "uuid";

class AddBlog extends Component{
    state = {
        imageUrl: "",
        title: "",
        excerpt: "",
        body: "",
        submitMessage: "",
        submitMessageTextColor: "",
    };

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        });
    };

    onBodyChange = (value) => {
        this.setState({
            body : value,
        });
    };

    onSubmit = (Handler, event) => {
        event.preventDefault();

        let isSuccessful= true;
        if (isSuccessful) {
            this.setState ({
                submitMessage: `Published Successfully`,
                submitMessageTextColor: "text-info",
            });
        } else {
            this.setState ({
                submitMessage: `Oops! Something went wrong. Please try again later`,
                submitMessageTextColor: "text-danger",
            });
        }

        const newBlog = {
            id: uuid(),
            imageUrl: this.state.imageUrl,
            title: this.state.title,
            excerpt: this.state.excerpt,
            body: this.state.body,
        };

        Handler("ADD_BLOG", newBlog);
    };


    render() {
        return(
            <Consumer>
                {(value) => {
                    const {Handler} = value;
                    const {imageUrl, title, body, submitMessage, submitMessageTextColor} = this.state;
        return(
            <div className="container-fluid my-5 py-5 text-center blogs">
                <h1 className="py-5 font-weight-light text-dark">Add <span className="text-warning"> Blog</span></h1>
                <div className="row px-3 px-lg-5">
                    <div className="col-12 col-md-6 px-lg-5">
                        <form onSubmit={this.onSubmit.bind(this, Handler)} >
                            <div className="form-group">
                                <label htmlFor="imageUrl"  >Featured Image URL *</label>
                                <input
                                type="text"
                                name="imageUrl"
                                id="imageUrl"
                                className="form-control"
                                onChange={this.onChange}
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Title *</label>
                                <input
                                type="text"
                                name="title"
                                id="title"
                                className="form-control"
                                onChange={this.onChange}
                                required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="excerpt">Excerpt *</label>
                                <input
                                type="text"
                                name="excerpt"
                                id="excerpt"
                                className="form-control"
                                onChange={this.onChange}
                                required />
                            </div>
                            <SimpleMdeReact
                            onChange={this.onBodyChange}
                            options={{hideIcons: ["preview", "side-by-side", "fullscreen"]}} />
                            <button type="submit" className="btn btn-dark btn-block my-5" style={{background: "black"}}>
                                Publish
                            </button>
                        </form>
                        <h4 className={submitMessageTextColor}>{submitMessage}</h4>
                    </div>
                    <div className="col-12 col-md-6 py-5 markdown">
                        <div className="justify-content-center">
                            <img src={imageUrl} alt={title} className="img-fluid" />
                        </div>
                        <h1 className="text-center font-weight-light py-5">{title}</h1>
                        <ReactMarkdown source={body} />

                    </div>
                </div>
            </div>
        );
                }}
            </Consumer>
        );
    }
}

export default AddBlog;