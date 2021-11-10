/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// IMPORT CSS


// BURGER MENU

let toBeOpened = true;
const burger = document.querySelector(".nav__burger");
const toggle = document.querySelector(".nav__toggle");
const lines = document.querySelectorAll(".nav__line");
const html = document.getElementById("html");

const toggleBurgerMenu = () => {
  if (toBeOpened) {
    toggle.classList.add("open");
    lines.forEach((line) => {
      line.classList.add("cross-line");
    });
    html.classList.add("no-overflow");
    toBeOpened = false;
    return;
  }

  toggle.classList.remove("open");
  lines.forEach((line) => {
    line.classList.remove("cross-line");
  });
  html.classList.remove("no-overflow");
  toBeOpened = true;
};

burger.addEventListener("click", toggleBurgerMenu);

// SERVICES INJECTION

const services = [
  {
    id: 1,
    text: "Social media",
    icon: {
      url: "./assets/images/social-media.png",
      alt: "",
    },
    slug: "",
  },
  {
    id: 2,
    text: "Infographics",
    icon: {
      url: "./assets/images/infographics.png",
      alt: "",
    },
    slug: "",
  },
  {
    id: 3,
    text: "Presentations",
    icon: {
      url: "./assets/images/presentations.png",
      alt: "",
    },
    slug: "",
  },
  {
    id: 4,
    text: "Illustrations",
    icon: {
      url: "./assets/images/illustrations.png",
      alt: "",
    },
    slug: "",
  },
  {
    id: 5,
    text: "Merchandising",
    icon: {
      url: "./assets/images/merchandising.png",
      alt: "",
    },
    slug: "",
  },
];

const serviceContainer = document.querySelector(".services__bar");

services.forEach((service) => {
  const curr = serviceContainer.innerHTML;
  serviceContainer.innerHTML =
    curr +
    `<article class="services__card">
            <img class="icon" src="${service.icon.url}" alt="" />
            <h4 class="services__service">${service.text}</h3>
        </article>`;
});

// SERVICES RESPONSIVE INJECTION

const serviceResponsiveContainer = document.querySelector(".services__slider");
const controlLeft = document.querySelector(".control--left");
const controlRight = document.querySelector(".control--right");
let currentService = services[0];
let serviceCount = 0;

serviceResponsiveContainer.innerHTML = `
  <article class="services__slide">
    <div class="services__icon">
      <img class="icon" src="${currentService.icon.url}" alt="" />
    </div>
    <h4 class="services__service">${currentService.text}</h3>
  </article>`;

const leftControlEvent = () => {
  serviceCount--;

  if (serviceCount < 0) {
    serviceCount = services.length - 1;
  }

  serviceResponsiveContainer.innerHTML = `
  <article class="services__slide">
    <div class="services__icon">
      <img class="icon" src="${services[serviceCount].icon.url}" alt="" />
    </div>
    <h4 class="services__service">${services[serviceCount].text}</h3>
  </article>`;
};

const rightControlEvent = () => {
  serviceCount++;

  if (serviceCount === services.length) {
    serviceCount = 0;
  }

  serviceResponsiveContainer.innerHTML = `
    <article class="services__slide">
        <div class="services__icon">
            <img class="icon" src="${services[serviceCount].icon.url}" alt="" />
        </div>
        <h4 class="services__service">${services[serviceCount].text}</h3>
    </article>`;
};

controlLeft.addEventListener("click", leftControlEvent);
controlRight.addEventListener("click", rightControlEvent);

// TODO: IMPROVE AND SMOOTHS THE RESPONSIVE SERVICE TRANSITIONS

// TODO: STEPS LOGIC

/******/ })()
;