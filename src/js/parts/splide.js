import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

// const instSlider = () => {
//   const slider = document.querySelector('.splide-hero');

//   if (slider) {
//     const options = {
//       type: 'fade',
//       arrows: false,
//       autoplay: true,
//       interval: 3000,
//       rewind: true,
//       speed: 2000,
//       pagination: false,
//       width: '33.125rem',
//       height: '37.8125rem',
//       breakpoints: {
//         960: {
//           width: '100%',
//           height: '22.5rem',
//         },
//         500: {
//           width: '100%',
//           height: '12.5rem',
//         },
//       },
//     };

//     new Splide(slider, options).mount();
//   }
// };
// instSlider();

const instVideoSlider = () => {
  const slider = document.querySelector('.video__slider');
  if (slider) {
    const options = {
      type: 'slider',
      speed: 1000,
      pagination: false,
      updateOnMove: true,
      gap: '1.5rem',
      perPage: 3,
      breakpoints: {
        960: {
          speed: 500,
        },
      },
    };

    new Splide(slider, options).mount();
  }
};
instVideoSlider();
