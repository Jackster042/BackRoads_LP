import React from "react";
import TitleComponent from "./TitleComponent";
import Service from "./Service";
import { articles } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <TitleComponent title="our" subTitle="services" />
      <div className="section-center services-center">
        {articles.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <Service key={id} {...service} />
            // <article className="service" key={id}>
            //   <span className="service-icon">
            //     <i className={icon}></i>
            //   </span>
            //   <div className="service-info">
            //     <h4 className="service-title">{title}</h4>
            //     <p className="service-text">{text}</p>
            //   </div>
            // </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
