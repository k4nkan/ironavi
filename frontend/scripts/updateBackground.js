let colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFD93D", "#C77DFF"];
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight).parent("pageBackground");

  for (let i = 0; i < 20; i++) {
    circles.push({
      x: random(width),
      y: random(-height, 0),
      r: random(50, 100),
      speed: random(1, 3),
      color: random(colors),
    });
  }
}

function draw() {
  background(255);

  for (let c of circles) {
    c.y += c.speed;

    if (c.y - c.r > height) {
      c.y = -c.r;
      c.x = random(width);
      c.color = random(colors);
    }

    fill(c.color);
    noStroke();
    ellipse(c.x, c.y, c.r * 2);
  }
}
