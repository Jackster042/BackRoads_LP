import React from "react";
import { pageLinks } from "../data";

const PageLink = ({ primaryCls, secondaryCls }) => {
  return (
    <ul className={primaryCls} id="nav-links">
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={secondaryCls}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLink;
