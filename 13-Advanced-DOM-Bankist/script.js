'use strict';

///////////////////////////////////////
// Modal window

// It is best practice to have all used/selected elements
// at the top of the script
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/* for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); */
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Cookie message
// Create and insert elements
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent =
//  'We use cookies for improved functionality and analytics.';
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

const header = document.querySelector('.header');
//header.prepend(message);
header.append(message);
// If you want to insert multiple times you have
// to clone the element
// header.append(message.cloneNode(true));
//header.before(message);
//header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // The old way of removing elements:
    // message.parentElement.removeChild(message);
  });

// Scroll to section
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  /*   window.scrollTo(
    s1coords.left + window.scrollX,
    s1coords.top + window.scrollY
  ); // scrollY needs to be added */
  /* 
  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth',
  }); */
  // Better:
  /*   window.scrollBy({
    left: s1coords.left,
    top: s1coords.top,
    behavior: 'smooth',
  }); */

  // Modern way of scrolling (OK for modern browsers)
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation
/* 
// Don't do this, it will add an event listener to each element in the NodeList
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
}); */

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log('LINK: ', id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
tabsContainer.addEventListener('mouseover', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // Guard clause (return early)
  if (!clicked) return;
  // Clear active class for all tabs first
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  // Same goes for already showed content
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  // Then add it to the clicked one
  clicked.classList.add('operations__tab--active');

  // Activate content area
  // dataset is set with data-tab="1" in HTML to easily identify and
  // access the tab content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
// Also with event delegation
// Remember: mouseenter/mouseleave do NOT bubble, so we have to use mouseover/mouseout

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // Select the siblings of the hovered link
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// I prefer to use arrow-functions, but the bind here is for demonstration purposes
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation (bad performance! just for demonstration)
/* const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function (e) {
  //console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
 */

// Sticky navigation: Intersection Observer API
// This is a modern way to implement sticky navigation
// It is a bit more complex, but it is more performant
// and more flexible
/* const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};
const obsOptions = {
  root: null, // null means the viewport
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1); */

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
});
headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // Guard clause
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  // Unobserve the section after it has been revealed
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  // Guard clause
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  // Don't directly remove the lazy-img class, because the image might not be loaded yet,
  // load event is emitted when the image is loaded
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', // hide lazy loading effect
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const slides = document.querySelectorAll('.slide');

/* const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4) translateX(-800px)';
slider.style.overflow = 'visible'; */

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
// 0%, 100%, 200%, 300%

function goToSlide(slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
}
goToSlide(0); // Start at slide 0

// Next slide
const nextSlide = function () {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

const prevSlide = function () {
  currentSlide--;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  goToSlide(currentSlide);
};
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
// currentSlide = 1: -100%, 0%, 100%, 200%
// currentSlide = 2: -200%, -100%, 0%, 100%
// etc.

///////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

// console.log(document.documentElement);

// Nodelist is not live data
/* const allSections = document.querySelectorAll('.section');
console.log(allSections);
document.getElementById('section--1');
// HTMLCollection represents live DOM data
const allBtns = document.getElementsByTagName('button');
console.log(allBtns);
console.log(document.getElementsByClassName('btn'));
*/

/* 
// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
//console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// With custom properties like CSS variables, you use setProperty
//document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
// needs camelCase for the attr. names!
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('j');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use this, it will overwrite all classes
logo.className = 'chris';
 */

/* const h1 = document.querySelector('h1');

// Make a one-time event
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
  h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1); */
/*h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
}); */

// Old way of adding events
/* h1.onmousedown = function (e) {
  alert('onmousedown: Great! You are reading the heading :D');
}; */

// Event propagation in practice
// Phase 2: Bubbling up: going up the DOM tree
// addEventListener listens to the bubbling phase
// rgb(255,255,255)
/* const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
};
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);

  // stop propagation (not recommended)
  // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

// Phase 1: Capturing: going down the DOM tree
// addEventListener listens to the capturing phase if you set the third argument to true
// This happens before the bubbling-up
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  true
);
 */

/* // DOM Traversing
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-primary)';

// Closest parent h1 of h1 is h1 itself
h1.closest('h1').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// Up one level and then select all children
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.4)';
}); */
