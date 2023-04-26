import dough from "../images/socialmedia-pictures/dough.JPG";
import fishsandwhich from "../images/socialmedia-pictures/fishsandwhich.JPG";
import pizza1 from "../images/socialmedia-pictures/pizza1.JPG";
import pizza2 from "../images/socialmedia-pictures/pizza2.JPG";
import pizza3 from "../images/socialmedia-pictures/pizza3.JPG";
import truck from "../images/socialmedia-pictures/truck.JPG";

const SocialMedia = ({ onSelectImage }) => {
  return (
    <section className="socialmedia">
      <div className="socialmedia__wrapper">
        <div className="socialmedia__container">
          <img
            className="socialmedia__image"
            alt="prepared dough from instagram"
            src={dough}
            onClick={() => onSelectImage({ src: dough })}
          />
          <img
            className="socialmedia__image"
            alt="prepared fish sandwhich from instagram"
            src={fishsandwhich}
            onClick={() => onSelectImage({ src: fishsandwhich })}
          />
          <img
            className="socialmedia__image"
            alt="prepared pizza"
            src={pizza1}
            onClick={() => onSelectImage({ src: pizza1 })}
          />
          <img
            className="socialmedia__image"
            alt="prepared pizza"
            src={pizza2}
            onClick={() => onSelectImage({ src: pizza2 })}
          />
          <img
            className="socialmedia__image"
            alt="prepared pizza"
            src={pizza3}
            onClick={() => onSelectImage({ src: pizza3 })}
          />
          <img
            className="socialmedia__image"
            alt="people getting food from green parakeet grill & pizza food truck"
            src={truck}
            onClick={() => onSelectImage({ src: truck })}
          />
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
