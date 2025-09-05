import './style.css';
import $ from 'jquery';
import * as bootstrap from 'bootstrap';
// https://kenwheeler.github.io/slick/
import '@slick/slick.min.js';

window.$ = window.jQuery = $;

$( () => {
  const offcanvasNavbarToggleBtn = $('#offcanvasNavbarToggleBtn');
    // Offcanvas Header
  const offcanvasNavbar = $("#offcanvasNavbar");
  const offcanvasNavbarLabel = $("#offcanvasNavbarLabel");
  const offcanvasNavbarBackBtn = $("#offcanvasNavbarBackBtn");
  // Categories Menu
  const categories =$("#categories");
  const categoriesMenu = $("#categories__menu");
  const categoriesToggleBtn = $("#categories__toggle-btn");
  // Categories Submenu
  const submenu = $("#categories__submenu");
  const submenuContainer = $("#categories__submenu-container");
  const expandableCategories = $("#categories__menu .categories__expandable-category");

  let activeMenuLevel = 1;

  // Reset mobile menu on opening
  offcanvasNavbarToggleBtn.on("click", function() {
    activeMenuLevel = 1;
    categoriesMenu.addClass("hide");
    offcanvasNavbarLabel.text("Menu");
    submenuContainer.empty();
    submenu.addClass("mobile-hide");
    offcanvasNavbarBackBtn.addClass("hide");
  });

  // Open/Close categories when clik button
  categoriesToggleBtn.on("click", function() {
    if (categoriesMenu.hasClass("hide")) {
      // reset submenu when open category menu
      submenuContainer.empty();
      submenu.addClass("mobile-hide");
      categoriesMenu.removeClass("hide");
      offcanvasNavbarLabel.text("Damskie buty skórzane");
      offcanvasNavbarBackBtn.removeClass("hide");
      activeMenuLevel = 2;
    } else {
      categoriesMenu.addClass("hide");
      offcanvasNavbarLabel.text("Menu");
      activeMenuLevel = 1;
    }
  });

  // Close categories when clik outside navigation
  $(document).on("click", function (event) {
    if ( (!offcanvasNavbar.has(event.target).length) && (!categoriesMenu.hasClass("hide")) ) {
      categoriesMenu.addClass("hide");
      offcanvasNavbarLabel.text("Menu");
      activeMenuLevel = 1;
    }
  });

  // Open/Close submenu when clik category button
  expandableCategories.each(function (index, element) {
    const elementObject = $( element );
    const button = elementObject.find(".open-category-button");
    const templateContent = elementObject.find(".category-list-template").html();
    
    button.on("click", function() {
      submenu.removeClass("mobile-hide");
      submenuContainer.empty();
      submenuContainer.append(templateContent);
      offcanvasNavbarLabel.text(button.text());
      activeMenuLevel = 3;
    });
  });

  // Go back in category levels
  offcanvasNavbarBackBtn.on("click", function() {
    console.log(activeMenuLevel);

    if (activeMenuLevel === 3) {
      submenu.addClass("mobile-hide");
      offcanvasNavbarLabel.text("Damskie buty skórzane");
      activeMenuLevel = 2;
    } else {
      categoriesMenu.addClass("hide");
      offcanvasNavbarLabel.text("Menu");
      $( this ).addClass("hide");
      activeMenuLevel = 1;
    }
  });

  // Initializing Intro Slick Carousel
  $('.intro-carousel').slick({
    autoplay: true,
    infinite: true,
    dots: true,
    arrows: true,
    appendArrows: $("#intro-carousel-controls"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  // Initializing Slick Slider
  $('.promoted-carousel').slick({
    autoplay: true,
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    appendArrows: $("#promoted-carousel-controls"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20%",
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "32px",
          dots: false,
        }
      },
    ]
  });
});