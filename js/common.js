$(function(){
  // 내비게이션 서브메뉴 표시
  $('.gnb .depth1').mouseover(function(){
    $(this).find('.depth2').stop().slideDown();
  }).mouseout(function(){
    $(this).find('.depth2').stop().slideUp();
  });

  // 스크롤탑
  $('.scroll-top').click(function(){
    window.scrollTo({ top: 0, behavior: "smooth" });
  })
});