/*-----------------------------------------------------------
 * Template Name    : Sohail | Responsive One Page HTML Template
 * Author           : VibeCoder Group
 * Version          : 1.0.0
 * Created          : 2023
 * File Description : Main js file of the template
 *------------------------------------------------------------
 */

// Function to add or remove classes based on color scheme
function updateColorSchemeClasses() {
  const body = document.body;

  // Check if prefers-color-scheme is dark
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    body.classList.add("Sohail-dark");
  }
  // If prefers-color-scheme is light or no preference
  else {
    body.classList.remove("Sohail-dark");
    body.classList.add("flat-demo");
  }
}

// Call the function on initial page load
updateColorSchemeClasses();

// Listen for changes in color scheme preference
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addListener(updateColorSchemeClasses);

// repeated variables
var $window = $(window);
var $root = $("html, body");

$(document).ready(function () {
  "use strict";

  themeOption();
  navbarToggler();
  smoothScroll();
  bgBackground();
  colorFull();
  borderColor();
  ColorPallet();
  swiperSlider();
  sliderOwlCarousel();
  typedJS();
  portfolioPopup();
  clientCarousel();
  postSidebar();
});

$window.on("load", function () {
  $("#overlayer").delay(500).fadeOut("slow");
  $(".loader").delay(1000).fadeOut("slow");
  portfolioIsotop();
  ChangeColor();
  scrollToAnchor();
});
$window.on("scroll", function () {
  returnToTop();
  headerSticky();
  ChangeColor();
  skills();
});

/*-----------------------------------------------------------------------------
                                   FUNCTIONS
-----------------------------------------------------------------------------*/

$(".ancor").click(function (event) {
  event.preventDefault();
  var href = $(this).attr("href");
  var target = $(this).attr("target");
  if (target === "_blank") {
    window.open(href, "_blank");
  } else {
    window.location.href = href;
  }
});

/*-------------------------
        Theme Option
-------------------------*/
function themeOption() {
  "use strict";

  $(".color-scheme li .dark-scheme").click(function () {
    $("body").addClass("Sohail-dark");
    $(".color-scheme li a").removeClass("active");
    $(this).addClass("active");
  });

  $(".color-scheme li .light-scheme").click(function () {
    $("body").removeClass("Sohail-dark");
    $(".color-scheme li a").removeClass("active");
    $(this).addClass("active");
  });

  $(".theme-skin li .flat-skin").click(function () {
    $("body").addClass("flat-demo sohail-light");
    $(".theme-skin li a").removeClass("active");
    $(this).addClass("active");
  });

  $(".theme-skin li .neo-skin").click(function () {
    $("body").removeClass("flat-demo");
    $(".theme-skin li a").removeClass("active");
    $(this).addClass("active");
  });
}

/*--------------------------
       RETURN TO TOP
--------------------------*/
function returnToTop() {
  "use strict";

  var $returnToTop = $(".return-to-top");
  if ($window.scrollTop() > 150) {
    $returnToTop.addClass("show");
  } else {
    $returnToTop.removeClass("show");
  }
  $returnToTop.click(function () {
    $root.stop().animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
}

/*--------------------------
       NAVBAR TOGGLER
--------------------------*/
function navbarToggler() {
  "use strict";

  $(".navbar-toggler").on("click", function () {
    $("header").toggleClass("z-index");
    $(".post-sidebar-toggle").toggleClass("d-none");
  });
}
/*-------------------------
        SMOOTH SCROLL
-------------------------*/
function smoothScroll() {
  "use strict";

  $(".header .navbar-nav a, .to-contact, .scroll-down a").on(
    "click",
    function (event) {
      var $anchor = $(this);
      $root.stop().animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 60,
        },
        1500,
        "easeInOutQuart"
      );
      event.preventDefault();
      $(".navbar-collapse").collapse("hide");
    }
  );
}

/*-------------------------
        SCROLL TO
-------------------------*/

function scrollToAnchor() {
  //getting the anchor link in the URL and deleting the `#`
  var value = window.location.hash.replace("");
  var sectionAnchor = value;
  var section = $(document).find(sectionAnchor);

  if (section.length > 0) {
    $root.stop().animate(
      {
        scrollTop: $(section).offset().top - 60,
      },
      1500,
      "easeInOutQuart"
    );
  }
}

/*-------------------------
        HEADER STICKY
-------------------------*/
function headerSticky() {
  "use strict";

  if ($window.scrollTop() > 10) {
    $("#header").addClass("header-sticky");
  } else {
    $("#header").removeClass("header-sticky");
  }
}

