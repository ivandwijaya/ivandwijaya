class Particle {
  constructor(cw, ch, colors) {
    this.x = Math.random() * cw;
    this.y = Math.random() * ch;
    this.r = 15 + ~~(Math.random() * 20); //radius of the circumcircle
    this.l = 3 + ~~(Math.random() * 2); //polygon sides
    this.a = 2 * Math.PI / this.l; // angle between polygon vertices
    this.rot = Math.random() * Math.PI; // polygon rotation
    this.speed = .05 + Math.random() / 2;
    this.rotSpeed = 0.005 + Math.random() * .005;
    this.color = colors[~~(Math.random() * colors.length)];
  }
  update() {
    if (this.y < -this.r) {
      this.y = ch + this.r;
      this.x = Math.random() * cw;
    }
    this.y -= this.speed;
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.beginPath();
    for (let i = 0; i < this.l; i++) {
      let x = this.r * Math.cos(this.a * i);
      let y = this.r * Math.sin(this.a * i);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = this.color;
    ctx.stroke();

    ctx.restore();
  }
}
