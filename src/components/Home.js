import React from "react";
import ProjectList from './ProjectList';
import './styles.css';

function Home({ color, username, city, projects }) {
  return (
    <div id="home" className="home-container">
      <section className="hero">
        <h1 style={{ color: color }}>
          {username} is a Web Developer from {city}
        </h1>
      </section>
      <section className="projects-section">
        <h2>My Projects</h2>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}

export default Home;
