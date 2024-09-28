import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const questionLists = document.querySelectorAll('.answers__list');
if (questionLists) {
  questionLists.forEach(list => {
    instAccordion(list);
  });
}

function instAccordion(part) {
  new Accordion(part, {
    duration: 400,
    showMultiple: true,
  });
}
