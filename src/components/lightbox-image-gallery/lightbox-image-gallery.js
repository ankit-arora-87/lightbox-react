import React from "react";
import "./lightbox-image-gallery.css";

class LightboxImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1,
      isModalOpen: false
    };
  }

  openModal = n => {
    this.setState(
      {
        isModalOpen: true
      },
      () => {
        this.currentSlide(n);
      }
    );
  };

  currentSlide = n => {
    this.setState({
      slideIndex: n
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  };

  plusSlides = n => {
    this.setState(prevState => {
      return {
        slideIndex:
          prevState.slideIndex + n > this.props.images.length
            ? 1
            : prevState.slideIndex + n === 0
            ? this.props.images.length
            : prevState.slideIndex + n
      };
    });
  };
  render() {
    const { images } = this.props;
    return (
      <div>
        <div className="row">
          {images.map(image => (
            <div className="column" key={image.id}>
              <img
                src={`/images/${image.image}`}
                onClick={() => this.openModal(image.id)}
                className="hover-shadow"
                alt={`small ${image.image}`}
              />
            </div>
          ))}
        </div>

        <div
          id="myModal"
          className="modal"
          style={
            this.state.isModalOpen === true
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <span className="close cursor" onClick={this.closeModal}>
            &times;
          </span>
          <div className="modal-content">
            {images.map(image => (
              <div
                className="slider"
                key={`wide_` + image.id}
                style={
                  this.state.slideIndex === image.id
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <div className="pager">
                  {image.id} / {images.length}
                </div>
                <img
                  src={`/images/${image.image_wide}`}
                  style={{ width: "100%" }}
                  alt={`${image.image_wide}`}
                />
              </div>
            ))}
            <span className="prev" onClick={() => this.plusSlides(-1)}>
              &#10094;
            </span>
            <span className="next" onClick={() => this.plusSlides(1)}>
              &#10095;
            </span>
            <div className="caption-container">
              <p id="caption"></p>
              {images[this.state.slideIndex - 1].caption}
            </div>
            {images.map(image => (
              <div className="column" key={image.id}>
                <img
                  src={`/images/${image.image}`}
                  onClick={() => this.currentSlide(image.id)}
                  className={
                    `"thumbnail"` + (this.state.slideIndex === image.id)
                      ? " active"
                      : ""
                  }
                  alt={`thumbnail ${image.image}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default LightboxImageGallery;
