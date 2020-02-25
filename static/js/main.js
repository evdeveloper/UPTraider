$(document).ready(function () {
 
    
    window.addEventListener("orientationchange", function(e) {
        location.reload();
    }, false);

    

    function windowSize() {
        if($(window).width() <= 414) {
            $('.items-item:first .items-item__text ').text('Самостоятельно торговать');
        }
    }
    function windowSize700() {
        if($(window).width() <= 700) {
            $('.tabs__item:first .tabs__item__title').text('Самостоятельно торговать');
            $('.tabs__item').append('<img src="static/images/img/down-arrow.svg" class="items-item__arrow tabs__arrow">');
            $('.tabs__item:eq(0)').after($('#content1'));
            $('.tabs__item:eq(1)').after($('#content2'));
            $('.tabs__item:eq(2)').after($('#content3'));
        }
    }

    function fadeUps() {
        let items = $('.items-item').closest('.items-wrap');
        $(items).on('click', function(){
            $('.section-top__inner').addClass('animateTop');
            $('.section-top').addClass('animateOpacity');
            $('.section-body').css('display','block');
        })
    }
    
    function tabs1() {
        $('.items-wrap a').on('click', function(e) {
        e.preventDefault();
        let _href = $(this).attr('href'),
          serch = '';
              
              $.each($('.tabs__item'), function(i, item){($(item).data('href')==_href?serch = $(item):'')});
             serch.addClass("active");
               
        $(".tabs-content").hide();
        $(_href).fadeIn();
              
                
        $('.tabs a').on('click', function(e) {
        e.preventDefault();
        var _href = $(this).data("href");
        $(".tabs a").removeClass("active");
        $(this).addClass("active");
        $(".tabs-content").hide();
        $(_href).fadeIn();
      });
              
    });
    }




    windowSize();
    fadeUps();
    windowSize700();
    tabs1();

   
});