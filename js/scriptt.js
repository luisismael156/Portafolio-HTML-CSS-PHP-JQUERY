$(document).ready(function(){

  $(window).scroll(function(){
    scroll = $(window).scrollTop();
  
    if ($(window).width() > 480) {
      if (scroll > 100) {
        $(".menu").css({"background":"#fff"});
        $(".menu").css({"padding":"0"});
        $(".menu").addClass("shadow");
        $(".menu").css({"z-index":"999"});
        $("nav ul li a").css({"color":"black"});
        $(".logo").css({"color":"black"});
     
    }else{
      $(".menu").css({"background":"transparent"});
      $(".menu").css({"padding":"5px 0"});
      $(".menu").removeClass("shadow");
      $("nav ul li a").css({"color":"white"});
      $(".logo").css({"color":"white","margin":"23px"});





    }
  }
  
    
  
  
  
  })



})
