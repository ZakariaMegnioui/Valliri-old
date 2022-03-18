let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".text1", 3, { y: -200 })
  .to(".text2", 3, { y: -200 })
  .to(".text3", 3, { y: -200 })
  .to(".text4", 3, { y: -200 })
  .to(".text5", 5, { y: -400 }, "-=3");
let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "400%",
  triggerHook: 0,
})
  .setTween(timeline)
  .addTo(controller);
