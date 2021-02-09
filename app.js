const input = document.querySelector('input[name="name"]');

input.addEventListener('invalid', function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Por favor, entre com um valor válido');
  }
});

input.addEventListener('change', function (event) {
  event.target.setCustomValidity('');
});
