$(document).ready(function(){
  $(".mobile-site-menu .overlay").css("display", "none");
  
  $(".mobile-site-menu .menu-btn").click(function() {
    if ($("nav.mobile-site-menu").hasClass("open")) {
      $("nav.mobile-site-menu").removeClass("open");
      $("#main-header").removeClass("open");
      setTimeout(function(){
        $(".mobile-site-menu .overlay").css("display", "none");
      }, 100);
    } else {
      $(".mobile-site-menu .overlay").css("display", "block");
      $("nav.mobile-site-menu").addClass("open");
      $("#main-header").addClass("open");
    }
  })

  $(".mobile-site-menu .nav").click(function(){
    $("nav.mobile-site-menu").removeClass("open");
    $("#main-header").removeClass("open");
    setTimeout(function(){
      $(".mobile-site-menu .overlay").css("display", "none");
    }, 10);
  })
});