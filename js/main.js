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


  
  // Drag and drop
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }


  // Try and catch
  try {
    console.log(newFuction());
  }
  catch(e) {
        console.log(e);
  }


