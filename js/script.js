$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
      responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
  });
});