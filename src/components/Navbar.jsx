import React from "react";
import logo from "../images/logo.svg";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLink primaryCls={"nav-links"} secondaryCls={"nav-link"} />
        {/* <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href} className="nav-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul> */}

        <SocialLink
          primaryCls="nav-icons"
          secondaryCls="nav-icon"
          rel="noreferrer"
        />
        {/* <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a href={href} className="nav-icon" rel="noreferrer">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
