import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

const instVideoSlider = () => {
  const slider = document.querySelector('.video__slider');
  if (slider) {
    const options = {
      type: 'slide',
      speed: 1000,
      pagination: false,
      updateOnMove: true,
      gap: '1.5rem',
      perPage: 3,
      perMove: 1,
      breakpoints: {
        960: {
          perPage: 2,
          speed: 700,
          pagination: true,
          arrows: false,
          gap: '1.25rem',
        },
        500: {
          perPage: 1,
          speed: 500,
        },
      },
    };

    new Splide(slider, options).mount();
  }
};
instVideoSlider();

let militarySliderInstance;

const instMilitarySlider = () => {
  const slider = document.querySelector('.military__splide');

  if (slider && !militarySliderInstance) {
    const options = {
      type: 'slide',
      speed: 1000,
      updateOnMove: true,
      pagination: true,
      arrows: false,
      perPage: 4,
      perMove: 1,
      gap: ' 1.875rem',
      breakpoints: {
        500: {
          perPage: 2,
        },
      },
    };

    militarySliderInstance = new Splide(slider, options).mount();
  }
};

const destroySliders = () => {
  if (militarySliderInstance) {
    militarySliderInstance.destroy();
    militarySliderInstance = null;
  }
};

const checkViewport = () => {
  instMilitarySlider();

  if (window.innerWidth > 960) {
    destroySliders();
  }
};

checkViewport();
window.addEventListener('resize', checkViewport);
