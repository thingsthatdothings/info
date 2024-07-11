$(document).ready(function () {
    // Open External Links In New Window
    $('a').each(function () {
        var a = new RegExp('/' + window.location.host + '/');
        if (!a.test(this.href)) {
            $(this).click(function (event) {
                event.preventDefault();
                event.stopPropagation();
                window.open(this.href, '_blank');
            });
        }
    });

    // Hide Header on down scroll, show on up scroll
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.masthead').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the header, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.masthead').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.masthead').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }


    // Enabling blocked text selection using JavaScript
    // document.body.onselectstart = function() {return true;};
    // document.styleSheets[0].insertRule("* { user-select:text !important }", 1);

    // (function() {
    //     'use strict';
      
    //     let style = document.createElement('style');
    //     style.innerHTML = `*{
    //         -webkit-user-select: text !important;
    //         user-select: text !important; 
    //     }`;
      
    //     document.body.appendChild(style);
    //   })();
});