const hamburgerMenu = document.querySelector(".header__hamburger");
const body = document.body;
const modalMenu = document.querySelector(".modal");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("header__hamburger--active");

  if (hamburgerMenu.classList.contains("header__hamburger--active")) {
    body.classList.add("no-scroll");
    modalMenu.classList.add("modal--active");
  } else {
    body.classList.remove("no-scroll");
    modalMenu.classList.remove("modal--active");
  }
});

const upButton = document.querySelector(".menu-float");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const widthSize = window.innerWidth;

  if (widthSize >= 680) {
    if (currentScroll >= 510) {
      upButton.classList.add("menu-float--visible");
    } else {
      upButton.classList.remove("menu-float--visible");
    }
  }

  if (widthSize <= 679) {
    if (currentScroll >= 170) {
      upButton.classList.add("menu-float--visible");
    } else {
      upButton.classList.remove("menu-float--visible");
    }
  }

  console.log(currentScroll);
});
