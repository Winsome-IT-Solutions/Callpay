(function($) {
  "use strict";

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(".scrollup").fadeIn();
      } else {
        $(".scrollup").fadeOut();
      }
    });

    $(".scrollup").on("click", function() {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
})(jQuery);

$(document).ready(function() {
  $(window).scroll(function() {
    const scroll = $(window).scrollTop();
    if (scroll > $("#header").height()) {
      $("#header").addClass("sticky");
    } else {
      $("#header").removeClass("sticky");
    }
  });
});
