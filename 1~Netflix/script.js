const introAudio = document.querySelector(".intro");

const loader = document.querySelector(".loader");

const main = document.querySelector(".main");

function playAudio() {
  setTimeout(() => {
    introAudio.volume = 0.5;
    introAudio.play();
  }, 400);
}

playAudio();

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;

    loader.style.display = "none";

    main.style.display = "block";

    setTimeout(() => (main.style.opacity = 1), 50);
  }, 5000);
}

init();

const tabItems = document.querySelectorAll(".tab");
const tabContentItems = document.querySelectorAll(".article-section");

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("red-border");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("red-border");
  });
}

function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });
}

tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});
