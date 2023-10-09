window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    if (window.scrollY >= 150) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-deroulant");
    const navigation = document.querySelector(".navigation");

    menuToggle.addEventListener("click", function () {
        navigation.classList.toggle("active");
    });
});

$(document).ready(function(){
  $('.post-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: $('.suivant'),
    prevArrow: $('.precedent'),
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});
