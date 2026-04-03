// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {

  window.onscroll = function() {stickyNavbar()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function stickyNavbar() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
});

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(250,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(250,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

$('.gallery-gif').on('click', function() {
  let currentSrc = $(this).attr('src');
  let thisAlt = $(this).attr('alt');
  navbar.classList.remove("sticky");
  $('#galleryModal').css('display', 'block');
  $('.modalImg').attr('src', currentSrc)
  $('#captionText').text(thisAlt)
})

let closeButton = $('.close')

closeButton.on('click', function(){
  navbar.classList.add("sticky")
  $('#galleryModal').css('display', 'none');
})
