const burgerBtn = document.querySelector(".burgerBtn");
const nav = document.querySelector(".navigation");
const nav_link = document.querySelectorAll(".nav_link");
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");

const entertainments_pointer = document.querySelector(
  ".entertainments_pointer"
);
const entertainments__arrow = document.querySelector(".entertainments__arrow");
const entertainments_links__wrapper = document.querySelector(
  ".entertainments_links__wrapper"
);

entertainments_pointer.addEventListener("click", () => {
  entertainments__arrow.classList.toggle("entertainments__arrow__active");
  entertainments_links__wrapper.classList.toggle("entertainments_menu__active");
});

nav_link.forEach((el) => {
  const linkPath = el.getAttribute("href");
  console.log(linkPath);

  if (window.location.pathname === linkPath) {
    el.classList.add("nav_link__active");
  }
});

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("menuActive");
  burgerBtn.classList.toggle("burgerActive");
});

document.addEventListener("click", (event) => {
  const targetElement = event.target;
  if (!nav.contains(targetElement)) {
    menu.classList.remove("menuActive");
    burgerBtn.classList.remove("burgerActive");
  }
});
const btnUp = document.querySelector(".btn-up");

function debounce(func, delay) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

const formatHeader = () => {
  if (window.scrollY > 50) {
    header.classList.add("header_reformatted");
  } else {
    header.classList.remove("header_reformatted");
  }

};

document.addEventListener("scroll", formatHeader);
document.addEventListener("DOMContentLoaded", formatHeader);

function getScroll() {
  const isScrollAtBottom =
    window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight;
  if (window.scrollY < 400 || isScrollAtBottom) {
    btnUp.classList.add("btn-up_hide");
  } else {
    btnUp.classList.remove("btn-up_hide");
  }
}

getScroll();

document.addEventListener("scroll", debounce(getScroll, 300));

btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
