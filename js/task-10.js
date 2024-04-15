function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = ''; // Clear previous content

    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.className = 'box';
      box.style.width = boxSize + 'px';
      box.style.height = boxSize + 'px';
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      boxSize += 10;
    }
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }

  document.getElementById('createButton').addEventListener('click', function() {
    const amount = parseInt(document.getElementById('boxCountInput').value);
    createBoxes(amount);
  });

  document.getElementById('destroyButton').addEventListener('click', destroyBoxes);

