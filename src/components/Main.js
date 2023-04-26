import { Services, AboutUs, SocialMedia } from "./index";

const Main = ({ onSelectImage }) => {
  return (
    <div>
      <Services />
      <AboutUs />
      <SocialMedia onSelectImage={onSelectImage} />
    </div>
  );
};

export default Main;
