import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link}`} className="nav-link">
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
