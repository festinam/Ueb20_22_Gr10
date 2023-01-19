//------- Lightbox  js --------//  
$('.img-gal').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
  });


//------- initialize menu --------//    
$('.nav-menu').superfish({
  animation: {
    opacity: 'show'
  },
  speed: 400
});

//* Navbar Fixed
var window_width = $(window).width(),
      window_height = window.innerHeight,
      header_height = $('.default-header').height(),
      header_height_static = $('.site-header.static').outerHeight(),
      fitscreen = window_height - header_height;

  $('.fullscreen').css('height', window_height);
  $('.fitscreen').css('height', fitscreen);
  var nav_offset_top = $('header').height() + 50;
  function navbarFixed() {
      if ($('.header_area').length) {
          $(window).scroll(function() {
              var scroll = $(window).scrollTop();
              if (scroll >= nav_offset_top) {
                  $('.header_area').addClass('navbar_fixed');
              } else {
                  $('.header_area').removeClass('navbar_fixed');
              }
          });
      }
  }
  navbarFixed();


//------- Active Nice Select --------//
$('select').niceSelect();

//------- mailchimp --------//  
  function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();
  function mailChimp2() {
      $('#mc_embed_signup2').find('form').ajaxChimp();
  }
  mailChimp2();

;

