$(function(){
  // 햄버거 메뉴 클릭
  $('.ham-menu').click(function(){
    $('.site-map').fadeIn();
    $('.header').find('.ham-menu img').attr({
      src:"./img/hamburger-white.png"
    });
    $('.header').find('.ham-menu source').attr({
      srcset:"./img/hamburger-white-mobile.png"
    });
    $('.scroll-top').css({'display' : 'none'})
  });

  // x 클릭
  $('.x').click(function(){
    $('body').css({'overflow':''});
    $('.site-map').fadeOut();
    $('.header').find('.ham-menu img').attr({
      src:"./img/hamburger-black.png"
    });
    $('.header').find('.ham-menu source').attr({
      srcset:"./img/hamburger-black-mobile.png"
    });
    $('.scroll-top').css({'display' : 'block'})

  });

  // 햄버거 드롭다운 메뉴 클릭
  $('.menu').click(function(){
    $(this).find('.depth2').slideToggle();
    $(this).find('.bottom-arrow').toggle();
    $(this).find('.top-arrow').toggle();
  });
});