// Document . ready
$(document).ready(function() {

  $(".menu-mobile").click(function(){
    $(".sub-menu").toggle();
  });

  $(".burger-button").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("active");
  });


$(".burger-menu").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("active");
  });


  /*
    $('.hamburger-button').click(function(){
        $('.mobile-menu').fadeToggle(100);
        $(this).toggleClass('active');
      });
    
      $('.mobile-menu a').click(function(){
        $('.mobile-menu').fadeOut(100);
        $(".hamburger-button").removeClass('active');
      });

      */


    //Animate scroll - activate

    AOS.init({
        duration: 1500   // values from 0 to 3000
    });

});

//LightGallery PopUp

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});

lightGallery(document.getElementById('lightgallery-2'), {
    speed: 500,
    download: false
});

//Typed sentences for us//
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 250,
    backSpeed: 5,
    
    loop: true,
    loopCount: 1,
    
    showCursor: false
  });