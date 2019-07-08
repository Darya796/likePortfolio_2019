$(function () {

    setTimeout(function () {
        $(".logo__hidden").addClass("logo__hidden--smoke");
    }, 2900);

    // setTimeout(function () {
    //     document.querySelector(".page-background").classList.add("page-background--showed");
    // }, 1000);
    //
    // setTimeout(function () {
    //     document.querySelector(".grid").classList.add("grid--showed");
    // }, 2100);


    // window.onresize = function () {
    // };

    /*==============================*/
    $(window).on('load resize', function () {
        if ($(window).outerWidth() < 1200) {
            $('.works__slider:not(.slick-initialized)').slick({
                mobileFirst: true,
                touchThreshold: 20,
                infinite: false,
                edgeFriction: 0.05,
                initialSlide: 1,
                dots: true,
                arrows: false,
                // draggable: false,
                responsive: [
                    {
                        breakpoint: 0,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            centerPadding: "14%"
                        }
                    },
                    // {
                    //     breakpoint: 599,
                    //     settings: {
                    //         slidesToShow: 2,
                    //         slidesToScroll: 1,
                    //         centerMode: true,
                    //         centerPadding: "14%"
                    //     }
                    // },
                    {
                        breakpoint: 767,
                        settings: {
                            arrows: false,
                            centerPadding: "0"
                            // slidesToShow: 2,
                            // slidesToScroll: 2
                        }
                    },
                    // {
                    //     breakpoint: 1023,
                    //     settings: {
                    //         arrows: false,
                    //         slidesToShow: 3,
                    //         slidesToScroll: 3
                    //     }
                    // },
                    {
                        breakpoint: 1199,
                        settings: "unslick"
                    }
                ]
            });

            $(".page-background__smoke-1").removeClass("desktop-parallax");
            $(".page-background__smoke-2").removeClass("desktop-parallax");
            $(".page-background__smoke-3").removeClass("desktop-parallax");
            $(".page-background__smoke-4").removeClass("desktop-parallax");
            $(".about__img").removeClass("desktop-parallax");
            $(".about__career").removeClass("desktop-parallax");
            $(".works__text-container").removeClass("desktop-parallax");
            $(".works__img-container").removeClass("desktop-parallax");
            $(".contacts__violet-text").removeClass("desktop-parallax");
            $(".contacts__location").removeClass("desktop-parallax");
        } else {
            $('.works__slider.slick-initialized').slick("unslick");

            $(".page-background__smoke-1").addClass("desktop-parallax");
            $(".page-background__smoke-2").addClass("desktop-parallax");
            $(".page-background__smoke-3").addClass("desktop-parallax");
            $(".page-background__smoke-4").addClass("desktop-parallax");
            $(".about__img").addClass("desktop-parallax");
            $(".about__career").addClass("desktop-parallax");
            $(".works__text-container").addClass("desktop-parallax");
            $(".works__img-container").addClass("desktop-parallax");
            $(".contacts__violet-text").addClass("desktop-parallax");
            $(".contacts__location").addClass("desktop-parallax");
        }
    });


    $.fn.parallax = function (resistance, mouse) {
        $el = $(this);
        TweenLite.to($el, 4, {
            x: -((mouse.clientX - window.innerWidth / 2) / resistance),
            y: -((mouse.clientY - window.innerHeight / 2) / resistance)
        });
    };


    $.fn.parallax2 = function (resistance, mouse) {
        $el = $(this);
        TweenLite.to($el, 0, {
            x: -((mouse.clientX - window.innerWidth / 2) / resistance),
            y: -((mouse.clientY - window.innerHeight / 2) / resistance)
        });
    };

    $(document).mousemove(function (e) {
        $(".page-background__smoke-3.desktop-parallax").parallax(-7, e);
        $(".page-background__smoke-4.desktop-parallax").parallax(-4, e);
        $(".about__img.desktop-parallax").parallax(18, e);
        $(".about__career.desktop-parallax").parallax(-30, e);
        $(".works__text-container.desktop-parallax").parallax2(40, e);
        $(".works__img-container.desktop-parallax").parallax2(-40, e);
        $(".contacts__violet-text.desktop-parallax").parallax(25, e);
        $(".contacts__location.desktop-parallax").parallax(-20, e);
    });


    setTimeout(function () {
        $(document).mousemove(function (e) {
            $(".page-background__smoke-1.desktop-parallax").parallax(-10, e);
            $(".page-background__smoke-2.desktop-parallax").parallax(-5, e);
        });
    }, 6700);

    /*===========animate content opacity==================*/
    var arrSmoke = [];
    var arrShow = [];

    $(".animate").each(function () {
        var el_offset = $(this).offset();
        arrSmoke.push(el_offset.top);
    });

    $(".animate-section").each(function () {
        var el_offset = $(this).offset();
        arrShow.push(el_offset.top);
    });


    $(".works__slider").each(function () {
        var el_offset = $(this).offset();
        arrShow.push(el_offset.top);
    });


    $(".about__img-container").each(function () {
        var el_offset = $(this).offset();
        arrShow.push(el_offset.top);
    });

    $(".about__content-container").each(function () {
        var el_offset = $(this).offset();
        arrShow.push(el_offset.top);
    });


    $(".contacts__img-container").each(function () {
        var el_offset = $(this).offset();
        arrShow.push(el_offset.top);
    });


    $(".animate-block").each(function () {
        var el_offset = $(this).offset();
        arrShow.push(el_offset.top);
    });


    $(".skills__list").each(function () {
        var el_offset = $(this).offset();
        arrShow.push(el_offset.top);
    });


    $(".timeline").each(function () {
        var el_offset = $(this).offset();
        arrShow.push(el_offset.top);
    });


    $(".contacts__violet-text-outer").each(function () {
        var el_offset = $(this).offset();
        arrShow.push(el_offset.top);
    });


    $(".contacts__contact-link").each(function () {
        var el_offset = $(this).offset();
        arrShow.push(el_offset.top);
    });


    $(".contacts__location").each(function () {
        var el_offset = $(this).offset();
        arrShow.push(el_offset.top);
    });

    console.log(arrShow);


    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    var animate = function () {

        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);

        var scrollPosition = scrollTop + h;


        arrSmoke = $.map(arrSmoke, function (i, index) {
            if (scrollPosition - 200 >= i) {
                $(".animate").eq(index).addClass("smoke-showed");
            }
            return i;
        });

        arrShow = $.map(arrShow, function (j, index) {
            if (scrollPosition - 200 >= j) {
                $(".animate-section").eq(index).find(".animate-section__title").addClass("animate-section__title--start");
                $(".works__slider").eq(index).addClass("works__slider--start");
                $(".about__img-container").eq(index).addClass("about__img-container--start");
                $(".about__content-container").eq(index).addClass("about__content-container--start");
                $(".contacts__img-container").eq(index).addClass("contacts__img-container--start");
                $(".animate-block").eq(index).addClass("animate-block--start");
                $(".skills__list").eq(index).addClass("skills__list--start");
                $(".timeline").eq(index).addClass("timeline--start");
                $(".contacts__violet-text-outer").eq(index).addClass("contacts__violet-text-outer--start");
                $(".contacts__contact-link").eq(index).addClass("contacts__contact-link--start");
                $(".contacts__location").eq(index).addClass("contacts__location--start");
                // $(".timeline__item").eq(index).addClass("timeline__item--start");
            }
            return j;
        });
    };

    window.onscroll = animate;

    animate();
});