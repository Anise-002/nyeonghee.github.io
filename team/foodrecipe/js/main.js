$(function(){

    //메뉴 클릭 
    $('nav ul>li').click(function(){
        $('nav>ul>li').removeClass('on');
        $(this).addClass('on');
    })

    //배너 슬라이드
    $('.bxslider').bxSlider({
        auto:true,
        silderWidth:'100%',
        silderHeight:'900px'

    });

    //본문5 핫한 레시피 슬라이드
    var i =1;
    $('.right').click(function(){
        if(i<6){
            $('#slide').animate({'margin-left':'-=290px'});
            i++
            console.log(i);
        };        
    });
    $('.left').click(function(){
        if(i>1 && i<7){
            $('#slide').animate({'margin-left':'+=290px'});
            i--;
            console.log(i);
        };        
    });

});



