let counterValue = 0;

  function updateCounter() {
    const valueSpan = document.getElementById('value');
    valueSpan.textContent = counterValue;
  }

  function handleClick(event) {
    const action = event.target.dataset.action;

    if (action === 'decrement') {
      counterValue--;
    } else if (action === 'increment') {
      counterValue++;
    }

    updateCounter();
  }

  const buttons = document.querySelectorAll('#counter button');
  buttons.forEach(button => {
    button.addEventListener('click', handleClick);
  });

  updateCounter();