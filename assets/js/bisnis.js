$(document).ready(function() {

    $("#img-video").click(function(){
        $('html,body').animate(
            {scrollTop: $(".main-raised").offset().top - $('.navbar').height()},
            'slow');

        $(this).hide();
        player = new YT.Player('player', {
        width: '100%',
        height: '100%',
        playerVars: { 'controls': 1,'autohide':1},
        videoId: 'wjb478lwPxw',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
        });

        function onPlayerReady(event) {
            event.target.playVideo();
        } 
        
        function onPlayerStateChange(event) {        
            if(event.data === 0) {            
                $("#player").remove(); 
                $("#playerContainer").append('<div id ="player" width="300" align="left" height="238" style="margin-right:30px;"></div>');
                $("#javaImg").show();
            }
        }
    });
    
    // hover header
    var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

    function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
    
    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.page-header-background').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove click', function(e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;

    });

    moveBackground();
    // end hover header

    // back to top
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    
    $("#back-to-top").click(function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    });
    // end back to top

    // scrollreveal
    var scrollRevealOption = {
        duration   : 600,
        distance   : '20px',
        easing     : 'ease-out',
        origin     : 'bottom',
        reset      : true,
        scale      : 1,
        viewFactor : 0,
        afterReveal  : revealChildren,
      };
      
    ScrollReveal().reveal('#card-1', { delay: 500, scale : 1, distance : '20px', easing : 'ease-out', origin : 'left', reset : true, afterReveal  : revealChildren });
    ScrollReveal().reveal('#card-2', { delay: 1000, scale : 1, distance : '20px', easing : 'ease-out', origin : 'right', reset : true, afterReveal : revealChildren });

    var revealChildren = ScrollReveal().reveal('.judulText, .narsumHost', {
        duration   : 500,
        scale      : 1,
        distance   : '20px',
        origin     : 'bottom',
        reset      : true,
        easing     : 'ease-out',
        viewFactor : 1,
      });

      ScrollReveal().reveal('#news-1', { delay: 500, scale : 1, distance : '20px', easing : 'ease-out', origin : 'right', reset : true });
      ScrollReveal().reveal('#news-2', { delay: 1000, scale : 1, distance : '20px', easing : 'ease-out', origin : 'right', reset : true });
      ScrollReveal().reveal('#news-3', { delay: 1500, scale : 1, distance : '20px', easing : 'ease-out', origin : 'right', reset : true });
});