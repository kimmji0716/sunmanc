$(function(){

  let $slideWrap = $('.slide-wrap'),
      $slideGroup = $slideWrap.find('.slide-area'),
      $slides = $slideGroup.find('.slide'),
      $nav = $slideWrap.find('.slide-nav'),
      $indicator = $slideWrap.find('.slide-indi'),
      slideCount = $slides.length,
      indicatorHTML = '',
      curIndex = 0,
      timer;

  // 각 슬라이드 위치 설정(가로 배열), 인디케이터 생성
  $slides.each(function(i){
    $(this).css({left : 100*i + '%'}); /* left 값으로 index 번호만큼 곱해지면 0번은 0%, 1번은 100%, 2번은 200%, 3번은 300%만큼 이동한다. 가로로 쭉 배열되는 것 */
    indicatorHTML += '<a href="#">'+ (i+1) + '</a>'; /* 슬라이드의 개수만큼 생성됨, 안의 숫자도 index 번호 + 1만큼 늘어남*/
  });
  $indicator.html(indicatorHTML);
  

  // 슬라이드 이동 함수
  function gotoSlide(index) {
    $slideGroup.stop().animate({left : -100*index + '%'});
    curIndex = index; /* 2번을 보고 있으면 인덱스 번호가 1번이기 때문에 index 번호를 1번으로 저장한다 */

    let $btnPrev = $nav.find('.btn-prev');
    let $btnNext = $nav.find('.btn-next');

    // 처음 슬라이드 .btn-prev 안보이도록
    if (curIndex == 0) {
      $btnPrev.addClass('disable')
    } else {
      $btnPrev.removeClass('disable')
    }
    // 마지막 슬라이드 .btn-next 안보이도록
    if (curIndex == slideCount-1) {
      $btnNext.addClass('disable')
    } else {
      $btnNext.removeClass('disable')
    }

    // 현재 슬라이드 표시
    /* 내가 보고있는 슬라이드에만 active 표시 */
    $indicator.find('a').removeClass('active').eq(curIndex).addClass('active');
  }

  // .slide-nav(좌우버튼) 클릭 시 해당 슬라이드 표시
  $nav.find('a').click(function(e){
    e.preventDefault();
    if ($(this).hasClass('btn-prev')) {
      // 이전 버튼 클릭하면, index 번호에 1이 빼져 이전 index 번호로 돌아감
      gotoSlide(curIndex - 1);
    } else {
      // 다음 버튼 클릭하면, index 번호에 1이 더해져 다음 index 번호로 넘어감
      gotoSlide(curIndex + 1);
    };
  });

  // .slide-indi 클릭 시 해당 슬라이드 표시
  $indicator.find('a').click(function(e){
    e.preventDefault();
    /* active 클래스가 없다면 */
    if (!$(this).hasClass('active')) {
      /* 내가 클릭한 이것의 인덱스번호로 이동 */
      gotoSlide($(this).index());
    };
  });

  // 자동 슬라이드
  function startTimer() {
    timer = setInterval(function(){
      let lastIdx = (curIndex + 1) % slideCount; /* 공식 */
      gotoSlide(lastIdx);
    }, 5000)
  }
  startTimer();

  // 자동 슬라이드 중지
  function stopTimer() {
    clearInterval(timer);
  }

  // 슬라이드 마우스 호버 시 타이머 함수 중지, 벗어나면 실행
  $slideWrap.mouseover(function(){
    stopTimer();
  }).mouseout(function(){
    startTimer();
  });

  // 첫번째 슬라이드 표시
  gotoSlide(curIndex);


  // 헤더높이만큼 스크롤되면 고정
  var $header=$('.header');
  var $headerClone = $header.contents().clone();
  var header=$('.header').offset().top + $header.outerHeight(), $win=$(window);
  var $headerCloneCon = $('<header class="header-clone"></header>');

  $headerCloneCon.appendTo($('body'));
  $headerClone.appendTo($headerCloneCon)

  //윈도우 스크롤이 되면,
  // scrollTop이 헤더의 offset().top보다 커지면 / 참 > 헤더 브라우저 top:0 고정, 거짓 > 원래대로
  console.log(header);
  $(window).scroll(function (){
    if ($(this).scrollTop() > header) {
      $headerCloneCon.addClass('sticky');
      $('.header-clone').find('h1 picture img').attr({
        src:"./img/logo-pink.png"
      });
      $('.header-clone').find('h1 picture source').attr({
        srcset:"./img/logo-pink-mobile.png"
      });
      $('.header-clone').find('.ham-menu picture img').attr({
        src:"./img/hamburger-black.png"
      });
      $('.header-clone').find('.ham-menu picture source').attr({
        srcset:"./img/hamburger-black-mobile.png"
      });
    } else {
      $headerCloneCon.removeClass('sticky');
    }
  });
  
  // 햄버거 메뉴 클릭
  $('.ham-menu').click(function(){
    $('body').css({'overflow':'hidden'})
    $('.site-map').fadeIn();
    $('.header').css({
      'background-color' : '#fff',
      'border-bottom' : '1px solid #ececec'
    });
    $('.header').find('h1 picture img').attr({
      src:"./img/logo-pink.png"
    });
    $('.header').find('h1 picture source').attr({
      srcset:"./img/logo-pink-mobile.png"
    });
    $('.header-clone').find('.ham-menu img').attr({
      src:"./img/hamburger-white.png"
    });
    $('.header-clone').find('.ham-menu source').attr({
      srcset:"./img/hamburger-white-mobile.png"
    });
    $('.scroll-top').css({'display' : 'none'})
  });
  // 햄버거 드롭다운 메뉴 클릭
  $('.menu').click(function(){
    $(this).find('.depth2').slideToggle();
    $(this).find('.bottom-arrow').toggle();
    $(this).find('.top-arrow').toggle();
  })

  // x 클릭
  $('.x').click(function(){
    $('body').css({'overflow':''});
    $('.site-map').fadeOut();
    $('.header').css({
      'background-color' : 'transparent',
      'border-bottom' : 'none'
    })
    $('.header').find('h1 picture img').attr({
      src:"./img/logo-white.png"
    });
    $('.header').find('h1 picture source').attr({
      srcset:"./img/logo-white-mobile.png"
    });
    $('.header-clone').find('.ham-menu img').attr({
      src:"./img/hamburger-black.png"
    });
    $('.header-clone').find('.ham-menu source').attr({
      srcset:"./img/hamburger-black-mobile.png"
    });
    $('.scroll-top').css({'display' : 'block'})
  });


});