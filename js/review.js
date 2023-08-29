$(function(){
  // 제품 정렬 드롭다운
  $('.order-list-wrap').click(function(){
    $(this).find('.other-list-wrap').stop().slideDown();
  });
  $('.other-list-wrap').mouseover(function(){
    $(this).stop().slideDown();
  });
  $('.order-list-wrap').mouseout(function(){
    $(this).find('.other-list-wrap').stop().slideUp();
  });

  //제품 선택 드롭다운
  $('.category-list-wrap').click(function(){
    $(this).find('.other-list-wrap').stop().slideDown();
  });
  $('.other-list-wrap').mouseover(function(){
    $(this).stop().slideDown();
  });
  $('.category-list-wrap').mouseout(function(){
    $(this).find('.other-list-wrap').stop().slideUp();
  });

  //페이지네이션 on
  $('.number span').click(function(){
    $('.number span').removeClass('on')
    $(this).addClass('on')

  });
});