import scrollLock from 'scroll-lock';

const btnsOpenModal = document.querySelectorAll('.open-modal');

btnsOpenModal?.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.id;
    if (modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        const btnBack = modal.querySelector('.modal__back');

        function openModal() {
          modal.classList.add('is-visible');
          modal.classList.add('is-transition');
          scrollLock.disablePageScroll();
        }

        function closeModal() {
          modal.classList.remove('is-visible');
          modal.classList.remove('is-transition');
          scrollLock.enablePageScroll();
        }

        openModal();

        btnBack.addEventListener('click', closeModal);

        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
            closeModal();
          }
        });
      }
    }
  });
});
