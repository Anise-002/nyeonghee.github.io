$(function(){

  //2003년대 애니메이션- 위치 이동
  var $section1 = $('.section1');
  var $section2 = $('.section2');
  var $section3 = $('.section3');
  var $section4 = $('.section4');
  var $offset = 50;
  var  $section1OST =  $section1.offset().top - $offset;
  var  $section2OST =  $section2.offset().top - $offset;
  var  $section3OST =  $section3.offset().top - $offset;
  var  $section4OST =  $section4.offset().top - $offset;
  var $section1wrap = $section1.find('.year_wrap');
  var $section2wrap = $section2.find('.year_wrap');;
  var $section3wrap = $section3.find('.year_wrap');;
  var $section4wrap = $section4.find('.year_wrap');;

  console.log($section1.find('.poster_wrap').find('div').length);

  $(window).scroll(function(){
    
    if($(this).scrollTop()> $section1OST){
      $section1.find('div').addClass('animate');
      $section1wrap.find('h2').addClass('textup');  
      $section1wrap.find('p').addClass('animate'); 
      var num =0;
      for(i=0; i<$section1.find('.poster_wrap').find('div').length; i++){
        $section1.find('.poster_wrap').find('div').eq(i).css('transition-delay',num+'s');
        num = 0.1*i;
      }     
    }
    if($(this).scrollTop()> $section2OST){
      $section2.find('div').addClass('animate');
      $section2wrap.find('h2').addClass('textup');
      $section2wrap.find('p').addClass('animate');  
      var num =0;
      for(i=0; i<$section2.find('.poster_wrap').find('div').length; i++){
        $section2.find('.poster_wrap').find('div').eq(i).css('transition-delay',num+'s');
        num = 0.1*i;
      }  
    }
    if($(this).scrollTop()> $section3OST){
      $section3.find('div').addClass('animate');
      $section3wrap.find('h2').addClass('textup');
      $section3wrap.find('p').addClass('animate'); 
      var num =0; 
      for(i=0; i<$section3.find('.poster_wrap').find('div').length; i++){
        $section3.find('.poster_wrap').find('div').eq(i).css('transition-delay',num+'s');
        num = 0.1*i;
      }  
    }
    if($(this).scrollTop()> $section4OST){
      $section4.find('div').addClass('animate');
      $section4wrap.find('h2').addClass('textup');
      $section4wrap.find('p').addClass('animate');
      var num =0;  
      for(i=0; i<$section4.find('.poster_wrap').find('div').length; i++){
        $section4.find('.poster_wrap').find('div').eq(i).css('transition-delay',num+'s');
        num = 0.1*i;
      }  
    }
  });
 
  //포스터 호버했을때 이벤트
  $('.poster').hover(function(){
    $(this).css({
      'transform' : 'scale(1.2)',
      'z-index' : '10',
      'opacity' : "1",
      'transition-delay' : 'none'
    });
    $(this).find('.poster-left').css('display','block').stop().animate({'left':'-230px','opacity' : "1",'visibility':'visible'},300);
    $(this).find('.poster-right').css('display','block').stop().animate({'right':'-230px','opacity' : "1",'visibility': 'visible'},300);
    $('.hover-bg').show();
    $(this).siblings('div').css({'opacity' : '0.3', 'z-index' : '1'});    
  },
  function(){
    $(this).css({
      'transform' : 'scale(1)',
      'z-index' : '10',
      'opacity' : "1",
      'transition-delay' : 'none'
    });
    $(this).find('.poster-left').css('display','none').stop().animate({'left':'-600px','opacity' : "0"},300);
    $(this).find('.poster-right').css('display','none').stop().animate({'right':'-600px','opacity' : "0"},300);
    $('.hover-bg').hide();
    $(this).siblings('div').css({'opacity' : '1'})
  }
)
});




