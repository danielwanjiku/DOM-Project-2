function randomcolor() {
  const colors = [
    'red', 'blue', 'green', 'yellow',
    'purple', 'orange', 'pink', 'teal',
    'coral', 'navy', 'gold', 'lime'
  ];

  const colorBox = document.getElementById('color-box');
  const randomIndex = Math.floor(Math.random() * colors.length);
  colorBox.style.backgroundColor = colors[randomIndex];
}