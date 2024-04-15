document.getElementById('validation-input').addEventListener('blur', function(event) {
    var inputValue = event.target.value;
    var expectedLength = event.target.getAttribute('data-length');
    if (inputValue.length == expectedLength) {
      event.target.classList.remove('invalid');
      event.target.classList.add('valid');
    } else {
      event.target.classList.remove('valid');
      event.target.classList.add('invalid');
    }
  });