//body fade in

setTimeout(function () {
  $("body").animate({ opacity: "1" });
}, 500);

//animation start here

wow = new WOW({
  animateClass: "animated",
  offset: 100,
  callback: function (box) {
    //          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
  },
});
wow.init();

//	burger menu start here

$(document).ready(function () {
  $(".burger").click(function () {
    $(".burger").toggleClass("open");
    $("header nav").fadeToggle().css({
      display: "block",
    });
    $("body").toggleClass("overflow");
    $("header .rightnav").toggleClass("nav-open");
        $(".fadeInUp").removeAttr("style");
  });
    
});



if (screen.width < 991) {
  $(".nav-item a").removeClass("active");
  $(".tab-pane").removeClass("active");
  $(".tab-pane").removeClass("show");
}

$(".back").click(function () {
  $(".nav-item a").removeClass("active");
  $(".tab-content div").removeClass("active");
});

// header on scroll

$(window).scroll(function () {
  if (screen.width > 991) {
    if ($(this).scrollTop() > 250) {
      $("header").addClass("nav-down");
    } else {
      $("header").removeClass("nav-down");
    }
  }
});

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    // escape key maps to keycode `27`
    //also check here some another stuff like menu already opend or not
    $(".burger").removeClass("open");
    $("body").removeClass("overflow");
    $("header nav").css({
      display: "none",
    });
  }
});

//viewport units

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
//let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
//document.documentElement.style.setProperty("--vh", `${vh}px`);


//plyr.io js


//const player = new Plyr('#player');



document.addEventListener('DOMContentLoaded', () => { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
//  const player = new Plyr('.plyr');
    
    
    
const players = Array.from(document.querySelectorAll('.plyr')).map(player => new Plyr(player));
 players.forEach(function(instance,index) {
            instance.on('play',function(){
                players.forEach(function(instance1,index1){
                    if(instance != instance1){
                        instance1.pause();
                    }
                });
            });
        });    
    
  
  // Expose
//  window.player = player;

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }

//  // Play
//  on('.js-play', 'click', () => { 
//    player.play();
//  });
//
//  // Pause
//  on('.js-pause', 'click', () => { 
//    player.pause();
//  });
//
//  // Stop
//  on('.js-stop', 'click', () => { 
//    player.stop();
//  });
//
//  // Rewind
//  on('.js-rewind', 'click', () => { 
//    player.rewind();
//  });
//
//  // Forward
//  on('.js-forward', 'click', () => { 
//    player.forward();
//  });
});



if ($("#homeslider").length > 0) {
  var homeslider = new Swiper("#homeslider", {
    //autoHeight: true,
    spaceBetween: 0,
    slidesPerView: 1,
    watchOverflow: true,
    effect: "fade",
    speed: 1500,
    autoplay: {
      delay: window.hp_banner_slider_delay,
     // autoplay: 2000,
      reverseDirection: false,
      disableOnInteraction: false,
      loop: true,
    },      
    navigation: {
      nextEl: ".homeslider-button-next",
      prevEl: ".homeslider-button-prev",
    },
    pagination: {
      el: ".homeslider-pagination",
      renderBullet: function (i, className){
      return `<span class="${className} hdl-${className}-${i}">${i}</span>`
      },
 //     type: "fraction",
//      renderFraction: function (currentClass, totalClass) {
//         return (
//           "<span>0</span>" +
//           '<span class="' +
//          currentClass +
//          '"></span>' +
//           "<span>. Next </span>" +
//           "<span>"
//         );
//       },
    },

    on: {
      slideChangeTransitionStart: function () {
        // Slide captions
        var swiper = this;
        var slideTitle = $(swiper.slides[swiper.activeIndex]).attr(
          "data-title"
        );
        $("#title").html(function () {
          return "<h5><strong>" + slideTitle + "</strong></h5>";
        });
      },
    },
  });

  //         Slide captions on load
  var sizes1 = $(homeslider.slides[homeslider.activeIndex]).attr("data-title");
  $("#title").html(function () {
    return "<h5><strong>" + sizes1 + "</strong></h5>";
    console.log(sizes1);
  });
}

