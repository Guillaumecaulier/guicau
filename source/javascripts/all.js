//= require TweenMax.min
//= require TweenLite.min
//= require DrawSVGPlugin.min
//= require TimelineMax.min
//= require AttrPlugin.min
//= require MorphSVGPlugin.min
//= require SplitText.min
//= require parallax.min

function random(min, max){
  return (Math.random() * (max - min)) + min;
}

$(document).ready(function() {
  var ico = $(".fa-angle-down");
  var nav = $(".main-nav");
  var tl = new TimelineMax();
  tl.staggerFrom(".drawme", 2, {drawSVG:0}, 0.1)
  .from(".black", 3, {autoAlpha:0, scale: .1, yoyo: true})
  .to(ico, 0.5, {y:20, autoAlpha:1, repeat:1})
  .from(nav, 1, {x:-200});
});








var text = $(".split");

var split = new SplitText(text);



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




