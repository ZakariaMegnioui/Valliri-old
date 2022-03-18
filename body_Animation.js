let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
let tl = new TimelineMax();
timeline

  .to(".mount", { y: "160%", duration: 1, stagger: 3 })
  .fromTo(".mount", { opacity: 1 }, { opacity: 0, duration: 1 }, "-=1.2")
  .fromTo(".Portfolio", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1")
  .to(".Portfolio", 2, { y: 40 }, "-=1.5")

  .to(".what_Im_Into", 3, { y: -60 })
  .to(".articales", 2, { y: -120 }, "-=2.5");
let scene = new ScrollMagic.Scene({
  triggerElement: "",
  duration: "400%",
  triggerHook: 0,
})
  .setTween(timeline)
  .addTo(controller);
const tL = gsap.timeline({ default: { ease: "power1.out" } });
tL.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tL.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tL.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tL.to(".number ", { x: "0px", duration: 1 }, "-=1");
tL.fromTo(".h3-menu ", { x: "260px" }, { x: "0px", duration: 1 }, "-=1");
tL.to(".title", { y: "0px", duration: 2 }, "-=2");
tL.to(".ground", { y: "4px", duration: 2 }), "-=1";
tL.to(".mount", { y: "-2.5px", duration: 2 }, "-=2");
