import scrollLock from 'scroll-lock';

const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const mobMenu = document.querySelector('.mob');
const navLinks = document.querySelectorAll('.mob .nav__list a');

let isScrollLocked = false;

function toggleScrollLock() {
  if (isScrollLocked) {
    scrollLock.enablePageScroll();
    isScrollLocked = false;
  } else {
    scrollLock.disablePageScroll();
    isScrollLocked = true;
  }
}

function updateMobMenuBodyMargin() {
  const headerTop = document.querySelector('.header__top');
  const mobMenuBody = document.querySelector('.mob__body');

  const height = headerTop.getBoundingClientRect().height;

  mobMenuBody.style.marginTop = `${height}px`;
  mobMenuBody.style.height = `calc(100% - ${height}px)`;
}

function toggleMenu() {
  burger.classList.toggle('is-opened');
  mobMenu.classList.toggle('is-opened');
  header.classList.toggle('is-opened');

  toggleScrollLock();
}

function closeMenu() {
  burger.classList.remove('is-opened');
  mobMenu.classList.remove('is-opened');
  header.classList.remove('is-opened');

  scrollLock.enablePageScroll();
}

function disableOverhide() {
  if (window.innerWidth > 960) {
    scrollLock.enablePageScroll();
  }
}

export function initMenu() {
  updateMobMenuBodyMargin();
  disableOverhide();
  window.addEventListener('resize', updateMobMenuBodyMargin);
  window.addEventListener('resize', disableOverhide);

  if (burger) {
    burger.addEventListener('click', toggleMenu);
  }

  if (navLinks) {
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
}
