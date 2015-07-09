/* SLIDER */

$(window).load(function () {
    $('body').find(".nav").css('pointer-events', 'auto');
    $('body').find(".immersive_slider").css('height', window.innerHeight / 2 - 50);
    $('body').find(".page-image").css('height', window.innerHeight / 2 - 50);
    $('body').find(".google-map").css('height', window.innerHeight / 2 - 50);
    bgimages();
});

$(window).resize(function () {
    bgimages();
    $('body').find(".immersive_slider").css('height', window.innerHeight / 2 - 50);
    $('body').find(".page-image").css('height', window.innerHeight / 2 - 50);
    $('body').find(".google-map").css('height', window.innerHeight / 2 - 50);
});

/* SIDEBAR */

$(".sidebar-icon").pageslide({ direction: "right", modal: true });

/* MAIN MENU */
var ww = document.body.clientWidth;

$(document).ready(function() {
  "use strict";
	$('body').find(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		}
	});
	
	$('body').find(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$('body').find(".nav").toggle();
	});
    adjustMenu();
});

$(window).bind('resize orientationchange', function() {
  "use strict";
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
  "use strict";
	if (ww < 900) {
		$('body').find(".toggleMenu").css("display", "inline-block");
		if (!$('body').find(".toggleMenu").hasClass("active")) {
			$('body').find(".nav").hide();
		} else {
			$('body').find(".nav").show();
		}
		$('body').find(".nav li").unbind('mouseenter mouseleave');
		$('body').find(".nav li a.parent").unbind('click').bind('click', function(e) {
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
	} 
	else if (ww >= 900) {
		$('body').find(".toggleMenu").css("display", "none");
		$('body').find(".nav").show();
		$('body').find(".nav li").removeClass("hover");
		$('body').find(".nav li a").unbind('click');
		$('body').find(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		$(this).toggleClass('hover');
        $(this).toggleClass('activelink');
        $(this).find("ul").toggleClass('animatedfast');
        $(this).find("ul").toggleClass('fadeInDown');
		});
        $('body').find(".nav ul li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
            $(this).toggleClass('hover');
            $(this).find("ul li").toggleClass('animatedfast');
            $(this).find("ul li").toggleClass('fadeInLeft');
		});
	}
};

/* STICKY MENU */
$(document).ready(function() {
    "use strict";
    fixnav();
});

var nav = $('body').find('.fix-nav');
var page = $('body').find('.main-container');

function fixnav() {
    "use strict";
    $(window).bind("scroll", function(){
        if ($(this).scrollTop() > 285 && ww >= 900) {
            nav.addClass("f-nav");
            page.css('padding-top','130px');
        } else {
            nav.removeClass("f-nav");
            page.css('padding-top','30px');
        }
    });
} 

/* SIDEBAR - STICKY MENU */

$('body').find('.sidebar-icon').on("click", function () { 
    nav.animate({'width': ww - 320 }, 200);
});

$('body').find('.close-sidebar').on("click", function () {
    nav.animate({'width': '100%' }, 200);
});

function bgimages() {
    var slidebg = $('.is-container').find(".is-background");
    var slideimg = $('.slide').find(".slide-content");    
    slidebg.each(function () {
    var img = $(this).find("img");
    var imgheight = img.height();
    img.css('top', -((imgheight - imgheight / 2) - 150) + 'px');
});
    slideimg.each(function () {
    var img = $(this).find("img");
    var imgheight = img.height();
    img.css('margin-top', -((imgheight - imgheight / 2) - 150) + 'px');
});
}

/* BACK TO TOP BUTTON */

jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
});

/////////////////* ACCORDION */////////////////////////

jQuery(document).ready(function () {
    "use strict";
    jQuery('.accordion-header').toggleClass('inactive-header');

    jQuery('.accordion-content').css({ 'width': '100%' });

    jQuery('.accordion-header').click(function () {
        if (jQuery(this).is('.inactive-header')) {
            jQuery('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
            jQuery(this).toggleClass('active-header').toggleClass('inactive-header');
            jQuery(this).next().slideToggle().toggleClass('open-content');
        }

        else {
            jQuery(this).toggleClass('active-header').toggleClass('inactive-header');
            jQuery(this).next().slideToggle().toggleClass('open-content');
        }
    });

    return false;
});

/////////////////* NOTICES */////////////////////////

$('body').find('.message-close').on("click", function () { 
   $(this).parent().fadeOut();
});

/* LOADING ANIMATION */

function loading() {
    "use strict";
    $('body').find('#loading').fadeOut();
}
window.onload = loading;