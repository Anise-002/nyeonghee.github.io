$(function(){

    // INFOR 페이지

    //페이지 실행되자마자
    $(document).ready(function(){
        //꾸밈라인 애니메이션
        $('.nav_side_line').stop().animate({'height':'65%'},1000);
        $('.nav_line').stop().animate({'width':'95%'},1000);
        $('.decoration_vertical .line').stop().animate({'height':'60%'},1500);
        $('#intro .decoration_horizontal').stop().animate({'width':'90%'})
    
        //배경꾸밈 애니메이션
        $('.flower, .leaf, .stamp').stop().css({'opacity':'1','transition-delay':'1s'});
        $('.bg-imgs').css({'width':'467px','height': '460px','opacity':'1','top':'25%','left':'7%','border-radius': '0'});
        
        //콘텐츠 애니메이션
        $('#intro h3 span').stop().delay(1500).animate({'bottom': '0'},500);
        $('#intro .textwrap article').addClass('textup');
        $('#intro .intro-cont span').stop().delay(2100).animate({'margin-top':'0'},800);
    })
    //메뉴 클릭시 아래바 생성
    $('.gnb>li').click(function(){
        $('.gnb>li').removeClass('active');
        $(this).addClass('active');
    })

})