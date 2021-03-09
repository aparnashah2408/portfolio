import React, { Component } from "react";
import {Modal,Button} from 'react-bootstrap';

class RecommendationCard extends Component {  
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  handleModal(){
    this.setState({show:!this.state.show})
  }
  
  render(){
    const { name, designation, company, message } = this.props.recommendation;
    return (
      <div onClick={()=>{this.handleModal()}} className="col-12 col-md-4">
        <div className="card shadow h-100">
          <div className="card-body">
            <h4 className="card-text ellipses">{this.props.recommendation.message}</h4>
            <p className="card-text text-secondary mb-0">{this.props.recommendation.name}</p>
            <p className="card-text text-secondary">
              {this.props.recommendation.designation} at {this.props.recommendation.company}
            </p>
          </div>
        </div>
        <Modal show={this.state.show}> 
          <Modal.Header className="d-flex flex-row-reverse">
            <i onClick={()=>{this.handleModal()}} className=" fa fa-window-close" ></i>
          </Modal.Header>
          <Modal.Body><h4 className="card-text pqr">{message}</h4></Modal.Body>
          <Modal.Footer className="xyz" >
            <div>
            <p className="card-text text-secondary mb-0 pqr ">{name}</p>
            <p className="card-text text-secondary pqr">{designation} at {company}</p>
            </div>
          </Modal.Footer>
        </Modal>
      </div>

    );
  }
}

export default RecommendationCard;