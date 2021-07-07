$(function() {
  $('.slider').slick({
    arrows: false,
    centerMode: true, 
    centerPadding:'100px', 
    slidesToShow: 3, 
    responsive: [{
      breakpoint: 768, 
      settings: {
        centerPadding:'50px',
        slidesToShow: 1, 
      }
    }]
  });

  window.onload = function() {
    scroll_effect();
  
    $(window).scroll(function(){
     scroll_effect();
    });
  
    function scroll_effect(){
     $('.effect-fade').each(function(){
      var elemPos = $(this).offset().top + 100;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
       $(this).addClass('effect-scroll');
      }
     });
    }
  };
    
    $('#toggle').on('click', function(){
      $('.menu , .menu_list, .top, .center, .bottom').toggleClass('open');
    });

    $('#menu').on('click', function(){
      $('.menu , .menu_list, .top, .center, .bottom').removeClass('open');
    });
  
});