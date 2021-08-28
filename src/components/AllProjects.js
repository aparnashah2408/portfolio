import React from 'react';
import {Consumer} from "./Context";
import ProjectCard from './ProjectCard';

function AllProjects() {
    return (
        <Consumer>
            {(value) => {
                const {projects} = value;
                return(
                    <div className="container text-center my-5 py-5">
                        <h1 className="py-5 text-dark font-weight-light blogs">
                            All My <span className="text-warning">Projects</span>
                        </h1>
                        <div className="row">
                            {projects.map((project) => (
                                <div key={project.id} className="col-12 col-md-6">
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            }}
        </Consumer>
    );
}
export default AllProjects;