function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const colorSpan = document.querySelector('.color');
    const changeColorBtn = document.querySelector('.change-color');
  
    changeColorBtn.addEventListener('click', function() {
      const newColor = getRandomHexColor();
      document.body.style.backgroundColor = newColor;
      colorSpan.textContent = newColor;
    });
  });