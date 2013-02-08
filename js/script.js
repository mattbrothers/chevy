// parallax stuff
var ctaOpen = false;
function scrollEffect() {
    //Get the scoll position of the page
  scrollPos = $(this).scrollTop();

  $('.time').text(Math.round(scrollPos/100));

  $('.trackbar-bg, .trackbar-knob').css({
    'background-position': '' - (-scrollPos / 18) + "px"
  });

  $('.forever-alone').css({
    'opacity': 2.5 - (+scrollPos / 180)
  });


  if (scrollPos >= 720 && !ctaOpen) {
    $(".header").stop().slideDown('fast');
    ctaOpen = true;
  } else if (scrollPos < 720 && ctaOpen) {
    $(".header").stop().slideUp('fast');
    ctaOpen = false;
  } else if (scrollPos > 4000) {
    $('.iphone-url').css({'background-position':'center top'});
  } else if (scrollPos < 4000) {
    $('.iphone-url').css({'background-position':'center 200px'});
  }
}

$(window).scroll(function() {
    scrollEffect();
}); 

$(function(){
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 40
  });
});

//anchor smooth scrolling
function filterPath(string) {
  return string.replace(/^\//,'').replace(/(index|default).[a-zA-Z]{3,4}$/,'').replace(/\/$/,'');
}
var locationPath = filterPath(location.pathname);
$('a[href*=#]').each(function() {
  var thisPath = filterPath(this.pathname) || locationPath;
  if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/,'')) {
    var $target = $(this.hash), target = this.hash;
    if (target) {
      $(this).click(function(event) {
        event.preventDefault();
        var targetOffset = $target.offset().top;
        $('html, body').animate({scrollTop: targetOffset}, 500, 'linear', function() {
          location.hash = target;
        });
      });
    }
  }
});

// Analytics


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-38129439-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


