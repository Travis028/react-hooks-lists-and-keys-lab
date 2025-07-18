import React from "react";

function Links({ github, linkedin }) {
  return (
    <div className="links-container">
      <h3>Links</h3>
      <div className="links-list">
        <a href={github} className="link-item">
          <i className="fab fa-github"></i>
          GitHub
        </a>
        <a href={linkedin} className="link-item">
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Links;
