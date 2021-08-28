import React from "react";
import {Link} from "react-router-dom";

function ProjectCard(props) {
  const {id, title, excerpt, imageUrl } = props.project;
  return (
    <div className="card shadow h-100">
      <img className="card-img-top" src={imageUrl} alt={title} />
      <div className="card-body projectcardbody">
        <h4 className="card-title text-warning ">{title}</h4>
        <p className="card-text text-white ">{excerpt}</p>
        <Link to={`/project/${id}`} className="stretched-link"></Link>
      </div>
    </div>
  );
}

export default ProjectCard;