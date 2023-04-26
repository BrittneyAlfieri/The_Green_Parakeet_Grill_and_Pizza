import facebook from "../images/FB.png";
import instagram from "../images/Insta.png";
import closeButton from "../images/X.png";

const ItemModal = ({ selectedImage, onCloseModal }) => {
  return (
    <div className="modal">
      <div className="itemmodal">
        <div className="itemmodal__container">
          <button
            type="button"
            className="itemmodal__close"
            onClick={onCloseModal}
          >
            <img src={closeButton} className="close__button" />
          </button>
          <img src={selectedImage.src} className="itemmodal__image" />
          <div className="itemmodal__info">
            <p className="itemmodal__text"> Follow us on our socials!</p>
            <div className="itemmodal__socialmedia">
              <button type="button" className="itemmodal__button">
                <img className="facebook__button" src={facebook} />
              </button>
              <button type="button" className="itemmodal__button">
                <img className="instagram__button" src={instagram} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
