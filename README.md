# 포트폴리오 제작

<aside>
💡 제작 기간 : 2022 .1. 24 - 2022. 2.16 ~ 진행중

</aside>

## 기여도

| 디자인 | 100% |
| --- | --- |
| 코딩 | 100% |

# 1. 웹 페이지 기획 컨셉

![프로젝트 최종 보고서_0003.jpg](README/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%B5%9C%EC%A2%85_%EB%B3%B4%EA%B3%A0%EC%84%9C_0003.jpg)

잡지의 포스터의 트렌디한 디자인을 컨셉으로 이미지의 아치형, 타이포그라피 요소, 디자인적 요소인 라인을 차용하여 디자인 하였음

![프로젝트 최종 보고서_0004.jpg](README/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%B5%9C%EC%A2%85_%EB%B3%B4%EA%B3%A0%EC%84%9C_0004.jpg)

### 컬러

 보기에 편안한 베이지 색을 전체 바탕색으로 사용하였으며, 주황색을 강조, 포인트 색을 써서 밋밋한 바탕에 활기를 주기위해 선택하였음.

### 폰트

영문체는 ‘Abril Fatface’ 로 폰트 그대로 사용해도 타이포그라피 요소를 가지고 있고, 기획했던 디자인 컨셉과 어울려 선택하였음

한글은 ‘송명’폰트로 기본 폰트인 바탕체와 신중하고 신뢰감을 주는 명조체의 특징을 가지고 있다고 생각하여 기본, 신중, 신뢰를 주기위해 선택하였음

# 2. 페이지 구성 디자인 및 상세 설명

![프로젝트 최종 보고서_0005.jpg](README/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%B5%9C%EC%A2%85_%EB%B3%B4%EA%B3%A0%EC%84%9C_0005.jpg)

원페이지 구성되어 있으며 HOME, ABOUT ME, PROJECT(TEAM, PERSONAL, SIDE), CONNECT로 구성

## 2-1. HOME

창이 열리자마자 애니메이션이 동작하도록 하였음

![프로젝트 최종 보고서_0006.jpg](README/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%B5%9C%EC%A2%85_%EB%B3%B4%EA%B3%A0%EC%84%9C_0006.jpg)

### 1.라인구성 애니메이션

```jsx
$(document).ready(function(){  
             
        //꾸밈라인 애니메이션
        $('.nav_side_line').stop().animate({'height':'65%'},1000);
        $('.nav_line').stop().animate({'width':'95%'},1000);
        $('.decoration_vertical .line').stop().animate({'height':'60%'},1500);
        $('#intro .decoration_horizontal').stop().animate({'width':'90%'})
    
```

가로라인은 오른쪽에서 왼쪽으로 / 세로라인은 위에서 아래로 

제이쿼리로 CSS의 width값 또는 height값의 변화를 주어 그려지듯이 나타나도록 구현

### 2. 배경(아치형 이미지)이미지 애니메이션

```jsx
//배경꾸밈 애니메이션       
        $('.flower, .leaf, .stamp').stop().css({'opacity':'1','transition-delay':'1s'});
//intro 배경 이미지 화면크기에 따른 이미지 크기 변화
        if($(window).width() <= 754){
            $('.bg-imgs').css({'width':'400px','height': '500px','opacity':'1','top':'25%','left':'-20%','border-radius': '0'});
        }else if($(window).width() <= 1069){
            $('.bg-imgs').css({'width':'467px','height': '460px','opacity':'1','top':'25%','left':'-5%','border-radius': '0'});
        }else if($(window).width()>1500){
            $('.bg-imgs').css({'width':'600px','height': '600px','opacity':'1','top':'15%','left':'5%','border-radius': '0'});
        }else{
            $('.bg-imgs').css({'width':'467px','height': '460px','opacity':'1','top':'25%','left':'0%','border-radius': '0'});  
        }

        //intro 배경 이미지 화면 조절 시 이미지 크기 변화
        $(window).resize(function(){
            if($(this).width() <= 754){
                $('.bg-imgs').css({'width':'400px','height': '500px','opacity':'1','top':'25%','left':'-20%','border-radius': '0'});
            }else if($(window).width() <= 1069){
                $('.bg-imgs').css({'width':'467px','height': '460px','opacity':'1','top':'25%','left':'-5%','border-radius': '0'});
            }else if($(window).width()>1500){
                $('.bg-imgs').css({'width':'600px','height': '600px','opacity':'1','top':'15%','left':'5%','border-radius': '0'});
            }else{
                $('.bg-imgs').css({'width':'467px','height': '460px','opacity':'1','top':'25%','left':'7%','border-radius': '0'});
            }
        })
```

이미지를 감싸고 있는 div의 크기가 커지면서 안에 있는 이미지들이 보이도록 하였음.

반응형으로 제작하려다 보니, 새로고침했을때 오류가 생겨 화면크기에 맞춘 이미지와 화면 조절시 알맞은 이미지 크기를 설정하였음

### 3. 콘텐츠(텍스트)애니메이션

