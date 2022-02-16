$(function(){
    var user_height = window.innerHeight;
    $(window).scroll(function(){
        var height = $(document).scrollTop();
        console.log("스크롤좌표:"+height);
        console.log("화면높이"+user_height)
        console.log("스크롤좌표:"+height);
        console.log("화면높이"+user_height)
        if(height > user_height*2 - user_height/4 && height < user_height*3 - user_height/10){
            $(".marvel .short_cut").animate({right:0},700);
            $(".marvel > img").eq(0).animate({left:"12%"},700)
            $(".marvel > img").eq(1).animate({top:"5%"},700)
            $(".marvel > img").eq(2).animate({left:"21%"},700)
            $(".marvel > img").eq(3).animate({left:0},700)
            $(".marvel > img").eq(4).animate({top:"59%"},1000)
        }
        else if(height > user_height*3 - user_height/10 && height < user_height*4 - user_height/3){
            $(".pixar .short_cut").animate({right:0},300);
            $(".pixar > img").eq(1).animate({left:"0",bottom:"-10%"},800,"linear")
            $(".pixar > img").eq(2).animate({left:"30%",bottom:"5%"},800,"linear")
            $(".pixar > img").eq(3).animate({left:"45%",bottom:"3%"},800,"linear")
            $(".pixar > img").eq(4).animate({left:"60%",bottom:"20%"},800,"linear")
            $(".pixar > img").eq(5).animate({left:"45%",bottom:"35%"},800,"linear")
            $(".pixar > img").eq(6).animate({left:"1%",top:"50%"},800,"linear")
            $(".pixar > img").eq(7).animate({left:"60%",top:"45%"},800,"linear")
            $(".pixar > img").eq(8).animate({left:"20%",top:"10%"},800,"linear")
            $(".pixar > img").eq(9).animate({left:"50%",top:"7%"},800,"linear")
            $(".pixar > img").eq(10).animate({left:"65%",top:"14%"},800,"linear")    
        }else if(height > user_height*4 - user_height/3){
            $('.logo').addClass('on');
            $('.jaguar').stop().delay(1000).animate({'width' : '18%'},1000);
            $('.penguin').stop().delay(1500).animate({'bottom' : '0'},1000);
            $('.dolphin').addClass('rotate');        
        }
        // 네비 색상
        if(height < user_height){
            $("header").css("background","rgba(0,9,70,0.8")
        }else if(height > user_height-50 && height < user_height*2-50){
            $("header").css("background","rgba(33,4,74,0.8");
        }else if(height > user_height*2-50 && height < user_height*3-50){
            $("header").css("background","rgba(130,20,20,0.8");
        }else if(height > user_height*3-50 && height < user_height*4-50){
            $("header").css("background","rgba(20,84,130,0.8");
        }else if(height > user_height*4-50 && height < user_height*5-50){
            $("header").css("background","rgba(255,216,0,0.8");
        }else if(height > user_height*5-50){
            $("header").css("background","rgba(33,4,74,0.8");
        }
    });

    //디즈니
    $('.left_box').stop().animate({'left' : '0'},1000);
    $('.right_box').stop().delay(500).animate({'right' : '0'},1000);
    $('.main-cont').stop().delay(1700).animate({'opacity' : '1'},1700);

    
    $('.wallpaper').hover(function(){
        $(this).css('width','90%');    
        var select = $(this).attr('id'); 
        console.log(select);
        if(select =='beast'){
            $(this).css({
                'background' : 'url(./index/images/disney_img/hover_bg_1.gif) no-repeat 100% 100%',
                'background-size' : 'cover'
            });
            $(this).find('img').css({
                'left' : '-120%'
            })

        }else if(select =='mermaid'){
            $(this).css({
                'background': 'url(./index/images/disney_img/hover_bg_2.gif) no-repeat 100% 100%',
                'background-size' : 'cover'
            });
            $(this).find('img').css({
                'left' : '-120%'
            })
        }else if(select == 'frozen1'){
            $(this).css({
                'background' :'url(./index/images/disney_img/elsa_wallpaper.gif) no-repeat 100% 100%',
                'background-size' : 'cover',
                
            });
            $(this).find('img').css({
                'left' : '-120%'
            })

        }else if(select =='frozen2'){
            $(this).css({
                'background' : 'url(./index/images/disney_img/hover_bg_4.gif) no-repeat 100% 100%',
                'background-size' : 'cover',
                'background-postion' : 'center'
            });
            $(this).find('img').css({
                'right' : '-120%'
            })
        }else if(select =='aladdin'){
            $(this).css({
                'background' : 'url(./index/images/disney_img/hover_bg_5.gif) no-repeat',
                'background-size' : 'cover',
                'background-postion' : 'center'
            });
            $(this).find('img').css({
                'right' : '-120%'
            })
        }else if(select =='mulan'){
            $(this).css({
                'background' : 'url(./index/images/disney_img/hover_bg_6.gif) no-repeat 100% 100%',
                'background-size' : 'cover',
                'background-postion' : 'center'
            });
            $(this).find('img').css({
                'right' : '-120%'
            })
        } 
        
    },
    function(){
        var select = $(this).attr('id'); 
        $(this).css('width' , '33.3%');
        if(select == 'frozen1'){
            $(this).css({
                'background' :'url(./index/images/disney_img/bg-3.jpg) no-repeat 100% 100%',
                'background-size' : 'cover'
                
            });
            $(this).find('img').css({
                'left' : '-85%'
            })
        }else if(select =='mermaid'){
            $(this).css({
                'background' : 'url(./index/images/disney_img/bg-2.jpg) no-repeat 100% 100%',
                'background-size' : 'cover'
            });
            $(this).find('img').css({
                'left' : '-40%'
            })
        }else if(select =='beast'){
            $(this).css({
                'background' :'url(./index/images/disney_img/bg-1.jpg) no-repeat 100% 100%',
                'background-size' : 'cover',
                'background-postion' : 'center'
            });
            $(this).find('img').css({
                'left' : '-60%'
            })
        }else if(select =='frozen2'){
            $(this).css({
                'background' : 'url(./index/images/disney_img/bg-4.jpg) no-repeat 100% 100%',
                'background-size' : 'cover',
                'background-postion' : 'center'
            });
            $(this).find('img').css({
                'right' : 0
            })
        }else if(select =='aladdin'){
            $(this).css({
                'background' : 'url(./index/images/disney_img/bg-5.jpg) no-repeat 100% 100%',
                'background-size' : 'cover',
                'background-postion' : 'center'
            });
            $(this).find('img').css({
                'right' : '-30%'
            })
        }else if(select =='mulan'){
            $(this).css({
                'background' : 'url(./index/images/disney_img/bg-6.jpg) no-repeat',
                'background-size' : 'cover',
                'background-postion' : 'center'
        });
            $(this).find('img').css({
                'right' : '-100%'
            })
        }
        
    });




    //TOPICS 슬라이드

    var slides = document.querySelector('.topic_box_wrap'),
        slide = document.querySelectorAll('.topic_box_wrap li'),
        currentIndex = 0,
        slideCount = slide.length,
        slideHeight = 40,
        slideMargin = 5,
        slidesTopMargin = 120,
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next');

    makeClone();

    //슬라이드 복제
    function makeClone(){
        for(var i = 0;  i<slideCount; i++){
            //a.cloneNode(), a.cloneNode(true)-a의 자식요소까지 클론
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            //a.appendChild(b)- 요소 뒤에 추가한다.
            slides.appendChild(cloneSlide);
        }
        for(var i =slideCount-1; i>=0; i-- ){
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            //a.prepend(b)- 요소의 앞에 추가
            slides.prepend(cloneSlide);
        }
        updateWidth();
        setinitalPos();
        setTimeout(function(){
            slides.classList.add('animated');
        },100)
        
    }

    //클론된 상태의 ul의 width값 구하는 함수
    function updateWidth(){
        var currentSlide = document.querySelectorAll('.topic_box_wrap li');
        var newSlideCount = currentSlide.length;

        var newHeight = (slideHeight + slideMargin) * newSlideCount -slideMargin + 'vh';
        slides.style.height = newHeight;
    }
    //초기 ul에 위치를 가운데 위치 시키는 함수
    function setinitalPos(){
        var initalTranslateValue = -(slideHeight + slideMargin) * slideCount;
        // translate
        slides.style.transform = 'translateY('+initalTranslateValue+'vh)';
    }

    //버튼(next, prev) 클릭 이벤트
    nextBtn.addEventListener('click',function(){
        moveSlide(currentIndex+1);
    });
    prevBtn.addEventListener('click',function(){
        moveSlide(currentIndex-1);
    });

    function moveSlide(num){
        slides.style.top = -num * (slideHeight + slideMargin) +'vh';
        currentIndex = num;
        console.log(currentIndex,slideCount );

        if(currentIndex == slideCount || currentIndex == -slideCount ){
            setTimeout(function(){
                slides.classList.remove('animated');
                slides.style.top = '0px';
                currentIndex = 0;
            },500);
            setTimeout(function(){
                slides.classList.add('animated');
            },600);
        }
    };
    //clearInterval(timer)

    var  timer = undefined;
    //자동 넘김 슬라이드
    function autoSlide(){
        if(timer == undefined){
            timer = setInterval(function(){
                moveSlide(currentIndex+1);
            },2800);
        }
    }
    autoSlide();

    //마우스 오버하면 슬라이드 멈춤
    function stopSlide(){
        clearInterval(timer);
        timer = undefined;
    };

    slides.addEventListener('mouseenter', function(){
        stopSlide();
    });
    slides.addEventListener('mouseleave', function(){
        autoSlide();
    });
    
    $(".marvel .short_cut").hover(function(){
        $(".black").css("opacity","1")
    },function(){
        $(".black").css("opacity","0")
    })


    // 픽사 애니메이션
    $(".pixar").click(function(){
        $(".pixar .short_cut").animate({right:0},300);
        $(".pixar > img").eq(1).animate({left:"0",bottom:"-10%"},800,"linear")
        $(".pixar > img").eq(2).animate({left:"30%",bottom:"5%"},800,"linear")
        $(".pixar > img").eq(3).animate({left:"45%",bottom:"3%"},800,"linear")
        $(".pixar > img").eq(4).animate({left:"60%",bottom:"20%"},800,"linear")
        $(".pixar > img").eq(5).animate({left:"45%",bottom:"35%"},800,"linear")
        $(".pixar > img").eq(6).animate({left:"1%",top:"50%"},800,"linear")
        $(".pixar > img").eq(7).animate({left:"60%",top:"45%"},800,"linear")
        $(".pixar > img").eq(8).animate({left:"20%",top:"10%"},800,"linear")
        $(".pixar > img").eq(9).animate({left:"50%",top:"7%"},800,"linear")
        $(".pixar > img").eq(10).animate({left:"65%",top:"14%"},800,"linear")
    // 픽사 패럴렉스 효과
    })
    $(".pixar").mousemove(function(e){
        var x = e.pageX - $(".pixar").offset().left;
        var y = e.pageY - $(".pixar").offset().top;
        var i = window.innerWidth;
        console.log("x좌표:" + x);
        console.log("y좌표:" + y);
        console.log("화면너비:" + i);
        $(".fast").css("transform","translate("+ (x/10 - i/20) +"px,"+ (y/10 - i/20) +"px)")
        $(".normal").css("transform","translate("+ (x/20 - i/40) +"px,"+ (y/20 - i/40) +"px)")
        $(".slow").css("transform","translate("+ (x/30 - i/60) +"px,"+ (y/30 - i/60) +"px)")
    })
    $("body").mousemove(function(e){
        var x = e.pageX - $(".pixar").offset().left;
        var y = e.pageY - $(".pixar").offset().top;
        var i = window.innerWidth;
        $(".house").css("transform","translate("+ (x/50 - i/50) +"px,"+ (y/50 - i/50) +"px)")
    })

    
})