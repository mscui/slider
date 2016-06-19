
    var count = 1;
    var width = 580;
    var animatespeed = 1000;
    var intervalspeed = 3000;
    var interval;
    var $slider = $('#slider');
    var $slides = $('.slides');
    var $slidesItem = $slides.find('li');
    var $btn = $('.slides-btn li');
    var slideAnimateRight = function (argument) {
        $slides.animate({marginLeft: "-=" + width}, animatespeed, function () {
            count ++;
            $btn.removeClass('active');
            if (count === $slidesItem.length - 1) {
                count = 1;
                $slides.css('marginLeft', -580);
                $($btn.get(0)).addClass('active');
            } else {
                var num = count - 1;
                $($btn.get(num)).addClass('active');
            }
        });
    }
    var slideAnimateLeft = function (argument) {
        $slides.animate({marginLeft: "+=" + width}, animatespeed, function () {
            count --;
            $btn.removeClass('active');
            if (count === 0) {
                count = 4;
                var num = count - 1;
                $slides.css('marginLeft', -width*count);
                $($btn.get(num)).addClass('active');
            } else {
                var num = count - 1;
                $($btn.get(num)).addClass('active');
            }
        });
    }
    $('.arrow-l').click(function () {
        slideAnimateLeft();
    });
    $('.arrow-r').click(function () {
        slideAnimateRight();
    });
    var startInterval = function () {
        interval = setInterval(function() {
            // slideAnimateRight();
        }, intervalspeed);
        $('.arrow').fadeOut();
    };
    var stopInterval = function () {
        clearInterval(interval);
        $('.arrow').fadeIn();
    };

    $slider.on('mouseenter', stopInterval).on('mouseleave', startInterval);
    var toPic = function () {
        var num = $(this).index();
        // var $slider = $(this).closest('#slider');
        $slides.animate({marginLeft: -width*(num + 1) + 'px'}, animatespeed);
        $btn.removeClass('active');
        $($btn.get(num)).addClass('active');
        count = num + 1;
    };
    $btn.on('click', toPic);
    startInterval();