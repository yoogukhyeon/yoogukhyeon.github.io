$(document).ready(function(){
    
    
/*gnb-hover*/
$('.gnb>ul>li').mouseover(function(){
    $(this).find('.depth2').stop().slideDown()
});
    $('.gnb>ul>li').mouseout(function(){
    $(this).find('.depth2').stop().slideUp()
});
  
    /*header-scroll*/
    $(function(){
        $('#header').toggleClass('on') 
    })
    
    /*tnb-menu*/
    $('.tnb').on('click',function(){
        $(this).toggleClass('on')
        $('.depth1').toggleClass('on')
        $('.logo a').toggleClass('on')
        $('.tnb-menu').toggleClass('on')
        
        
    })
    
    //
    var swiper = new Swiper('.core-swiper', {
      slidesPerView: 1,
      spaceBetween: 5,
        loop:true,
        breakpointsInverse: true,
      breakpoints:{
         767:{
             slidesPerView: 3,
             spaceBetween:30,
             loop:false,
         },
          1100:{
             slidesPerView: 3,
             spaceBetween:50,
         },
      }
    });
    
    //direction mouseover
    
    var direcBtn = $('.direction .indi li a');
    
    direcBtn.mouseover(function(){
        var direcIndex = $(this).parent('li').index();
        direcBtn.parent('li').removeClass('on');
        $('.direction-bg').removeClass('on');
        $(this).parent('li').addClass('on');
        $('.direction-bg').eq(direcIndex).addClass('on');
    })
    
    
})