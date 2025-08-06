import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import image1 from '../assets/Protein-Powders.jpg';
import image2 from '../assets/Weight-Gainer.jpg';
import image3 from '../assets/Weight-Gainer.jpg';

function HeroCarousel() {
  const images = [image1, image2, image3, image1, image2];

  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" style={{ overflow: 'hidden' }}>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {images.map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
            <div className="carousel-caption d-none d-sm-block">
              <p className="fs-6">58 Nutrition Station</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HeroCarousel;
