console.log('Hola');
/*
function parallax_height() {
  var scroll_top = $(this).scrollTop();
  var sample_section_top = $(".sample-section").offset().top;
  var header_height = $(".sample-header-section").outerHeight();
  $(".sample-section").css({ "margin-top": header_height });
  $(".sample-header").css({ height: header_height - scroll_top });
}
parallax_height();
$(window).scroll(function() {
  parallax_height();
});
$(window).resize(function() {
  parallax_height();
});
*/



(function() {
  window.addEventListener('scroll', function(event) {
    var depth, layer, layers, movement, topDistance, translate3d, _i, _len;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (_i = 0, _len = layers.length; _i < _len; _i++) {
      layer = layers[_i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });

}).call(this);

document.addEventListener("DOMContentLoaded", function(){
    // Variables
    var buttonUp = document.querySelector('a[href="#up"]');
    var easings = {
        linear(t) {
            return t;
        },
        easeInQuad(t) {
            return t * t;
        },
        easeOutQuad(t) {
            return t * (2 - t);
        },
        easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
            return t * t * t;
        },
        easeOutCubic(t) {
            return (--t) * t * t + 1;
        },
        easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart(t) {
            return t * t * t * t;
        },
        easeOutQuart(t) {
            return 1 - (--t) * t * t * t;
        },
        easeInOutQuart(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        },
        easeInQuint(t) {
            return t * t * t * t * t;
        },
        easeOutQuint(t) {
            return 1 + (--t) * t * t * t * t;
        },
        easeInOutQuint(t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        }
    };

    // Functions
    /**
     * Animated scroll to up
     */
    function scrollUp(duration, easing) {
        var start = window.pageYOffset;
        var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
        var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, 0);
            return;
        }
        // Animation
        function scroll() {
            var now = 'now' in window.performance ? performance.now() : new Date().getTime();
            var time = Math.min(1, ((now - startTime) / duration));
            var timeFunction = easings[easing](time);
            window.scroll(0, Math.ceil((timeFunction * (0 - start)) + start));
            if (window.pageYOffset === 0) {
                return;
            }
            requestAnimationFrame(scroll);
        }
        // Move
        scroll();
    }

    /**
     * Show and hide button
     */
    function isVisibled() {
        var heightHide = parseInt(buttonUp.getAttribute('height-hide')) || 100;
        if (document.body.scrollTop > heightHide || document.documentElement.scrollTop > heightHide) {
            buttonUp.classList.remove('simplescrollup__button--hide');
            buttonUp.classList.add('simplescrollup__button--show');
        } else {
            // Hide
            buttonUp.classList.remove('simplescrollup__button--show');
            buttonUp.classList.add('simplescrollup__button--hide');
        }
    }

    // Events

    // Click button
    buttonUp.addEventListener('click', function() {
        // Get attributes
        var duration = parseInt(buttonUp.getAttribute('duration')) || 1000;
        var easing = buttonUp.getAttribute('easing') || 'easeInOutQuad';
        // Run
        scrollUp(duration, easing);
    });

    // Auto show and hide button
    window.addEventListener('scroll', isVisibled);
});