import IMask from 'imask';
import scrollLock from 'scroll-lock';

const btnsOpenModal = document.querySelectorAll('.open-modal');

btnsOpenModal?.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.id;
    if (modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        const btnBack = modal.querySelector('.comeback');

        function openModal() {
          modal.classList.add('is-visible');
          modal.classList.add('is-transition');

          scrollLock.disablePageScroll(modal, {
            reserveScrollBarGap: true,
          });
        }

        function closeModal() {
          modal.classList.remove('is-visible');
          modal.classList.remove('is-transition');

          scrollLock.enablePageScroll(modal);
        }

        if (!modal.dataset.listenerAdded) {
          btnBack.addEventListener('click', closeModal);

          document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
              closeModal();
            }
          });
          modal.dataset.listenerAdded = 'true';
        }

        openModal();
      }
    }
  });
});

const maskOptions = {
  mask: '+{38} (000) 000 00 00',
};

document.addEventListener('DOMContentLoaded', function () {
  const telInputs = document.querySelectorAll('input[type="tel"]');

  telInputs.forEach(input => {
    IMask(input, maskOptions);
  });
});
