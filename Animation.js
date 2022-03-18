const bg = document.getElementById("bg");
const text = document.getElementById("titel");
const ground = document.getElementById("ground");
const menue = document.querySelector(".menu-botton");
const menuePage = document.querySelector(".menu-page");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const body = document.querySelector("body");
const project1 = document.querySelector(".workshop");
const exit = document.getElementById("exit");
const tesy = document.querySelector(".tesy");
let isShow = false;
let isOpen = false;
const text_hight = text.offsetHeight;
window.addEventListener("scroll", function () {
  const value = window.scrollY;
  bg.style.top = value * 0.2 + "px";
  const groundY = main.getBoundingClientRect();
  ground.style.transform = `translateY(${value * -0.1}px)`;
  text.style.transform = `translateY(${value * 0.5}px)`;
  text.style.opacity = -value / (text_hight / 2) + 1;

  if (groundY.y < 811.8779296875) {
    ground.style.transform = `translateY(${-82}px)`;
  }
  if (groundY.y < 811.8779296875) {
    bg.style.transform = `translateY(${-150}px)`;
  }
});
menue.addEventListener("click", () => {
  if (!isOpen) {
    menue.classList.add("open");
    body.classList.add("open");
    right.classList.add("open");
    left.classList.add("open");
    menuePage.classList.add("open");
    menue.classList.remove("restart");
    isOpen = true;
  } else {
    menue.classList.remove("open");
    body.classList.remove("open");
    left.classList.remove("open");
    right.classList.remove("open");
    menuePage.classList.remove("open");
    menue.classList.add("restart");
    isOpen = false;
  }
});
window.addEventListener("scroll", () => {
  body.classList.toggle("sticky", window.scrollY > 40);
});
function getId(btn) {
  if (!isShow) {
    project1.classList.add("show");
    body.classList.add("show");
    exit.classList.add("show");
    tesy.classList.add("show");

    isShow = true;
  }
  let video;
  if (btn.id == "bt1") {
    video = "../videos/My Video.m4v";
  } else if (btn.id == "bt4") {
    video = "../videos/My Video2.m4v";
  } else if (btn.id == "bt3") {
    video = "../videos/My Video4.m4v";
  } else if (btn.id == "bt2") {
    video = "../videos/My Video3.m4v";
  }
  document.getElementById("first-video").src = video;
}
exit.addEventListener("click", () => {
  project1.classList.remove("show");
  body.classList.remove("show");
  exit.classList.remove("show");
  tesy.classList.remove("show");
  isShow = false;
});
window.onscroll = DoScroll;
function DoScroll() {
  var mydiv = document.getElementById("contact");
  mydiv.style.top = -window.pageYOffset + 230 + "px";
}
