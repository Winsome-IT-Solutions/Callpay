$(document).ready(function() {
  $(".center-slider").slick({
    centerMode: true,
    arrows: true,
    centerPadding: "120px",
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    prevArrow: "<img src='img/left-arrow.png' class='arrow' />",
    nextArrow: "<img src='img/right-arrow.png' class='arrow' />",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
});
