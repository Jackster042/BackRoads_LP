import React from "react";
import { socialLinks } from "../data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      {/* nav-links */}
      <PageLink primaryCls={"footer-links"} secondaryCls={"footer-link"} />
      {/* <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a className="footer-link" href={href}>
                {text}
              </a>
            </li>
          );
        })}
      </ul> */}

      {/* social-links */}
      <SocialLink primaryCls={"footer-icons"} secondaryCls={"footer-icon"} />
      {/* <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul> */}
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
