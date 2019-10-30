(function($) {
  "use strict";

  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $("#scrollup").fadeIn();
      } else {
        $("#scrollup").fadeOut();
      }
    });

    $("#scrollup").on("click", function() {
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

$("#home-btn").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: 0
    },
    500
  );
});

$("#features-btn").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop:
        $("#promo-container").offset().top - $("#header").innerHeight() - 50
    },
    500
  );
});

$("#instructions-btn").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop:
        $("#app-instructions-container").offset().top -
        $("#header").innerHeight() -
        50
    },
    500
  );
});

$("#redeem-btn").click(function() {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop:
        $("#redeem-container").offset().top - $("#header").innerHeight() - 50
    },
    500
  );
});
