$(function(){
  // faq 메뉴 드롭다운
  $('.q').click(function(){
    $(this).next('.a').slideToggle();
    $(this).find('.bottom-arrow').toggle();
    $(this).find('.top-arrow').toggle();
  });
  
  //페이지네이션 on
  $('.number span').click(function(){
    $('.number span').removeClass('on')
    $(this).addClass('on')
  });
});