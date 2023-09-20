// Snake constructor file

class Snake {
    constructor() {
        this.body = [];
        this.body[0] = createVector(floor(w/2), floor(h/2));
        this.velocity = [];
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.len = 0;
    }

    update() {
        let head = this.body[this.body.length-1].copy();
        this.body.shift();
        head.x += this.velocity.x
        head.y += this.velocity.y
        this.body.push(head);
    }

    grow() {
        let head = this.body[this.body.length-1].copy();
        this.len++;
        this.body.push(head);
    }

    death() {
        let head = this.body[this.body.length-1].copy();
        let x = head.x;
        let y = head.y;
        if (x > w-1 || x < 0 || y > h-1 || y < 0) {
            return true;
        }
        for (let i = 0; i < this.body.length-1; i++) {
            let part = this.body[i];
            if (part.x == x && part.y == y) {
                return true; // snake has died;
            }
        }
        return false;
        
    }

    eat(pos) {
        let head = this.body[this.body.length-1].copy();
        let x = head.x + this.velocity.x;
        let y = head.y + this.velocity.y;

        if (x == pos.x && y == pos.y) {
            this.grow();
            return true;
        }
        return false;
    }

    show() {
        for(let i = 0; i < this.body.length; i++) {
            fill(0);
            noStroke();
            rect(this.body[i].x, this.body[i].y, 1, 1);
        }
    }

    setVelocity(dir) {
        // if ((this.body[0].x == 0 || this.body[0].x = ))
        switch(dir) {
            case UP_ARROW:
                this.velocity.x = 0;
                this.velocity.y = -1;
                break
            case DOWN_ARROW:
                this.velocity.x = 0;
                this.velocity.y = 1;
                break
            case LEFT_ARROW:
                this.velocity.x = -1;
                this.velocity.y = 0;
                break
            case RIGHT_ARROW:
                this.velocity.x = 1;
                this.velocity.y = 0;
                break
            default:
                console.log("err");
                break
        }
    }
}