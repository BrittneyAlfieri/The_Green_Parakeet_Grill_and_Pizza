import aboutusshape from "../images/aboutus-shape.png";
const AboutUs = () => {
  return (
    <section className="aboutus">
      <div className="aboutus__wrapper">
        <div className="aboutus__info">
          <img
            className="aboutus__image"
            src={aboutusshape}
            alt="swiggle shape above text"
          />
          <h2 className="aboutus__text">
            At The Green Parakeet, we know that great food starts with great
            ingredients.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
