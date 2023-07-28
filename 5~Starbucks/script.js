const toggleBtn = document.getElementById("toggler");
const backDrop = document.querySelector(".backdrop");

toggleBtn.addEventListener("click", () => {
  document.querySelector(".nav1").classList.toggle("shifter");
  document.querySelector(".nav2").classList.toggle("shifter2");
  toggleBtn.classList.toggle("open");
  setTimeout(() => {
    backDrop.classList.toggle("blocked");
  }, 100);
  document.body.classList.toggle("stop-scrolling");
});

backDrop.addEventListener("click", () => {
  document.querySelector(".nav1").classList.toggle("shifter");
  document.querySelector(".nav2").classList.toggle("shifter2");
  toggleBtn.classList.toggle("open");
  document.querySelector(".backdrop").classList.toggle("blocked");
  document.body.classList.toggle("stop-scrolling");
});

document.querySelector(".fa-solid").addEventListener("mouseover", () => {
  document.querySelector(".fa-solid").style.color = "#00704a";
  document.querySelector(".hover-green").style.color = "#00704a";
});

document.querySelector(".fa-solid").addEventListener("mouseleave", () => {
  document.querySelector(".fa-solid").style.color = "black";
  document.querySelector(".hover-green").style.color = "black";
});

document.querySelector(".hover-green").addEventListener("mouseover", () => {
  document.querySelector(".hover-green").style.color = "#00704a";
  document.querySelector(".fa-solid").style.color = "#00704a";
});

document.querySelector(".hover-green").addEventListener("mouseleave", () => {
  document.querySelector(".fa-solid").style.color = "black";
  document.querySelector(".hover-green").style.color = "black";
});

document.getElementById("about-section").addEventListener("click", () => {
  document.getElementById("about-us").classList.toggle("show-links");
  document.getElementById("about-section").classList.toggle("rotate");
});

document.getElementById("career-section").addEventListener("click", () => {
  document.getElementById("careers").classList.toggle("show-links");
  document.getElementById("career-section").classList.toggle("rotate");
});

document.getElementById("impact-section").addEventListener("click", () => {
  document.getElementById("social-impact").classList.toggle("show-links");
  document.getElementById("impact-section").classList.toggle("rotate");
});

document.getElementById("business-section").addEventListener("click", () => {
  document.getElementById("business-partner").classList.toggle("show-links");
  document.getElementById("business-section").classList.toggle("rotate");
});

document.getElementById("order-section").addEventListener("click", () => {
  document.getElementById("order-pickup").classList.toggle("show-links");
  document.getElementById("order-section").classList.toggle("rotate");
});
