import React, {Component} from "react";

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            description: "",
            submitMessage: "",
            submitMessageTextColor: "",
        };
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit =(event) => {
        event.preventDefault();
        
        let isSuccessful = true;
        const {name} = this.state;
        if (isSuccessful) {
            this.setState({
                submitMessage: `Thank you ${name}. I will contact you soon!`,
                submitMessageTextColor: "text-warning",
            });
        } else {
            this.setState({
                submitMessage: "oops! Something went wrong. please try again later :(",
                submitMessageTextColor: "text-danger",
            });
        }
    };

    componentDidMount() {
        console.log("component did mount")
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }

    componentDidUpdate(){
        console.log("component did update")
    }

    render() {
        console.log("render")
        const { submitMessageTextColor, submitMessage } = this.state;
        return (
            <div className="container my-5 py-5">
                <h1 className="font-weight-light text-center py-4">
                    <span className="text-warning">Thankyou</span> for your interest
                </h1>
                <div className="row justify-content-center">
                    <div className="col-11 col-lg-5">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" className="form-control " onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-Mail</label>
                                <input type="email" name="email" className="form-control" onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">About</label>
                                <textarea
                                className="form-control"
                                name="description"
                                rows="5"
                                onChange={this.onChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark float-right" style={{background: "black"}}>Let's get started</button>
                        </form>
                    </div>
                </div>
                <div className="py-5 mx-2 text-center">
                    {<h5 classname={submitMessageTextColor}>{submitMessage}</h5>}
                </div>
            </div>
        );
    }
}

export default Contact;