//= require TweenMax.min
//= require TweenLite.min
//= require TimelineMax.min
//= require SplitText.min
//= require DrawSVGPlugin.min
//= require ScrollToPlugin.min
//= require MorphSVGPlugin.min
//= require parallax.min





function random(min, max){
  return (Math.random() * (max - min)) + min;
}

$(document).ready(function() {



  var nav = $(".main-nav"),
      header = $(".loader"),
      headercont = $("#loader"),
      presentation = $("#presentation"),
      tl = new TimelineMax();

  tl.staggerFrom(".drawme", 2, {drawSVG:0}, 0.1)
    .from(".black", 1, {autoAlpha:0, scale: .1, yoyo: true})
    .to(header, 4, { y:-1500, ease: Power2.easeOut}, "+=0.5")
    .to(headercont, 1, {scale: 0.5}, "-=3")
    .from(nav, 1, {x:-200}, "-=1")
    .from(presentation, 1, {autoAlpha:0, scale: 1.1}, "-=2");





  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 80;
    traY = ((4 * mouseY) / 570) + 40;
    console.log(traX);
    $(".background-move").css({"background-position": traX + "%" + traY + "%"});
  });



  var right = $(".right")
      left = $(".left")
      center = $(".center");
  var tlog = new TimelineMax({repeat:-1, repeatDelay: 0.5});
  tlog.from(left, 0.2, {autoAlpha:0, scale:1.5, ease: Circ.easeOut})
    .from(center, 0.2, {autoAlpha:0, scale:1.5, ease: Circ.easeOut})
    .from(right, 0.2, {autoAlpha:0, scale:1.5, ease: Circ.easeOut})
    .to(left, 0.2, {autoAlpha:0, scale: 1.5, ease: Circ.easeOut})
    .to(center, 0.2, {autoAlpha:0, scale: 1.5, ease: Circ.easeOut})
    .to(right, 0.2, {autoAlpha:0, scale: 1.5, ease: Circ.easeOut});

  $(".gopro").click(function(){
    TweenMax.to(window, 1, {scrollTo: "#projects"})
  });
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
  })
});





