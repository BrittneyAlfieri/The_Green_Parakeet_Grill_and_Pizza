import { Main, Header, Footer, ItemModal } from "./index";
import { useState } from "react";
import { Helmet } from "react-helmet";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedImage, setSelectedImage] = useState({});

  const handleSelectedCard = (image) => {
    setActiveModal("preview");
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Header />
      <Main onSelectImage={handleSelectedCard} />
      <Footer />
      {activeModal === "preview" && (
        <ItemModal
          selectedImage={selectedImage}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
