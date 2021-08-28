import React from "react";
import Skill from "./Skill";
import { v4 as uuid } from "uuid";
import { Consumer } from "./Context";

function SkillsSection() {
  return(
    <Consumer>
      {(value) => {
        const {skills} = value;
        const finalSkillRow = [];

        for (let i = 0; i < skills.length / 4; i++) {
          let skillRow = skills.slice(i * 4, (i + 1) * 4);
          finalSkillRow.push(
            <div key={uuid()} className="d-flex justify-content-around py-3">
              {skillRow.map((skill) => (
                <Skill key={uuid()} skill={skill} />
              ))}
            </div>
          );
        }
        return (
          <div className="tech w-100">
            <div className="container text-center py-5">
              <h1 className="font-weight-light text-white">
                <span className="text-warning tech-font">Technology</span> Stack
              </h1>
              <div className="lead pb-5 text-white">
                I design, develop and deliver with these weapons
              </div>
              {finalSkillRow}
            </div>
          </div>
        );
        
      }}
    </Consumer>
  );
}

export default SkillsSection;
