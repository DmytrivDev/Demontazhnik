import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import IMask from 'imask';
import axios from 'axios';

async function sendForm(form) {
  const ajaxurl = '/wp-admin/admin-ajax.php';
  const headers = { 'Content-Type': 'multipart/form-data' };
  const myFormData = new FormData(form);
  const params = Object.fromEntries(myFormData.entries());

  try {
    const responce = await axios.get(ajaxurl, { params }, { headers });
    console.log(responce.data);
    if (responce.data !== 'error') {
      formEnd(form, true);
    } else {
      formEnd(form, false);
    }
  } catch (error) {
    formEnd(form, false);
  }
}

function formEnd(form, status) {
  if (status) {
    const successUrl = form.data.success;

    window.location.href = successUrl;
  } else {
    alert('Форма не відправлена. Спробуйте ще раз')
  }
}

const forms = document.querySelectorAll('.submitForm');

forms?.forEach(form => {
  form.addEventListener('submit', submitForm);
});

function submitForm(e) {
  e.preventDefault();

  removeErrors();

  const fileds = e.target.elements;
  let errors = 0;

  Array.from(fileds).forEach(field => {
    const isReq = field.dataset.required;

    if (isReq) {
      const type = field.type;
      const val = field.value;

      if (checkField(field, type, val)) {
        errors += 1;
      }
    }

    field.addEventListener('focus', removeErrors);
    field.addEventListener('change', removeErrors);
  });

  if (!errors) {
    sendForm(e.target);
  }
}

function checkField(field, type, val) {
  let errors = false;

  if (type === 'text') {
    if (isEmpty(val)) {
      field.closest('label').classList.add('is-error');
      errors = true;
    }
  }

  if (type === 'email') {
    if (isEmpty(val) || !isEmail(val)) {
      field.closest('label').classList.add('is-error');
      errors = true;
    }
  }

  if (type === 'tel') {
    if (isEmpty(val) || !isMaskFilled(field)) {
      field.closest('label').classList.add('is-error');
      errors = true;
    }
  }

  if (type === 'checkbox') {
    if (!field.checked) {
      field.closest('label').classList.add('is-error');
      errors = true;
    }
  }

  return errors;
}

function removeErrors() {
  const errors = document.querySelectorAll('.is-error');

  errors.forEach(el => {
    el.classList.remove('is-error');
  });
}

const maskOptions = {
  mask: '+{38}(000)000-00-00',
};

document.addEventListener('DOMContentLoaded', function () {
  const telInputs = document.querySelectorAll('input[type="tel"]');

  telInputs.forEach(input => {
    IMask(input, maskOptions);
  });
});

function isMaskFilled(field) {
  const phoneMask = IMask(field, maskOptions);

  return phoneMask.masked.isComplete;
}
