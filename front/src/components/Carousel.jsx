
import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ mediaItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = mediaItems.length;
  const carouselRef = useRef(null);

  //Manejo de carousel
  
  const goToSlide = (index) => {
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    setCurrentIndex(index);
  };

  const goNext = () => {
    goToSlide(currentIndex + 1);
  };

  const goPrev = () => {
    goToSlide(currentIndex - 1);
  };

  // Manejo de eventos de teclado para navegación
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        goNext();
      } else if (e.key === 'ArrowLeft') {
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="carousel" ref={carouselRef}>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            {item.type === 'video' ? (
              <video src={item.src} autoPlay loop muted></video>
            ) : (
              <img src={item.src} alt={item.alt || `Slide ${index + 1}`} />
            )}
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={goPrev} aria-label="Previous slide">
        &#10094;
      </button>
      <button className="carousel-control next" onClick={goNext} aria-label="Next slide">
        &#10095;
      </button>
      <div className="carousel-indicators">
        {mediaItems.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
