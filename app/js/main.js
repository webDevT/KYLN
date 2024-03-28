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
    
   
    
    

});