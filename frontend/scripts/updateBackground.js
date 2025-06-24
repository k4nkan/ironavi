import { colors } from "./data.js";

const sketch = (p) => {
  let circles = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight).parent("pageBackground");

    const circleColors = colors.slice(2, 6).map((c) => c.hex);

    for (let i = 0; i < 20; i++) {
      circles.push({
        x: p.random(p.width),
        y: p.random(-p.height, 0),
        r: p.random(50, 100),
        speed: p.random(1, 3),
        color: p.random(circleColors),
      });
    }
  };

  p.draw = () => {
    p.background(colors[0].hex);

    const circleColors = colors.slice(2, 6).map((c) => c.hex);

    for (let c of circles) {
      c.y += c.speed;

      if (c.y - c.r > p.height) {
        c.y = -c.r;
        c.x = p.random(p.width);
        c.color = p.random(circleColors);
      }

      p.fill(c.color);
      p.noStroke();
      p.ellipse(c.x, c.y, c.r * 2);
    }
  };
};

new p5(sketch, "pageBackground");
