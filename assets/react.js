$(document).ready(function(){
    $('.image-slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-chevron-right"></i></button>`,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                arrows: true,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                arrows: true,
                infinite: true,
              },
            },
          ],
    });
  });
          

  // $(document).ready(function(){
  //   $('.player-music-play').slick({
  //     slidesToShow: 1,
  //     autoplay: false,
  //     arrows:true,
  //     prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fas fa-arrow-left"></i></button>`,
  //       nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fas fa-arrow-right"></i></button>`,
  //     responsive: [
  //       {
  //         breakpoint: 1025,
  //         settings: {
  //           slidesToShow: 1,
  //           arrows: true,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           arrows: true,
  //           infinite: true,
  //         },
  //       },
  //     ],
  //   });
  // });
      

