import './style.css';
import * as bootstrap from 'bootstrap';
// https://kenwheeler.github.io/slick/
import './slick/slick.min.js';

$( () => {
  // Jquery Test
  $('#app').text('jQuery is working');

  // Initializing Slick Slider
  $('.your-class').slick();

});
