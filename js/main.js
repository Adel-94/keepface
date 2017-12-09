
// $(window).load(function() {
//     console.log('hello');
// 	$(".spinner").fadeOut("slow");
//     $(body).fadeOut("slow");
// });

$(document).ready(function () {
       $('#newlanguage,#language').click(function(){
         $('.dropdown-language').toggle();
           $('.dropdown-flags').toggle();
       });
   


    $(".spinner").delay(1000).fadeOut("slow");
    $("#overlayer").delay(1000).fadeOut("slow");
    $(".newmenu i").click(function () {
        $("#newnav").toggle();
    });
    $("#page-submenu-cities i").click(function () {
        $("#page-menu nav").toggle();
    });

    //modal
    $('.bluerightIcon a').click(function () {
        $('#modal2').show();
        //$('#myModal').hide();



    });
    $('times .confirm-button').click(function () {
        $('#modal3').show();
    });
    $('.times .col-md-6').click(function () {
        $('.times .col-md-6').removeClass('selected');
        $(this).addClass('selected');
    });
    //label-switch
    $('.slider').click(function () {

        $(this).addClass('nonleft');
    });
    $(".youtube-link").grtyoutube();

    $('.step-back').click(function () {
        $('#modal2').hide();
        $('myModal').show();

    });
    var $window = $(window),
        win_height_padded = $window.height() * 1.1,
        isTouch = Modernizr.touch;

    if (isTouch) { $('.revealOnScroll').addClass('animated'); }

    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() * 1.1;

        $(".revealOnScroll:not(.animated)").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (scrolled + win_height_padded > offsetTop) {
                console.log($this);
                if ($this.data('timeout')) {
                    window.setTimeout(function () {
                        $this.addClass('animated');
                        $this.addClass($this.data('animation'));
                    }, parseInt($this.data('timeout'), 10));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
        // Hidden...

    }

    revealOnScroll();



    // ACCORDION 

    $(".sechead").click(function () {
        console.log($(this).next())
        $(this).next().slideDown(300);
        $('fa fa-minus').off('click');
        $(".sechead").not($(this)).find("i").removeClass("fa-minus").addClass("fa-plus");
        $(".secbody").not($(this).next()).slideUp(300);
        $(this).find("i").addClass("fa-minus");

    });
    //Contact Section

    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        $('.page-section').each(function (index, element) {
            var sectionTop = $(element).offset().top;
            var sectionBottom = sectionTop + $(element).height();
            if (scrollTop > sectionTop && scrollTop < sectionBottom) {
                var selector = $(element).attr('id');
                $('#page-menu nav li ').removeClass('current')
                $('#page-menu nav li a[data-href="#' + selector + '"]').parent('li').addClass('current')
            }
        });
    });

    $('.dotsmenu li>a').click(function () {
        var section = $(this).data('href');
        var sectionOffset = $(section).offset().top;
        console.log(sectionOffset);
        $('body,html').animate({
            scrollTop: sectionOffset
        }, 1000)
    });

    $("#js-rotating").Morphext({
        animation: "flipInX",
        separator: ",",
        speed: 2000,
        complete: function () {
            
        }
    });


    $(".tab-brand .tab-levels li").click(function () {
        var panattr = $(this).attr("tab-val");
        console.log(panattr);
        $(".tab-brand .tab-levels li").removeClass("act");
        $('.pan').removeClass("act");
        $(this).addClass("act");
        $("#" + panattr).addClass("act");
    });

    // -----firstheader--scroll
    var elementPosition = $('.firstheader').offset();
    $(window).scroll(function () {
        if (($(window).scrollTop() > elementPosition.top)) {

            if ((window.matchMedia('(min-width: 1025px)').matches)) {

                $('.firstheader').css({
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "width": "100%",
                    "z-index": "199",
                    "background-color": "#ed1c5b",
                    "height": "70px",
                    "transition": "height .5s ease",

                });
                $('#logo img').css("width", "75%").css('margin-top', '-15px');
                $('#header-nav ul li a').css({
                    // "font-size": "15px",
                    "padding": "20px 4px"
                });
                $('#header-nav').css("margin-left", "-68px");
                $('#language').css("margin-top", "22px");
            } else {
                $('.firstheader').css({
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "width": "100%",
                    "z-index": "199",
                    "background-color": "#ed1c5b",
                    "height": "70px",
                    "transition": "height .5s ease",

                });
                $('#logo img').css("width", "75%");
                $('#header-nav ul li a').css({
                    // "font-size": "15px",
                    "padding": "20px 4px"
                });
                $('#header-nav').css("margin-left", "-68px");
                $('#language').css("margin-top", "22px");
            }
        } else {
            $('.firstheader').css({
                "position": "static",
                "background-color": "transparent",
                "height": "auto"
            });
            $('#logo img').css("width", "auto").css('margin-top', '0px');
            $('#header-nav ul li a').css({
                "font-size": "15px",
                "padding": "39px 5px"
            });
            $('#header-nav').css("margin-left", "0");
            $('#language').css("margin-top", "40px");
        }


    });

    $('#scrollToBottom').bind("click", function () {
        $('html, body').animate({ scrollTop: $(document).height() }, 1500);
        return false;
    });

          $("#advertisement .owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        items:1
        });
         $(".firstowlslider .owl-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            items: 1,
            responsiveClass:true
        });
        $('.secondowlslider .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            nav: true,
            items: 1,
             responsiveClass:true
            // Navigation
        });
        $('.owl-prev').html('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
         $('.owl-next').html('<i class="fa fa-chevron-right" aria-hidden="true"></i>')
 
        $("#home-clients .owl-carousel").owlCarousel({
            items: 6,
            loop: true,
            margin: 50,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            touchDrag: true,
            mouseDrag: true,
             responsiveClass:true,
                 responsive:{
        0:{
            items:2,
             loop: true,
            
        },
        600:{
            items:3,
             loop: true,
            
        },
        1000:{
            items:6,
             loop: true,
           
            
        }
    }
     
        });
        $("#testimonials .owl-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            items: 1,
            animateOut: 'fadeOut',
            responsiveClass:true

        });
});


//  $(window).scroll(function () {
//      scroll = $(window).scrollTop();
//     if (scroll >= 2000) {
//     $('.count').each(function () {
//         $(this).prop('Counter', 0).animate({
//             Counter: $(this).text()
//         }, {
//                 duration: 3000,
//                 easing: 'swing',
//                 step: function (now) {
//                     $(this).text(Math.ceil(now));
//                 }
//             });
//          });
//         }
//     });

 

  $(window).scroll(function () {
     scroll = $(window).scrollTop();
    scrolltopp=$('.aboutbr').scrollTop();
    if (scroll >= scrolltopp) {
        $('.count-inf').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-number');
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
          
              duration: 2000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
            });  
          });
    } 
  });
     $(window).scroll(function () {
    scroll = $(window).scrollTop();
    scrollTopelement=$('footer').scrollTop();
    if (scroll >= scrollTopelement) {
        $('.count').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
          
              duration: 2000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
            });  
          });
    }
});