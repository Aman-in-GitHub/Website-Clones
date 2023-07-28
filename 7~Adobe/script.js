document.querySelector(".mob-btn").addEventListener("click", () => {
  document.querySelector(".first-line").classList.toggle("active-1");

  document.querySelector(".second-line").classList.toggle("opacity-none");

  document.querySelector(".third-line").classList.toggle("active-2");

  document.querySelector(".main-menu").classList.toggle("left-[-100rem]");

  document.querySelector(".backdrop").classList.toggle("hidden");
});

document.querySelector(".the-ul").addEventListener("touchmove", theFunction);
document.querySelector(".backdrop").addEventListener("touchmove", theFunction);

function theFunction(e) {
  console.log("rolling");
  document.querySelector(".first-line").classList.remove("active-1");

  document.querySelector(".second-line").classList.remove("opacity-none");

  document.querySelector(".third-line").classList.remove("active-2");

  document.querySelector(".main-menu").classList.add("left-[-100rem]");

  document.querySelector(".backdrop").classList.add("hidden");
}

document.querySelector(".backdrop").addEventListener("click", () => {
  document.querySelector(".first-line").classList.toggle("active-1");

  document.querySelector(".second-line").classList.toggle("opacity-none");

  document.querySelector(".third-line").classList.toggle("active-2");

  document.querySelector(".main-menu").classList.toggle("left-[-100rem]");

  document.querySelector(".backdrop").classList.toggle("hidden");
});

const sidebarTitles = document.querySelectorAll(".sidebar-title");
const firstParagraph = document.querySelector(".first-para");
const secondParagraph = document.querySelector(".second-para");
const thirdParagraph = document.querySelector(".third-para");
const fourthParagraph = document.querySelector(".fourth-para");

sidebarTitles.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index === 0) {
      document.querySelector(".first-para").classList.toggle("hidden");
      document.querySelector(".sidebar-1").classList.toggle("hidden");
      document.querySelector(".arrow-1").classList.toggle("rotate-full");
      if (secondParagraph.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".second-para").classList.toggle("hidden");
        document.querySelector(".sidebar-2").classList.toggle("hidden");
        document.querySelector(".arrow-2").classList.toggle("rotate-full");
      }

      if (thirdParagraph.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".third-para").classList.toggle("hidden");
        document.querySelector(".sidebar-3").classList.toggle("hidden");
        document.querySelector(".arrow-3").classList.toggle("rotate-full");
      }

      if (fourthParagraph.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".fourth-para").classList.toggle("hidden");
        document.querySelector(".sidebar-4").classList.toggle("hidden");
        document.querySelector(".arrow-4").classList.toggle("rotate-full");
      }
    }

    if (index === 1) {
      document.querySelector(".second-para").classList.toggle("hidden");
      document.querySelector(".sidebar-2").classList.toggle("hidden");
      document.querySelector(".arrow-2").classList.toggle("rotate-full");
      if (firstParagraph.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".first-para").classList.toggle("hidden");
        document.querySelector(".sidebar-1").classList.toggle("hidden");
        document.querySelector(".arrow-1").classList.toggle("rotate-full");
      }

      if (thirdParagraph.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".third-para").classList.toggle("hidden");
        document.querySelector(".sidebar-3").classList.toggle("hidden");
        document.querySelector(".arrow-3").classList.toggle("rotate-full");
      }

      if (fourthParagraph.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".fourth-para").classList.toggle("hidden");
        document.querySelector(".sidebar-4").classList.toggle("hidden");
        document.querySelector(".arrow-4").classList.toggle("rotate-full");
      }
    }

    if (index === 2) {
      document.querySelector(".third-para").classList.toggle("hidden");
      document.querySelector(".sidebar-3").classList.toggle("hidden");
      document.querySelector(".arrow-3").classList.toggle("rotate-full");
      if (secondParagraph.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".second-para").classList.toggle("hidden");
        document.querySelector(".sidebar-2").classList.toggle("hidden");
        document.querySelector(".arrow-2").classList.toggle("rotate-full");
      }

      if (firstParagraph.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".first-para").classList.toggle("hidden");
        document.querySelector(".sidebar-1").classList.toggle("hidden");
        document.querySelector(".arrow-1").classList.toggle("rotate-full");
      }

      if (fourthParagraph.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".fourth-para").classList.toggle("hidden");
        document.querySelector(".sidebar-4").classList.toggle("hidden");
        document.querySelector(".arrow-4").classList.toggle("rotate-full");
      }
    }

    if (index === 3) {
      document.querySelector(".fourth-para").classList.toggle("hidden");
      document.querySelector(".sidebar-4").classList.toggle("hidden");
      document.querySelector(".arrow-4").classList.toggle("rotate-full");
      if (secondParagraph.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".second-para").classList.toggle("hidden");
        document.querySelector(".sidebar-2").classList.toggle("hidden");
        document.querySelector(".arrow-2").classList.toggle("rotate-full");
      }

      if (firstParagraph.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".first-para").classList.toggle("hidden");
        document.querySelector(".sidebar-1").classList.toggle("hidden");
        document.querySelector(".arrow-1").classList.toggle("rotate-full");
      }

      if (thirdParagraph.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".third-para").classList.toggle("hidden");
        document.querySelector(".sidebar-3").classList.toggle("hidden");
        document.querySelector(".arrow-3").classList.toggle("rotate-full");
      }
    }
  });
});

