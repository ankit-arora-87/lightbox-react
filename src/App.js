import React from "react";
import LightboxImageGallery from "./components/lightbox-image-gallery/lightbox-image-gallery";
import IMAGES_DATA from "./assets/images.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.images = IMAGES_DATA;
  }

  render() {
    return (
      <div className="App">
        <LightboxImageGallery images={this.images} />
      </div>
    );
  }
}

export default App;
