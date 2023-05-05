import React, { useState }  from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  const [showMore, setShowMore] = useState(false)
  function handleClick(){
    setShowMore(!showMore);
  }
  return (
    <div className="RootLayout">
      <header>
        <nav>
          <h1>
            ZAH<span>EER</span>
          </h1>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="Project">Project</NavLink>
            </li>
            <li>
              <NavLink to="Contact">Contact</NavLink>
            </li>
          </ul>
          <div className="mobile-icon">
            <svg
              onClick={handleClick}
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </nav>
     {showMore &&  <div className="mobile-menu">
         <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="Project">Project</NavLink>
            </li>
            <li>
              <NavLink to="Contact">Contact</NavLink>
            </li>
          </ul>
        </div> };
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
