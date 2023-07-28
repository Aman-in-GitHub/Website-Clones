document.getElementById("open-side").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("aside").classList.add("show");
  document.getElementById("backdrop").classList.add("show-blur");
});

document.getElementById("close-side").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("aside").classList.remove("show");
  document.getElementById("backdrop").classList.remove("show-blur");
});

document.getElementById("backdrop").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("aside").classList.remove("show");
  document.getElementById("backdrop").classList.remove("show-blur");
});

const logo = document.querySelector("svg");
const centerNav = document.querySelector(".center");
const rightNav = document.querySelector(".right");
const headingMain = document.querySelector("h1");
const paraMain = document.querySelector("p");
const btnMain = document.querySelector(".main-btn");

function init() {
  setTimeout(() => {
    setTimeout(() => (logo.style.opacity = 1), 500);
    setTimeout(() => (centerNav.style.opacity = 1), 800);
    setTimeout(() => (rightNav.style.opacity = 1), 1200);
    setTimeout(() => (headingMain.style.opacity = 1), 2100);
    setTimeout(() => (paraMain.style.opacity = 1), 2300);
    setTimeout(() => (btnMain.style.opacity = 1), 2600);
  }, 600);
}

init();
