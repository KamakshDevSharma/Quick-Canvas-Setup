
//* Circle Class
class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.xVel = (Math.random() - 0.5) * 8;
        this.yVel = 4;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 360, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }

    update() {
        this.draw();

    }

    bounceFromWall() {
        if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
            this.xVel = -this.xVel;
        }
        if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0) {
            this.yVel = -this.yVel;
        }
    }

    // if (this.x + this.radius >= player.x && this.x - this.radius <= player.x + player.width && this.y + this.radius >= player.y) {
    //     this.yVel = -this.yVel;
    // }
}

function checkthisCollision(x1, x2, y1, y2, radius1, radius2) {
    const dist = Math.hypot(x1 - x2, y1 - y2);

    if (dist - radius1 - radius2 < 1) {
        return true;
    } else {
        return false;
    }
}