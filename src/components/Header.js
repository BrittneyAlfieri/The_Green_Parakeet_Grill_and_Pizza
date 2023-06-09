const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__header">
          <p className="header__title">The Green Parakeet Grill & Pizza</p>
        </div>
        <div className="header__info">
          <h1 className="header__info-title">Fresh, Local, Artisan cuisine</h1>
          <h2 className="header__info-paragraph">
            The Green Parakeet Grill & Pizza prepares good but simple food. From
            pizza to local caught fish, we have something for everyone.
          </h2>
        </div>
        <div className="header__footer">
          <span className="header__button-block">
            <a
              className="header__button"
              href="https://the-green-parakeet-grill-pizza.square.site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
