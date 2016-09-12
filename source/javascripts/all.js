//= require TweenMax.min
//= require TweenLite.min
//= require DrawSVGPlugin.min
//= require TimelineMax.min
//= require AttrPlugin.min
//= require MorphSVGPlugin.min
//= require SplitText.min
//= require parallax.min


$(document).ready(function() {
  var ico = $(".fa-angle-down");
  var nav = $(".main-nav");
  var tl = new TimelineMax();
  tl.from(".yourpath", 2, {autoAlpha:0, y:120, x:90})
  .staggerFrom(".draw-me", 2, {drawSVG:0}, 0.1)
  .to(ico, 1, {y:20, autoAlpha:1})
  .from(nav, 1, {x:-200});
});








var text = $(".split");

var split = new SplitText(text);

function random(min, max){
  return (Math.random() * (max - min)) + min;
}

$(split.chars).each(function(i){
  TweenMax.from($(this), 2.5, {
    opacity: 0,
    x: random(-500, 500),
    y: random(-500, 500),
    z: random(-500, 500),
    scale: .1,
    delay: i * .02,
    yoyo: true,
  });
});


var backblue = $(".background-blue")

TweenLite.from(backblue, 2, {
  x:300, autoAlpha: 0
});