const arrowsDisabled = document.querySelectorAll(".downed-arrow-disabled");
const arrows = document.querySelectorAll(".downed-arrow");

arrowsDisabled.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("rotate-full");
  });
});

document.querySelector(".extra-content").addEventListener("click", () => {
  document.querySelector(".the-extra-content").classList.toggle("hidden");
});

const body = document.body;
const header = document.querySelector("header");
const headerHeight = document.querySelector("header").offsetHeight;

let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll - lastScroll > 0) {
    header.classList.add("scroll-down");
    header.classList.remove("scroll-up");
  } else {
    header.classList.add("scroll-up");
    header.classList.remove("scroll-down");
  }

  lastScroll = currentScroll;
});

const underlinkTitles = document.querySelectorAll(".underlinks");
const firstPara = document.querySelector(".underpara-1");
const secondPara = document.querySelector(".underpara-2");
const thirdPara = document.querySelector(".underpara-3");
const fourthPara = document.querySelector(".underpara-4");
const fifthPara = document.querySelector(".underpara-5");

underlinkTitles.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index === 0) {
      document.querySelector(".underpara-1").classList.toggle("hidden");
      document.querySelector(".underpara-1").classList.toggle("flex");
      document.querySelector(".first-arrowed").classList.toggle("rotate-full");

      if (secondPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-2").classList.toggle("hidden");
        document.querySelector(".underpara-2").classList.toggle("flex");
        document
          .querySelector(".second-arrowed")
          .classList.toggle("rotate-full");
      }

      if (thirdPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-3").classList.toggle("hidden");
        document.querySelector(".underpara-3").classList.toggle("flex");
        document
          .querySelector(".third-arrowed")
          .classList.toggle("rotate-full");
      }

      if (fourthPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-4").classList.toggle("hidden");
        document.querySelector(".underpara-4").classList.toggle("flex");
        document
          .querySelector(".fourth-arrowed")
          .classList.toggle("rotate-full");
      }

      if (fifthPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-5").classList.toggle("hidden");
        document.querySelector(".underpara-5").classList.toggle("flex");
        document
          .querySelector(".fifth-arrowed")
          .classList.toggle("rotate-full");
      }
    }

    if (index === 1) {
      document.querySelector(".underpara-2").classList.toggle("hidden");
      document.querySelector(".underpara-2").classList.toggle("flex");
      document.querySelector(".second-arrowed").classList.toggle("rotate-full");

      if (firstPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-1").classList.toggle("hidden");
        document.querySelector(".underpara-1").classList.toggle("flex");
        document
          .querySelector(".first-arrowed")
          .classList.toggle("rotate-full");
      }

      if (thirdPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-3").classList.toggle("hidden");
        document.querySelector(".underpara-3").classList.toggle("flex");
        document
          .querySelector(".third-arrowed")
          .classList.toggle("rotate-full");
      }

      if (fourthPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-4").classList.toggle("hidden");
        document.querySelector(".underpara-4").classList.toggle("flex");
        document
          .querySelector(".fourth-arrowed")
          .classList.toggle("rotate-full");
      }

      if (fifthPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-5").classList.toggle("hidden");
        document.querySelector(".underpara-5").classList.toggle("flex");
        document
          .querySelector(".fifth-arrowed")
          .classList.toggle("rotate-full");
      }
    }

    if (index === 2) {
      document.querySelector(".underpara-3").classList.toggle("hidden");
      document.querySelector(".underpara-3").classList.toggle("flex");
      document.querySelector(".third-arrowed").classList.toggle("rotate-full");

      if (firstPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-1").classList.toggle("hidden");
        document.querySelector(".underpara-1").classList.toggle("flex");
        document
          .querySelector(".first-arrowed")
          .classList.toggle("rotate-full");
      }

      if (secondPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-2").classList.toggle("hidden");
        document.querySelector(".underpara-2").classList.toggle("flex");
        document
          .querySelector(".second-arrowed")
          .classList.toggle("rotate-full");
      }

      if (fourthPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-4").classList.toggle("hidden");
        document.querySelector(".underpara-4").classList.toggle("flex");
        document
          .querySelector(".fourth-arrowed")
          .classList.toggle("rotate-full");
      }

      if (fifthPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-5").classList.toggle("hidden");
        document.querySelector(".underpara-5").classList.toggle("flex");
        document
          .querySelector(".fifth-arrowed")
          .classList.toggle("rotate-full");
      }
    }

    if (index === 3) {
      document.querySelector(".underpara-4").classList.toggle("hidden");
      document.querySelector(".underpara-4").classList.toggle("flex");
      document.querySelector(".fourth-arrowed").classList.toggle("rotate-full");

      if (firstPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-1").classList.toggle("hidden");
        document.querySelector(".underpara-1").classList.toggle("flex");
        document
          .querySelector(".first-arrowed")
          .classList.toggle("rotate-full");
      }

      if (secondPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-2").classList.toggle("hidden");
        document.querySelector(".underpara-2").classList.toggle("flex");
        document
          .querySelector(".second-arrowed")
          .classList.toggle("rotate-full");
      }

      if (thirdPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-3").classList.toggle("hidden");
        document.querySelector(".underpara-3").classList.toggle("flex");
        document
          .querySelector(".third-arrowed")
          .classList.toggle("rotate-full");
      }

      if (fifthPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-5").classList.toggle("hidden");
        document.querySelector(".underpara-5").classList.toggle("flex");
        document
          .querySelector(".fifth-arrowed")
          .classList.toggle("rotate-full");
      }
    }

    if (index === 4) {
      document.querySelector(".underpara-5").classList.toggle("hidden");
      document.querySelector(".underpara-5").classList.toggle("flex");
      document.querySelector(".fifth-arrowed").classList.toggle("rotate-full");

      if (firstPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-1").classList.toggle("hidden");
        document.querySelector(".underpara-1").classList.toggle("flex");
        document
          .querySelector(".first-arrowed")
          .classList.toggle("rotate-full");
      }

      if (secondPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-2").classList.toggle("hidden");
        document.querySelector(".underpara-2").classList.toggle("flex");
        document
          .querySelector(".second-arrowed")
          .classList.toggle("rotate-full");
      }

      if (thirdPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-3").classList.toggle("hidden");
        document.querySelector(".underpara-3").classList.toggle("flex");
        document
          .querySelector(".third-arrowed")
          .classList.toggle("rotate-full");
      }

      if (fourthPara.classList.contains("hidden")) {
        console.log(index);
      } else {
        document.querySelector(".underpara-4").classList.toggle("hidden");
        document.querySelector(".underpara-4").classList.toggle("flex");
        document
          .querySelector(".fourth-arrowed")
          .classList.toggle("rotate-full");
      }
    }
  });
});