/*-------------------------
        ChangeColor
-------------------------*/
function ChangeColor() {
  "use strict";

  // var top1 = $('#hero').offset().top;
  // var top2 = $('#about').offset().top;

  if ($window.width() > 991 && $window.scrollTop() < 100) {
    $(".special-section").css("color", "#fff");
  } else {
    $(".special-section").css("color", "#1a1a1a");
  }
}

/*-------------------------
        ColorFull Demo
-------------------------*/

function bgBackground() {
  "use strict";

  var list = document.getElementsByClassName("data-background");

  for (var i = 0; i < list.length; i++) {
    var color = list[i].getAttribute("data-color");
    list[i].style.backgroundColor = "" + color + "";
  }
}

function colorFull() {
  var allDivs = document.getElementsByClassName("data-text-color");

  for (var i = 0; i < allDivs.length; ++i) {
    var color = allDivs[i].getAttribute("data-color");
    allDivs[i].style.color = "" + color + "";
  }
}

function borderColor() {
  var allDivs = document.getElementsByClassName("timeline-border");

  for (var i = 0; i < allDivs.length; ++i) {
    var color = allDivs[i].getAttribute("data-color");
    allDivs[i].style.borderLeftColor = "" + color + "";
  }
}

// -------------------------------------------------------------
//   Color Panel
// -------------------------------------------------------------
function ColorPallet() {
  "use strict";

  $("ul.pattern .color1").click(function () {
    return $("#option-color").attr("href", "css/color/green-color.css"), !1;
  });
  $("ul.pattern .color2").click(function () {
    return $("#option-color").attr("href", "css/color/yellow-color.css"), !1;
  });
  $("ul.pattern .color3").click(function () {
    return $("#option-color").attr("href", "css/color/golden-color.css"), !1;
  });
  $("ul.pattern .color4").click(function () {
    return $("#option-color").attr("href", "css/color/sky-blue-color.css"), !1;
  });
  $("ul.pattern .color5").click(function () {
    return $("#option-color").attr("href", "css/color/blue-color.css"), !1;
  });
  $("ul.pattern .color6").click(function () {
    return $("#option-color").attr("href", "css/color/purple-color.css"), !1;
  });
  $("ul.pattern .color7").click(function () {
    return $("#option-color").attr("href", "css/color/orange-color.css"), !1;
  });
  $("ul.pattern .color8").click(function () {
    return $("#option-color").attr("href", "css/color/pink-color.css"), !1;
  });
  $("ul.pattern .color9").click(function () {
    return $("#option-color").attr("href", "css/color/red-color.css"), !1;
  });
  $("#color-switcher .pallet-button").click(function () {
    return $("#color-switcher .color-pallet").toggleClass("show"), !1;
  });
  $("body").click(function () {
    return $("#color-switcher .color-pallet").removeClass("show"), !1;
  });
}
/*-----------------------------
     HERO SWIPER SLIDER
------------------------------*/
function swiperSlider() {
  "use strict";

  if ($(".swiper-container").length) {
    var swiper = new Swiper(".swiper-container", {
      effect: "slide",
      allowTouchMove: "false",
      touchRatio: 0,
      threshold: 992,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var textSwiper = new Swiper(".text-swiper", {
      effect: "fade",
      allowTouchMove: "false",
      touchRatio: 0,
      threshold: 992,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    $(".hero-item-image").css("background", function () {
      var bg = "url(" + $(this).data("image-src") + ") no-repeat center";
      return bg;
    });
    var $fullscreen = $(".hero-04, .hero-swiper, .hero-text, .hero-images");
    $fullscreen.css("height", $window.height());
  }
}
/*-----------------------------
      SLIDER OWL CAROUSEL
------------------------------*/
function sliderOwlCarousel() {
  "use strict";

  $(".hero .owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: false,
    autoplay: true,
    touchDrag: true,
    smartSpeed: 5000,
    animateOut: "fadeOut",
    autoplayHoverPause: true,
  });
  $("#hero-slider").on("translate.owl.carousel", function () {
    setTimeout(function () {
      $(".hero-slide").removeClass("zoom");
    }, 1000);
  });
  $("#hero-slider").on("translated.owl.carousel", function () {
    $(".owl-item.active .hero-slide").addClass("zoom");
  });
}

/*-------------------------
        TYPED JS
-------------------------*/
function typedJS() {
  "use strict";

  if ($(".element").length > 0) {
    var options = {
      strings: $(".element").attr("data-elements").split(","),
      typeSpeed: 100,
      backDelay: 3000,
      backSpeed: 50,
      loop: true,
    };
    var typed = new Typed(".element", options);
  }
}
/*-------------------------
          Skills
-------------------------*/
function skills() {
  "use strict";

  var scroll = $window.scrollTop();
  var skillsDiv = $("#skills");
  if (skillsDiv.length > 0) {
    var winH = $window.height(),
      skillsT = skillsDiv.offset().top;
    if (scroll + winH > skillsT) {
      $(".skillbar").each(function () {
        $(this)
          .find(".skillbar-bar")
          .animate(
            {
              width: $(this).attr("data-percent"),
            },
            2500
          );
      });
    }
  }
}

// scroll
$(window).scroll(function () {
  var scroll = $window.scrollTop();
  var shape = $(".main-menu");
  var shapeOffset = shape.offset().top;
  var windowHeight = $(window).height();
  var shapeDistanceFromTop = shapeOffset - scroll;
  var maxOffset = shapeDistanceFromTop;
  var maxDistance = $("body").height() - windowHeight;
  var distanceScrolled = scroll / maxDistance;
  var translateY = -distanceScrolled * maxOffset;

  shape.css("transform", "translate(0%, " + translateY + "px)");
});

/*-------------------------
        ISOTOPE JS
-------------------------*/
function portfolioIsotop() {
  "use strict";

  // init Isotope
  var initial_items = $("#showMore-initials").data("initial");
  var next_items = $("#showMore-initials").data("next");
  var $pfilter = $("#portfolio-filter");
  var $grid = $(".portfolio-items");
  var $showMore = $("#showMore");
  $grid.isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "masonry",
  });
  $pfilter.find("a").on("click", function () {
    var filterValue = $(this).attr("data-filter");
    $pfilter.find("a").removeClass("active");
    $(this).addClass("active");
    $grid.isotope({
      filter: filterValue,
    });
    updateFilterCounts();
    return false;
  });
  function updateFilterCounts() {
    var itemElems = $grid.isotope("getFilteredItemElements");
    var count_items = $(itemElems).length;
    if (count_items > initial_items) {
      $showMore.show();
      $showMore
        .parent(".button-border")
        .addClass("mr-2 mr-sm-4")
        .removeClass("p-0");
    } else {
      $showMore.hide();
      $showMore
        .parent(".button-border")
        .removeClass("mr-2 mr-sm-4")
        .addClass("p-0");
    }
    if ($(".portfolio-item").hasClass("visible_item")) {
      $(".portfolio-item").removeClass("visible_item");
    }
    var index = 0;

    $(itemElems).each(function () {
      if (index >= initial_items) {
        $(this).addClass("visible_item");
      }
      index++;
    });
    $grid.isotope("layout");
  }
  function showNextItems(pagination) {
    var itemsMax = $(".visible_item").length;
    var itemsCount = 0;
    $(".visible_item").each(function () {
      if (itemsCount < pagination) {
        $(this).removeClass("visible_item");
        itemsCount++;
      }
    });
    if (itemsCount >= itemsMax) {
      $showMore.hide();
      $showMore
        .parent(".button-border")
        .removeClass("mr-2 mr-sm-4")
        .addClass("p-0");
    }
    $grid.isotope("layout");
  }
  // function that hides items when page is loaded
  function hideItems(pagination) {
    var itemsMax = $(".portfolio-item").length;
    var itemsCount = 0;
    $(".portfolio-item").each(function () {
      if (itemsCount >= pagination) {
        $(this).addClass("visible_item");
      }
      itemsCount++;
    });
    if (itemsCount < itemsMax || initial_items >= itemsMax) {
      $showMore.hide();
      $showMore
        .parent(".button-border")
        .removeClass("mr-2 mr-sm-4")
        .addClass("p-0");
    }
    $grid.isotope("layout");
  }
  $showMore.on("click", function (e) {
    e.preventDefault();
    showNextItems(next_items);
  });
  hideItems(initial_items);
}

/*-------------------------
     MAGNIFIC POPUP JS
-------------------------*/
function portfolioPopup() {
  "use strict";

  if (".portfolio-items".length > 0) {
    $(".portfolio-items").each(function () {
      $(this).magnificPopup({
        delegate: ".js-zoom-gallery",
        type: "image",
        gallery: {
          enabled: true,
        },
      });
    });
  }
}

/*-------------------------
  Testimonial CAROUSEL JS
-------------------------*/
function clientCarousel() {
  var owl = $(".testimonial .owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 30,
    stagePadding: 5,
    nav: false,
    autoplay: false,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    smartSpeed: 700,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      992: {
        items: 2,
        nav: false,
      },
    },
  });

  // Handle mousewheel events for the owl-carousel
  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      owl.trigger("next.owl");
    } else {
      owl.trigger("prev.owl");
    }
    e.preventDefault();
  });
}

/*-------------------------
    POST SIDEBAR TOGGLER
-------------------------*/
function postSidebar() {
  $(".post-sidebar-toggle").on("click", function () {
    $(this).toggleClass("open");
    $(".post-sidebar").toggleClass("open");
  });
}
