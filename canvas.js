const surface = document.getElementById("canvas").getContext("2d");
function displayCircles(x, y) {
  surface.beginPath();
  surface.arc(x, y, 2, 0, Math.PI * 2, true);
  surface.fill();
  surface.arc(x, y, 5, 0, Math.PI * 2, true);
}


setInterval(() => {
  const x = Math.random() * 700;
  const y = Math.random() * 450;
  displayCircles(x, y);
  printOut(x, y);
}, 1000);