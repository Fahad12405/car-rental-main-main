import React, { useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.scss';

const ImageSlider = () => {
  const carouselRef = useRef(null); // Reference to the carousel

  // Scroll to the next image
  const handleNext = () => {
    carouselRef.current.next();
  };

  // Scroll to the previous image
  const handlePrev = () => {
    carouselRef.current.prev();
  };

  return (
    <div className="slider-container">
      <Carousel
        interval={3000}
        pause="hover"
        indicators={true}
        fade={true}
        ref={carouselRef}  // Attach ref to the Carousel component
      >
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="First slide"
          />
          <Carousel.Caption className="slider-caption">
            <h3>Experience Luxury Rides</h3>
            <p>Drive the finest cars at unbeatable prices.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="https://images.unsplash.com/photo-1615887110697-0819ec23465f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
          />
          <Carousel.Caption className="slider-caption">
            <h3>SUVs for Every Adventure</h3>
            <p>Spacious, comfortable, and perfect for any journey.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Third slide"
          />
          <Carousel.Caption className="slider-caption">
            <h3>Affordable Economy Cars</h3>
            <p>Fuel-efficient and budget-friendly for everyday needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Custom Scroll Buttons */}
      <div className="slider-controls">
        <button className="scroll-btn prev-btn" onClick={handlePrev}>
          &lt;
        </button>
        <button className="scroll-btn next-btn" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;