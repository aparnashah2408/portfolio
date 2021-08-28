import React, {Component} from "react";
import { Consumer } from "./Context";
import {v4 as uuid} from "uuid";
class WriteRecommendation extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            designation: "",
            company: "",
            recommendationMessage: "",
            submitMessage: "",
            submitMessageTextColor: "",
        };
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit =(Handler, event) => {
        event.preventDefault();

        let isSuccessful = true;
        const {name} = this.state;
        if (isSuccessful) {
            this.setState({
                submitMessage: `Thankyou ${name}!`,
                submitMessageTextColor: "text-info",
            });
        } else {
            this.setState({
                submitMessage: `Oops! something went wrong please try again later`,
                submitMessageTextColor: "text-danger",
            });
        }

        const newRecommendation = {
          id: {uuid},
          name: this.state.name,
          designation: this.state.designation,
          company: this.state.company,
          recommendationMessage: this.state.recommendationMessage,
        };

        Handler("ADD_RECOMMENDATION", newRecommendation);
    };

    render() {
      return(
        <Consumer>
          {(value) => {
            const {Handler} = value;
            const {submitMessage, submitMessageTextColor} = this.state;
        return (
            <div className="container my-2 py-4">
              <h1 className="font-weight-light text-center py-5">
                <span className="text-warning">Thank you! </span>for your taking
                your time
              </h1>
              <div className="row justify-content-center">
                <div className="col-11 col-lg-5">
                  <form onSubmit={this.onSubmit.bind(this, Handler)}>
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company / Institution *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="company"
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="designation">Designation *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="designation"
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="recommendationMessage">
                        Recommendation *
                      </label>
                      <textarea
                        className="form-control"
                        name="recommendationMessage"
                        rows="5"
                        onChange={this.onChange}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-danger float-right"
                    >
                      Lot's of love!
                    </button>
                  </form>
                </div>
              </div>
              <div className="py-5 mx-2 text-center">
                <h5 className={submitMessageTextColor}>{submitMessage}</h5>
              </div>
            </div>
        );
          }}
        </Consumer>
      );
    }
}

export default WriteRecommendation;