$(document).ready(function () {

  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  })

  $(".drop-menu").click(function () {
    $(this).toggleClass("is-active");
    $(".main-menu").toggleClass("open");
    $("body, html").toggleClass("overflow");
    $(".header").toggleClass("bg");
});


  $(".main-menu li a").smoothScroll({
    speed: 1200,
  });

  $(".main-menu li a").on("click", function(e){
    e.preventDefault();
    $(".main-menu").removeClass("open");
    $(".drop-menu").removeClass("is-active");
    $("body, html").removeClass("overflow");
    $(".header").removeClass("bg");
  })

  $('.info-slider-wrap').each(function() {
    const $wrapper = $(this);               // родительский контейнер
    const $slider = $wrapper.find('.info-slider');
    const $dotsContainer = $wrapper.find('.info-slider-nav .dots');
    const $prevBtn = $wrapper.find('.info-slider-nav .prev');
    const $nextBtn = $wrapper.find('.info-slider-nav .next');
  
    $slider.slick({
      dots: true,
      appendDots: $dotsContainer,
      arrows: false,
      infinite: true,
      speed: 600
      // autoplay: true,
      // autoplaySpeed: 4000
    });
  
    // Привязываем кнопки навигации к конкретному слайдеру
    $prevBtn.on('click', function() {
      $slider.slick('slickPrev');
    });
  
    $nextBtn.on('click', function() {
      $slider.slick('slickNext');
    });
  });

  AOS.init();
});
