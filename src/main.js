import './style.css';
import * as bootstrap from 'bootstrap';
// https://kenwheeler.github.io/slick/
import './slick/slick.min.js';

$( () => {
  // Jquery Test
  $('#app').text('jQuery is working');

  // Initializing Intro Slick Carousel
  $('.intro-carousel').slick({
    autoplay: true,
    infinite: true,
    dots: true,
  });

  // Initializing Slick Slider
  $('.promoted-carousel').slick({
    autoplay: true,
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

});