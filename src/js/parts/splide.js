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

let projectSliderInstance;

const instProjectSlider = () => {
  const slider = document.querySelector('.project__splide');

  if (slider && !projectSliderInstance) {
    const options = {
      type: 'slide',
      speed: 1000,
      updateOnMove: true,
      pagination: true,
      arrows: false,
      perPage: 1,
      perMove: 1,
      gap: '1rem',
      drag: false,
      swipe: false,
    };

    projectSliderInstance = new Splide(slider, options).mount();
  }
};

const destroySliders = () => {
  if (militarySliderInstance) {
    militarySliderInstance.destroy();
    militarySliderInstance = null;
  }

  if (projectSliderInstance) {
    projectSliderInstance.destroy();
    projectSliderInstance = null;
  }
};

const checkViewport = () => {
  instMilitarySlider();
  instProjectSlider();

  projectSliderInstance?.on('move', () => {
    document.querySelectorAll('.project__video video').forEach(video => {
      video.pause();
    });
  });

  if (window.innerWidth > 960) {
    destroySliders();
  }
};

checkViewport();
window.addEventListener('resize', checkViewport);

let activeVideo = null;

const playVideo = async videoElement => {
  if (activeVideo && activeVideo !== videoElement) {
    activeVideo.pause(); // Ставим на паузу предыдущее видео
  }

  try {
    await videoElement.play(); // Ждем, пока видео начнет воспроизводиться
    videoElement.controls = true; // Добавляем атрибут controls для текущего видео
    activeVideo = videoElement; // Обновляем активное видео
  } catch (err) {
    console.log(err);
  }
};

// Обработчик для каждого видео, чтобы запустить видео при клике
document.querySelectorAll('.project__video').forEach(videoItem => {
  videoItem.addEventListener('click', function () {
    const video = videoItem.querySelector('video');
    // Если видео не активно, запускаем его
    if (video !== activeVideo) {
      // Убираем кнопку, если она есть
      const button = videoItem.querySelector('.btn-play');
      if (button) {
        button.style.display = 'none';
      }

      // Запускаем текущее видео
      playVideo(video);
    }
  });
});
