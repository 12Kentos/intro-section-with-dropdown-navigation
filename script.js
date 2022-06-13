"use strict";

const navButton = document.querySelectorAll(".header .menu-button");
const nav = document.querySelector(".mobile-nav");
const darken = document.querySelector(".darken");
const headerItem = document.querySelectorAll(".arrow-list-container");

// Below forEach toggles on and off the nav sidebar

navButton.forEach((button) => {
  button.addEventListener("click", () => {
    nav.classList.toggle("visible__nav");
    darken.classList.toggle("visible__img");
    navButton.forEach((test) => {
      test.classList.toggle("visible__img");
    });
  });
});

// Below forEach toggles on and off the code hiding the navlist As well as adds the classlist active which rotates the arrow

headerItem.forEach((item) => {
  item.addEventListener("click", () => {
    const test = item.lastElementChild;
    test.classList.toggle("active");
    const navItems = item.lastElementChild.lastElementChild;
    navItems.classList.toggle("visible__img");
  });
});
