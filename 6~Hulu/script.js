document.querySelector(".mob-btn").addEventListener("click", () => {
  document.querySelector(".hidden-content").classList.toggle("hidden");
  document.querySelector(".mob-btn").classList.toggle("cross");
});

document.querySelector(".toggler").addEventListener("click", () => {
  document.querySelector(".toggler").classList.toggle("bg-gray-500");
  document.querySelector(".toggler").classList.toggle("bg-[#1CE783]");
  document.querySelector(".toggler").classList.toggle("justify-end");
});

const scrollingLinks = document.querySelectorAll(".scrolling-link");
const articles = document.querySelectorAll(".article");
const scrollBar = document.querySelector(".scroller");

scrollingLinks.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    removeContent();
    e.preventDefault();

    scrollBar.style.transform = `translateX(${6 * index}rem)`;

    if (index == 0) {
      document.querySelector(".live-sports").classList.add("active");
      document
        .querySelector(".billy")
        .classList.add("bg-[url('../img/billboard-mobile.jpg')]");
      document
        .querySelector(".billy")
        .classList.add("lg:bg-[url('../img/billboard-bg.jpg')]");
    }
    if (index == 1) {
      document.querySelector(".breaking-news").classList.add("active");
      document
        .querySelector(".billy")
        .classList.add("bg-[url('../img/news-mobile.jpg')]");
      document
        .querySelector(".billy")
        .classList.add("lg:bg-[url('../img/news-mobile.jpg')]");
    }
    if (index == 2) {
      document.querySelector(".biggest-events").classList.add("active");
      document
        .querySelector(".billy")
        .classList.add("bg-[url('../img/events-mobile.jpg')]");
      document
        .querySelector(".billy")
        .classList.add("lg:bg-[url('../img/events-bg.jpg')]");
    }
  });
});

function removeContent() {
  articles.forEach((item) => {
    item.classList.remove("active");
  });

  document
    .querySelector(".billy")
    .classList.remove("bg-[url('../img/billboard-mobile.jpg')]");
  document
    .querySelector(".billy")
    .classList.remove("lg:bg-[url('../img/billboard-bg.jpg')]");

  document
    .querySelector(".billy")
    .classList.remove("bg-[url('../img/news-mobile.jpg')]");
  document
    .querySelector(".billy")
    .classList.remove("lg:bg-[url('../img/news-mobile.jpg')]");

  document
    .querySelector(".billy")
    .classList.remove("bg-[url('../img/events-mobile.jpg')]");
  document
    .querySelector(".billy")
    .classList.remove("lg:bg-[url('../img/events-bg.jpg')]");
}

document.querySelector(".show-add-ons").addEventListener("click", () => {
  document.querySelector(".shown-add-ons").classList.toggle("hidden");
  document.querySelector(".add-ons").classList.toggle("max-h-0");
  document.querySelector(".hidden-add-ons").classList.toggle("hidden");
});

document.querySelector(".hide-add-ons").addEventListener("click", () => {
  document.querySelector(".hidden-add-ons").classList.toggle("hidden");
  document.querySelector(".add-ons").classList.toggle("max-h-0");
  document.querySelector(".shown-add-ons").classList.toggle("hidden");
});

document.querySelector(".browse-section").addEventListener("click", () => {
  document.querySelector(".link-arrow-1").classList.toggle("rotate-180");
  document.querySelector(".browse-links").classList.toggle("hidden");
});

document.querySelector(".help-section").addEventListener("click", () => {
  document.querySelector(".link-arrow-2").classList.toggle("rotate-180");
  document.querySelector(".help-links").classList.toggle("hidden");
});

document.querySelector(".about-section").addEventListener("click", () => {
  document.querySelector(".link-arrow-3").classList.toggle("rotate-180");
  document.querySelector(".about-links").classList.toggle("hidden");
});
