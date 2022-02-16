$(function(){
    $('article').hover(
        function(){
            $(this).stop().animate({'height':'250px'},1000,function(){
                $(this).find('h2').fadeOut();
                $(this).find('h3').stop().animate({'left':'50px'},700);
                $(this).find('p').stop().animate({'right':'10px'},1000); 
                             
            })
            $(this).find('.video').stop().animate({'opacity':0.7},500);
            $(this).find('span').text('-').css({'color':'white'});  
        },
        function(){
            $(this).stop().animate({'height':'45px'},1000);
            $(this).find('.video').stop().animate({'opacity':0},500);
            $(this).find('h2').fadeIn(1000);
            $(this).find('h3').stop().animate({'left':'-600px'},500);
            $(this).find('p').stop().animate({'right':'-700px'},200);
            $(this).find('span').text('+').css({'color':'black'});



        });
});