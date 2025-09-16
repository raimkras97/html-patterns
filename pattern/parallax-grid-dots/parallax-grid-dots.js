const grid = document.getElementById('dotGrid');

document.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  grid.style.backgroundPosition = `${x * 40}px ${y * 40}px`;
});