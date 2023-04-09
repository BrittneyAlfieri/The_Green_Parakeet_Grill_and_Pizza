import react from "react";
import headerImage from "../images/header-image.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__header">
        <p>The Green Parakeet Grill & Pizza</p>
      </div>
      <div className="header__info">
        <h1>Fresh, Local, Artisan cuisine</h1>
        <h2>
          The Green Parakeet Grill & Pizza prepares good but simple food. From
          pizza to local caught fish, we have something for everyone.
        </h2>
      </div>
      <div className="header__footer">
        <button className="header__button" type="button">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Header;