if ($("#insideheader").length > 0) {
  var insideheader = new Swiper("#insideheader", {
    //autoHeight: true,
    spaceBetween: 0,
    slidesPerView: 1,
    watchOverflow: true,
    effect: "fade",
    // loop: true,
    speed: 1500,
    navigation: {
      nextEl: ".insideheader-button-next",
      prevEl: ".insideheader-button-prev",
    },
    pagination: {
      el: ".insideheader-pagination",
      clickable: true,
    },
  });
}


if ($("#servicesmain").length > 0) {
  var servicesmain = new Swiper("#servicesmain", {
    //autoHeight: true,
    spaceBetween: 0,
    slidesPerView: 1,
    watchOverflow: true,
    //        effect: "fade",
    //         loop: true,
    //        speed: 1500,
    navigation: {
      nextEl: ".services-main-next",
      prevEl: ".services-main-prev",
    },
    pagination: {
      el: ".services-main-pagination",
      clickable: true,
    },
  });
    
//    servicesmain.on('slideChange', function () {
//        player.get().forEach(function(instance) { 
//         instance.pause();
//    });
//});

}






//services slider start here

if ($("#services").length > 0) {
  var services = new Swiper("#services", {
    //autoHeight: true,
    spaceBetween: 0,
    slidesPerView: 1,
    watchOverflow: true,
    simulateTouch: true,

    navigation: {
      nextEl: ".services-next",
      prevEl: ".services-prev",
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    breakpoints: {
      640: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        //        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
}

//services section slider start here

if ($("#servicessection").length > 0) {
  var servicessection = new Swiper("#servicessection", {
    //autoHeight: true,
    spaceBetween: 30,
    slidesPerView: 1.5,
    watchOverflow: true,
    simulateTouch: true,
    scrollbar: {
      el: ".servicessection-scrollbar",
      draggable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
        slidesOffsetAfter: 400,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });
}

//industries section slider start here

if (screen.width < 991) {
  var industries = new Swiper("#industries", {
    //autoHeight: true,
    spaceBetween: 0,
    slidesPerView: 1,
    watchOverflow: true,
    simulateTouch: true,
    scrollbar: {
      el: ".industries-scrollbar",
      draggable: true,
    },

    navigation: {
      nextEl: ".industries-next",
      prevEl: ".industries-prev",
    },

    //        breakpoints: {
    //            640: {
    //                slidesPerView: 1,
    //                spaceBetween: 0,
    //            },
    //            768: {
    //                slidesPerView: 1,
    //                spaceBetween: 0,
    //            },
    //            1024: {
    //                slidesPerView: 1,
    //                spaceBetween: 0,
    //
    //            },
    //        }
  });
}

//key people sider start here

if ($("#keypeople").length > 0) {
  var keypeople = new Swiper("#keypeople", {
    //autoHeight: true,
    spaceBetween: 0,
    slidesPerView: 1,
    watchOverflow: true,
    simulateTouch: true,
    scrollbar: {
      el: ".keypeople-scrollbar",
      draggable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 300,
      },
    },
  });
}

//case study view sider start here

if ($("#viewslider").length > 0) {
  var viewslider = new Swiper("#viewslider", {
    //autoHeight: true,
    spaceBetween: 25,
    slidesPerView: 1,
    centeredSlides: false,
    watchOverflow: true,
    simulateTouch: true,
    grabCursor: true,
    preventClicks: true,
    allowTouchMove: true,
    freeMode: true,

    scrollbar: {
      el: ".viewslider-scrollbar",
      draggable: true,
    },

    navigation: {
      nextEl: ".viewslider-next",
      prevEl: ".viewslider-prev",
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 25,
      },
    },
  });
}

//insights-cases slider start here

if ($("#insightslider").length > 0) {
  var insightslider = new Swiper("#insightslider", {
    //autoHeight: true,
    spaceBetween: 25,
    slidesPerView: 1,
    centeredSlides: false,
    watchOverflow: true,
    simulateTouch: true,
    grabCursor: true,
    preventClicks: true,
    allowTouchMove: true,

    scrollbar: {
      el: ".insightslider-scrollbar",
      draggable: true,
    },

    navigation: {
      nextEl: ".insightslider-next",
      prevEl: ".insightslider-prev",
    },

    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });
}

if ($("#testimonials").length > 0) {
  var testimonials = new Swiper("#testimonials", {
    //autoHeight: true,
    spaceBetween: 0,
    slidesPerView: 1,
    watchOverflow: true,
    simulateTouch: true,

    navigation: {
      nextEl: ".testimonials-next",
      prevEl: ".testimonials-prev",
    },
      
   scrollbar: {
      el: ".testimonials-scrollbar",
      draggable: true,
    },

    breakpoints: {
      640: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        //        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 100,
      },
    },
  });
}


//homeabout



if ($("#homeabout").length > 0) {
  var testimonials = new Swiper("#homeabout", {
    //autoHeight: true,
    spaceBetween: 10,
    slidesPerView: 1,
    watchOverflow: true,
    simulateTouch: true,
    effect: "fade",
    speed: 1500,
//    autoplay: {
//        delay: 9000,
//        autoplay: 2000,
//        reverseDirection: false,
//        disableOnInteraction: false,
//        loop: true,
//    },      
    navigation: {
      nextEl: ".homeabout-next",
      prevEl: ".homeabout-prev",
    },
      
    breakpoints: {
      640: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
      768: {
        //slidesPerView: 1,
        spaceBetween: 10,
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
}


if (
  $(
    '.swiper-slide img[src*="/large/"], .swiper-slide img[src*="/small/"], .responsive-img img[src*="/large/"], .responsive-img img[src*="/small/"]'
  ).length > 0
) {
  var largedevice = "1024px";
  if ($(window).innerWidth() <= 769) {
    $(
      '.swiper-slide img[src*="/large/"], .swiper-slide img[src*="/small/"], .responsive-img img[src*="/large/"], .responsive-img img[src*="/small/"]'
    ).each(function () {
      var msrc = $(this).attr("src");
      msrc = msrc.split("/"); //images, slider, large, image.jpg
      var lastelem = msrc.pop(); //images, slider, large     // lastelem: image.jpg
      msrc.pop(); //images, slider, // large  //popuout
      msrc.push("small"); //images, slider, small   // lastelem: image.jpg
      msrc.push(lastelem); //images, slider, small, image.jpg
      msrc = msrc.join("/"); //"images/slider/small/image.jpg"
      $(this).attr("src", msrc);
    });
  } else {
    $(
      '.swiper-slide img[src*="/large/"], .swiper-slide img[src*="/small/"], .responsive-img img[src*="/large/"], .responsive-img img[src*="/small/"]'
    ).each(function () {
      var msrc = $(this).attr("src");
      msrc = msrc.split("/"); //images, slider, small, image.jpg
      var lastelem = msrc.pop(); //images, slider, small     // lastelem: image.jpg
      msrc.pop(); //images, slider, // small popuout
      msrc.push("large"); //images, slider, large   // lastelem: image.jpg
      msrc.push(lastelem); //images, slider, large, image.jpg
      msrc = msrc.join("/"); //"images/slider/large/image.jpg"
      $(this).attr("src", msrc);
    });
  }
}

//mCustomScrollbar  Initialization

//    (function($){
//        $(window).on("load",function(){
//            $(".content").mCustomScrollbar({
//                theme:"dark"
//            });
//        });
//    })(jQuery);

//smooth scroll on id click

$('a[href*="#"]').on("click", function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top - 112,
    },
    500,
    "linear"
  );
});

//image comparison slider

jQuery(document).ready(function ($) {
  var dragging = false,
    scrolling = false,
    resizing = false;
  //cache jQuery objects
  var imageComparisonContainers = $(".cd-image-container");
  //check if the .cd-image-container is in the viewport
  //if yes, animate it
  checkPosition(imageComparisonContainers);
  $(window).on("scroll", function () {
    if (!scrolling) {
      scrolling = true;
      !window.requestAnimationFrame
        ? setTimeout(function () {
            checkPosition(imageComparisonContainers);
          }, 100)
        : requestAnimationFrame(function () {
            checkPosition(imageComparisonContainers);
          });
    }
  });

  //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
  imageComparisonContainers.each(function () {
    var actual = $(this);
    drags(
      actual.find(".cd-handle"),
      actual.find(".cd-resize-img"),
      actual,
      actual.find('.cd-image-label[data-type="original"]'),
      actual.find('.cd-image-label[data-type="modified"]')
    );
  });

  //upadate images label visibility
  $(window).on("resize", function () {
    if (!resizing) {
      resizing = true;
      !window.requestAnimationFrame
        ? setTimeout(function () {
            checkLabel(imageComparisonContainers);
          }, 100)
        : requestAnimationFrame(function () {
            checkLabel(imageComparisonContainers);
          });
    }
  });

  function checkPosition(container) {
    container.each(function () {
      var actualContainer = $(this);
      if (
        $(window).scrollTop() + $(window).height() * 0.5 >
        actualContainer.offset().top
      ) {
        actualContainer.addClass("is-visible");
      }
    });

    scrolling = false;
  }

  function checkLabel(container) {
    container.each(function () {
      var actual = $(this);
      updateLabel(
        actual.find('.cd-image-label[data-type="modified"]'),
        actual.find(".cd-resize-img"),
        "left"
      );
      updateLabel(
        actual.find('.cd-image-label[data-type="original"]'),
        actual.find(".cd-resize-img"),
        "right"
      );
    });

    resizing = false;
  }

  function drags(
    dragElement,
    resizeElement,
    container,
    labelContainer,
    labelResizeElement
  ) {
    dragElement
      .on("mousedown vmousedown", function (e) {
        dragElement.addClass("draggable");
        resizeElement.addClass("resizable");

        var dragWidth = dragElement.outerWidth(),
          xPosition = dragElement.offset().left + dragWidth - e.pageX,
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth(),
          minLeft = containerOffset + 10,
          maxLeft = containerOffset + containerWidth - dragWidth - 10;

        dragElement
          .parents()
          .on("mousemove vmousemove", function (e) {
            if (!dragging) {
              dragging = true;
              !window.requestAnimationFrame
                ? setTimeout(function () {
                    animateDraggedHandle(
                      e,
                      xPosition,
                      dragWidth,
                      minLeft,
                      maxLeft,
                      containerOffset,
                      containerWidth,
                      resizeElement,
                      labelContainer,
                      labelResizeElement
                    );
                  }, 100)
                : requestAnimationFrame(function () {
                    animateDraggedHandle(
                      e,
                      xPosition,
                      dragWidth,
                      minLeft,
                      maxLeft,
                      containerOffset,
                      containerWidth,
                      resizeElement,
                      labelContainer,
                      labelResizeElement
                    );
                  });
            }
          })
          .on("mouseup vmouseup", function (e) {
            dragElement.removeClass("draggable");
            resizeElement.removeClass("resizable");
          });
        e.preventDefault();
      })
      .on("mouseup vmouseup", function (e) {
        dragElement.removeClass("draggable");
        resizeElement.removeClass("resizable");
      });
  }

  function animateDraggedHandle(
    e,
    xPosition,
    dragWidth,
    minLeft,
    maxLeft,
    containerOffset,
    containerWidth,
    resizeElement,
    labelContainer,
    labelResizeElement
  ) {
    var leftValue = e.pageX + xPosition - dragWidth;
    //constrain the draggable element to move inside his container
    if (leftValue < minLeft) {
      leftValue = minLeft;
    } else if (leftValue > maxLeft) {
      leftValue = maxLeft;
    }

    var widthValue =
      ((leftValue + dragWidth / 2 - containerOffset) * 100) / containerWidth +
      "%";

    $(".draggable")
      .css("left", widthValue)
      .on("mouseup vmouseup", function () {
        $(this).removeClass("draggable");
        resizeElement.removeClass("resizable");
      });

    $(".resizable").css("width", widthValue);

    updateLabel(labelResizeElement, resizeElement, "left");
    updateLabel(labelContainer, resizeElement, "right");
    dragging = false;
  }

  function updateLabel(label, resizeElement, position) {
    if (position == "left") {
      label.offset().left + label.outerWidth() <
      resizeElement.offset().left + resizeElement.outerWidth()
        ? label.removeClass("is-hidden")
        : label.addClass("is-hidden");
    } else {
      label.offset().left >
      resizeElement.offset().left + resizeElement.outerWidth()
        ? label.removeClass("is-hidden")
        : label.addClass("is-hidden");
    }
  }
});

if ($("#cgiservices-slider").length > 0) {
  const slides = document.querySelectorAll("#cgiservices-slider .swiper-slide");

  const titles = [];
  const subtitles = [];
  const urls = [];

  [...slides].forEach((slide) => {
    titles.push(slide.getAttribute("data-pagination-title"));
    subtitles.push(slide.getAttribute("data-pagination-subtitle"));
  });

  const cgiservices_slider = new Swiper("#cgiservices-slider", {
    spaceBetween: 0,
    slidesPerView: 1,
    watchOverflow: true,
    effect: "fade",
    loop: true,
    speed: 1500,
    navigation: {
      nextEl: ".cgiservices-slider-next",
      prevEl: ".cgiservices-slider-prev",
    },

    scrollbar: {
      el: ".cgiservices-scrollbar",
      draggable: true,
    },

    pagination: {
      el: ".cgiservices-slider-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          '"><span class="pagination-title">' +
          titles[index] +
          '</span><span class="pagination-subtitle">' +
          subtitles[index] +
          "</span></span>"
        );
      },
    },
  });
}


/*********************************************
** FLOATING LABELS FOR CF7
*********************************************/

$(".wpcf7 .form-control").focus(function(){
	$(this).parent().parent().addClass('active');
}).blur(function(){
	var cval = $(this).val()
	if(cval.length < 1) {$(this).parent().parent().removeClass('active');}
})



// work hover img

// $(".work-client").each(function () {
//   // Changes the .image-holder's img src to the src defined in .list a's data attribute.
//   var largevalue = $(this).attr("data-src-large");
//   var smallvalue = $(this).attr("data-src-small");

//   if (screen.width < 991) {
//     $(".work-client").css("background-image", "url(" + largevalue + ")");
//     //  block of code to be executed if the condition is true
//   } else {
//     $(".work-client").css("background-image", "url(" + smallvalue + ")");
//   }

//   // $(".work-client .image-holder img").attr("src", value);
// });

// $(".work-client").each(function () {
//   "use strict";
//   if ($(this).attr("data-src-large")) {
//     $(this).css({
//       background: "url(" + $(this).data("bg") + ")",
//       "background-position": "center center",
//       "background-repeat": "no-repeat",
//       "background-size": "cover",
//       "background-attachment": "scroll",
//     });
//   }
// });

// var checkWOWJsReset = function () {
//   var resetWOWJsAnimation = function () {
//     var $that = $(this);

//     // only reset animation when no long in viewport and already animated (but not running)
//     if (
//       !isInViewport($that, 0) &&
//       $that.css("animation-name") != "none" &&
//       !$that.hasClass("animated")
//     ) {
//       $that.css({ visibility: "hidden", "animation-name": "none" });
//       wow.addBox(this);
//     }
//   };
//   $(".wow").each(resetWOWJsAnimation); // check if reset is necessary for any elements (you might use a different selector here)
// };
// $(window).on("resize scroll", checkWOWJsReset);