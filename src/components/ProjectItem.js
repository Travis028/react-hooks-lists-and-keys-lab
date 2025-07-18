import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{name}</h3>
      <p className="project-description">{about}</p>
      <div className="technology-tags">
        {technologies.map((tech) => (
          <span key={tech} className="technology-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;


	

//import React from "react";

//function ProjectItem({ name, about, technologies }) {
  //return (
    //<div className="project-item">
      //<h3>{name}</h3>
      //<p>{about}</p>
      //<div className="technologies">
        //{technologies.map((tech)=>(
          //<span key={tech}>{tech}</span>
        //))}

      //</div>
    //</div>
  //);
//}

//export default ProjectItem;