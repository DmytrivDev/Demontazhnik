import scrollLock from 'scroll-lock';

const btnsOpenModal = document.querySelectorAll('.open-modal');

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.dataset.id;
    const modal = document.getElementById(modalId);
    const btnBack = modal.querySelector('.modal__back');

    function openModal() {
      modal.classList.add('is-visible');
      scrollLock.disablePageScroll();
    }

    function closeModal() {
      modal.classList.remove('is-visible');
      scrollLock.enablePageScroll();
    }

    openModal();

    btnBack.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    });
  });
});
