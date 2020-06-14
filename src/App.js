import React from "react";
import LightboxImageGallery from "./components/lightbox-image-gallery/lightbox-image-gallery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.images = [
      {
        image: "img_1.jpg",
        image_wide: "img_1_wide.jpg",
        id: 1
      },
      {
        image: "img_2.jpg",
        image_wide: "img_2_wide.jpg",
        id: 2
      },
      {
        image: "img_3.jpg",
        image_wide: "img_3_wide.jpg",
        id: 3
      },
      {
        image: "img_4.jpg",
        image_wide: "img_4_wide.jpg",
        id: 4
      }
    ];
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
