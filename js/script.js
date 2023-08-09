$(function(){
    $('.slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:".left-icon",
        nextArrow:".right-icon",
      });

      $('.review-box').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.prev',
        nextArrow: '.next',
      });

      });
