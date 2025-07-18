import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="content-container">
        <Home username={user.name} city={user.city} color={user.color} />
        <About bio={user.bio} links={user.links} />
        <ProjectList projects={user.projects} />
      </div>
    </div>
  );
}

export default App;