```jsx
//콘텐츠 애니메이션
        $('#intro h3 span').stop().delay(1500).animate({'bottom': '0'},500);
        $('#intro .textwrap article h2 span').stop().delay(1700).animate({'bottom': '0'},500);
        // .addClass('textup');
        $('#intro .intro-cont span').stop().delay(2100).animate({'margin-top':'0'},800);    
        $('.gnb>li').eq(0).addClass('active');
}
```

각 요소의 영역을 지정하고, bottom또는 margin을 이용해 처음에는 보이 않다가 원래의 위치로 돌아오게 하면서 아래에서 위로 올라와보이도록 구현.

css의 transition-delay를 이용해 올라오는 시간차를 두어 순차적으로 올라와보이도록 구현함
(이부분은 제이쿼리나, 자바스크립트로 구현 할 수 있을 것 같은 부분이여서 추후에 수정할 예정)

## 2-2.ABOUT ME

![프로젝트 최종 보고서_0009.jpg](README/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%B5%9C%EC%A2%85_%EB%B3%B4%EA%B3%A0%EC%84%9C_0009.jpg)

### 1. SVG를 이용한 애니메이션

ABOUT ME 영역에 도달했을 때, SVG의 opacity:1로 하여 나타나게 하면서 애니메이션을 작동시킴 → [svg만들어주는 사이트](https://maxwellito.github.io/vivus-instant/)를 이용하여 쉽게 작업하였음

(추후에 svg애니메이션을 직접 js를 이용해 애니메이션을 만들고 싶음)

### 2. 호버 애니메이션

콘턴츠 중앙을 호버시 더 많은 정보를 볼 수 있게 호버 이벤트를 이용함.

## 2-3. PROJECT

![프로젝트 최종 보고서_0011.jpg](README/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%B5%9C%EC%A2%85_%EB%B3%B4%EA%B3%A0%EC%84%9C_0011.jpg)

 프로젝트 섹션에는 동적요소를 많이 사용하지 않고, 버튼 호버시 색상 변화만 주었음. 

## 2-4. MENU -NAV

![프로젝트 최종 보고서_0008.jpg](README/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EC%B5%9C%EC%A2%85_%EB%B3%B4%EA%B3%A0%EC%84%9C_0008.jpg)

### 1. 메뉴 언더바

 클릭 또는 해당 영역에 도달했을때 언더바가 사라졌다 생성됨

```jsx
//슬라이드 시 메뉴 아래바 생성 
        var navoffset = 100;
        var introTop = $('#intro').offset().top;
        var aboutMeTop = $('#aboutMe').offset().top-navoffset;
        var projectTop = $('#project').offset().top-navoffset;
        var connectTop = $('#connect').offset().top-navoffset;

        console.log(introTop);
        console.log(aboutMeTop);

        $(window).scroll(function(e){
            var scrollTop = $(this).scrollTop();
            if(scrollTop>=introTop && scrollTop <aboutMeTop){
                $('.pc_menu>li').removeClass('active');
                $('.pc_menu>li').eq(0).addClass('active');
            }
            if(scrollTop>=aboutMeTop && scrollTop <projectTop){
                $('.pc_menu>li').removeClass('active');
                $('.pc_menu>li').eq(1).addClass('active');
                //svg애니메이션 
                $('#aboutMe svg').css('display','block');
            }
            if(scrollTop>=projectTop && scrollTop <connectTop){
                $('.pc_menu>li').removeClass('active');
                $('.pc_menu>li').eq(2).addClass('active');
            }
             if(scrollTop>=connectTop){
                $('.pc_menu>li').removeClass('active');
                $('.pc_menu>li').eq(3).addClass('active');
            }
        
        })
```

### 2. 모바일 메뉴

```jsx
//모바일 토글 메뉴 버튼 클릭 효과
    var btn_menu = $('.btn_mobile_menu');
    var menu_list =$('.list_mobile_menu'); 

    function moveOut(){
        btn_menu.removeClass('active').css('z-index' , '10');
        menu_list.stop().animate({
            'right':'-100%',
            'display': 'block'
        });
    }
    function moveIn(){
        btn_menu.addClass('active').css('z-index' , '10');  
        menu_list.stop().animate({
            'right':'0%',
            'display': 'block'
        });  
    }

    btn_menu.click(function(){        
            if(btn_menu.hasClass('active')){
                moveOut();
            }else{
                moveIn();
            }    
        });
    menu_list.click(function(){
        moveOut()
    })
```

moveOut, moveIn 함수를 만들어 함수출력으로 코드를 재사용 할 수 있게 구현해봤음

모바일일때의 메뉴의 토글버튼을 클릭하면 x자로 변하도록 하였음

# 3. 프로젝트를 마치며

욕심내서 포트폴리오를 하드코딩으로 만들었다. 내가 예상한 것보다는 잘 나온 것 같지만 반응형으로 제작하려고 하니, 조금씩 오류나 고쳐야 할 것 들이 생겨나고 코드가 뒤죽박죽으로 써지는 것 같아 체계적으로 기획하고 계획하며 프로젝트에 임해야 한다고 다시 한번 느꼈다. 

아직 반응형 오류들이 있어, 그것들을 고쳐야 하는 과제가 있다. 이 프로젝트를 조금씩 고치다보면 반응형에 대해 더 많은 이해를 할 수 있지 않을까하는 기대를 가져본다.