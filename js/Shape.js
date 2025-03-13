// Shape base class
class Shape {
    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}


class Ball extends Shape {
    constructor(x, y, velX, velY, size, color) {
        super(x, y, velX, velY); // Call parent constructor
        this.size = size;
        this.color = color;
        this.exists = true; // Add exists property
    }

    
    collisionDetect() {
        for (const ball of balls) {
            if (this !== ball && ball.exists) { // Only check existing balls
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + ball.size) {
                    ball.color = this.color = randomColor();
                }
            }
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

}