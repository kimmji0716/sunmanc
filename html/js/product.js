$(function(){
  // 제품 카테고리 선택
  $('.category').find('a').click(function(){
    $('a').removeClass('on')
    $(this).addClass('on')
  });
  // 제품 정렬 순서 드롭다운
  $('.product-wrap .order-list-wrap').click(function(){
    $('.other-list-wrap').stop().slideDown();
  })
  $('.other-list-wrap').mouseover(function(){
    $(this).stop().slideDown();
  });
  $('.product-wrap .order-list-wrap').mouseout(function(){
    $('.other-list-wrap').stop().slideUp();
  });

  // 장바구니, 하트 표시
  $('.product').mouseover(function(){
    $(this).find('.icon-wrap').stop().animate({
      'opacity' : '1'
    }, 200)
  }).mouseout(function(){
    $(this).find('.icon-wrap').stop().animate({
      'opacity' : '0'
    }, 200)
  });
  
});