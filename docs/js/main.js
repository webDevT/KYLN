$(function(){

    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
        $('.menu').toggleClass('active');
    })

    $('.menu a').click(function(){
        $('.menu').removeClass('active');
        $('.menu-btn').removeClass('active');
        $('.header').removeClass('active');
    })

    
// ------start sticky header------

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.header').addClass("sticky");
    }
    else{
    $('.header').removeClass("sticky");
    }
    });
    
    //-------end sticky header--------
    $(".menu, .footer__menu").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке
    
        event.preventDefault();
    
    
    
        //забираем идентификатор бока с атрибута href
    
        var id  = $(this).attr('href'),
    
    
    
        //узнаем высоту от начала страницы до блока на который ссылается якорь
    
        top = $(id).offset().top;
    
    
    
        //анимируем переход на расстояние - top за 1500 мс
    
        $('body,html').animate({scrollTop: top}, 1500);
    
    });
    

});