import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa6";
import NavbarData from '../data/NavbarData'

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const sidebarElements = NavbarData.map((item, index) => {
    return (
      <li key={index} className='nav-text'>
        <Link to={item.path} className="nav-link">
          <span>{item.title}</span>
        </Link>
      </li>
    );
  }) 


   return (
    <>
      <IconContext.Provider value={{color: '#fff'}} className='nav-container'>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {sidebarElements}
              </ul>
            </nav>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
