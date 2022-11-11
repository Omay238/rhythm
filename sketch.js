const song = new URLSearchParams(new URL(window.location));
function setup() {
  createCanvas(400, 400);
  alert(song);
}

function draw() {
  background(220);
}
