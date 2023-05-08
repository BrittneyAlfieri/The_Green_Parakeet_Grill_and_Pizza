import mapImage from "../images/map.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__info">
          <h2 className="footer__header">Contact Us</h2>
          <p className="footer__text">
            814 NE 6th Avenue Delray Beach, Florida, 33483.
          </p>
          <p className="footer__text">(561)-528-7063</p>
          <p className="footer__text">Wednesday - Saturday: 5pm to 9pm</p>
        </div>
        <img className="footer__map" src={mapImage}></img>
      </div>
    </div>
  );
};

export default Footer;
