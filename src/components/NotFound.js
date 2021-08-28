import React from "react";

function NotFound() {
    return (
        <div className="container my-5 py-5 text-center">
            <div className=" display-4 pt-5 mt-5 text-dark">
                <span className="text-danger">Oops!</span> It's a 404!
            </div>
            <div className="lead mb-5">Cannot find what you are looking for.</div>
        </div>
    )
}

export default NotFound;