import React from "react";
import servicesImage from "../images/services-image.jpg";

const Services = () => {
  return (
    <section className="services">
      <div className="services__wrapper">
        <div className="services__page">
          <img src={servicesImage} className="services__image" />
          <div className="services__info">
            <div className="services__title">Our services</div>
            <p className="services__paragraph">01. Dine on site</p>
            <p className="services__paragraph">
              02. Order takeout via phone or online ordering
            </p>
            <p className="services__paragraph">
              03. Enjoy our selection of eclectic wines and craft beers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
