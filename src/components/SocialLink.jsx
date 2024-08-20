import React from "react";
import { socialLinks } from "../data";

const SocialLink = ({ primaryCls, secondaryCls, rel }) => {
  return (
    <ul className={primaryCls}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li key={id}>
            <a href={href} className={secondaryCls} rel={rel}>
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLink;
