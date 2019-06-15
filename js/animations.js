/* Created by Edward Montes 
Used Jquery for this Js File*/
$(document).ready(function () {
    $('.welcome h5').hide(); 
    $('.welcome h4').hide(); 
  $('.welcome h5').slideDown(5000); 
    $('.welcome h4').slideDown(5000); 
    $('#home2 h1').hide();
  
  $(window).scroll(function() {
      var scrollTop1 = $("#home1 h1");
      var scrollTop2 = $("#home2 h1");
        var scrollTop3 = $("#home3 h1");
      var scrollTop4 = $(".welcomeText");
      var homepic1 = $(".pic1");
      var homepic2 = $(".pic2");
    // declare variable
    var topPos1 = $(this).scrollTop();
      var topPos2 = $(this).scrollTop();
      var topPos3 = $(this).scrollTop();
      var topPos4 = $(this).scrollTop();
      var homepic1top = $(this).scrollTop();
      var homepic2top = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos1 > 750 ) {
      $(scrollTop1).slideDown(1000);
    } else {
     $('#home1 h1').slideUp(1000);
    }
      
      if (topPos2 > 1400 ) {
      $(scrollTop2).slideDown(1000);
    } else {
     $('#home2 h1').slideUp(1000);
    }
      
    if (topPos3 > 1850 ) {
        $(scrollTop3).slideDown(1000);
    } else {
        $('#home3 h1').slideUp(1000);
    }
      
      if (topPos4 < 1000 ) {
        $(scrollTop4).fadeIn(2000);
    } else {
        $('.welcomeText').slideUp(500);
    }
      
        if (homepic1top > 900 ) {
        $(homepic1).fadeIn(2500);
    } else {
        $('.pic1').slideUp(500);
    }
      
        if (homepic2top > 1650 ) {
        $(homepic2).fadeIn(2500);
    } else {
        $('.pic2').slideUp(500);
    }
})
});
    
