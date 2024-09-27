import 'img-comparison-slider/dist/index.js';
import 'img-comparison-slider/dist/styles.css';

const setSecondImageHeight = comparisonSlider => {
  const secondImage = comparisonSlider.querySelector('img[slot="second"]');

  if (secondImage) {
    // Получаем высоту родительского элемента
    const parentHeight = comparisonSlider.offsetHeight;

    // Устанавливаем высоту для второго изображения
    secondImage.style.height = `${parentHeight}px`;
  }
};

const updateImageHeights = () => {
  const comparisonSliders = document.querySelectorAll('img-comparison-slider');

  if (comparisonSliders.length > 0) {
    comparisonSliders.forEach(setSecondImageHeight);
  }
};

document.addEventListener('DOMContentLoaded', updateImageHeights);

window.addEventListener('resize', updateImageHeights);
