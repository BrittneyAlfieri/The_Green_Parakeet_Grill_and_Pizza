const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__info">
          <h2 className="footer__header">Contact Us</h2>
          <p className="footer__text">
            814 NE 6th Avenue Delray Beach, Florida, 33483.
          </p>
          <a className="footer__text" href="tel:5615287063">
            (561)528-7063
          </a>
          <p className="footer__text">Wednesday - Saturday: 5pm to 9pm</p>
        </div>
        <div className="footer__map">
          <iframe
            className="google__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.4183648496187!2d-80.07024728857549!3d26.4744712768148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8dffbeb151c2b%3A0x798567ac21204cf6!2sThe%20Green%20Parakeet%20Grill%20%26%20Pizza!5e0!3m2!1sen!2sus!4v1683563090334!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullcreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
