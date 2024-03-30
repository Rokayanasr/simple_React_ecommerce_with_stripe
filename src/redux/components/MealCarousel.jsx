import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

const MealCarousel = () => {
  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState(null);

  // Define your AfroStyles array here
  const AfroStyles = [
    { id: 1, src: "../assets/header.jpg", alt: "Image 1" },
    { id: 2, src: "../assets/exploremeals.jpg", alt: "Image 2" },
    { id: 2, src: "../assets/exploremeals.jpg", alt: "Image 2" }
    // Add more items as needed
  ];

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    lazyLoad: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,
  };

  return (
    <>
      <Slider {...settings} asNavFor={nav1} ref={(slider) => setSlider1(slider)}>
        {/* Add your Slider content here */}
      </Slider>
      <div className="thumb-wrapper">
        {AfroStyles.map((item, idx) => (
          <div
            key={item.id}
            className={currentSlide === idx ? "active" : null}
            onClick={() => {
              slider1?.slickGoTo(idx);
            }}
          >
            <img src={item.src} alt={item.alt} />
            {currentSlide}
          </div>
        ))}
      </div>
    </>
  );
};

export default MealCarousel;
