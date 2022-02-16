$(function(){
    $('#btnmenu').click(function(){
        $(this).fadeOut();
        $('section').addClass('on');
        $('nav').addClass('on');
    });
    $('nav li,nav h1').click(function(){
        $('#btnmenu').fadeIn();
        $('nav').removeClass('on');
        $('section').removeClass('on');
    })
    $('nav .submenu li').click(function(){
        $('#btnmenu').fadeIn();
        $('nav').removeClass('on');
        $('section').removeClass('on');

        var i= $(this).index();
        console.log(i);
        $('section div').removeClass('on');
        $('section div').eq(i).addClass('on');
       
        
    });
});