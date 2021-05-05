// Delay Carousel Slider

$(document).ready(function () {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 6500
});


// counter

let nCount = selector => {
    $(selector).each(function () {
        $(this)
            .animate({
                Counter: $(this).text()
            }, {
                duration: 4000,

                easing: "swing",

                step: function (value) {
                    $(this).text(Math.ceil(value));
                }
            });
    });
};

let a = 0;
$(window).scroll(function () {
    // The .offset() method allows us to retrieve the current position of an element  relative to the document
    let oTop = $(".status-marks").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount(".counter");
    }
});


//sticky navigation

let navbar = $(".navbar");

$(window).scroll(function () {
    // get the complete height of window
    let oTop = $(".section-1").offset().top - window.innerHeight;
    console.log(oTop);
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky");
    } else {
        navbar.removeClass("sticky");
    }
});