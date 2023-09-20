let snake;
let res = 20;
let w;
let h;

function setup() {
    frameRate(5);
    createCanvas(400,400);
    w = floor(width / res);
    h = floor(height / res);
    snake = new Snake();
    foodLocation();
}

function foodLocation() {
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x, y);
}

function keyPressed() {
    // this will hopefully do everything
    snake.setVelocity(keyCode);
}

function draw() {
    scale(res);
    background(220);
    if (snake.eat(food)) {
        foodLocation();
    }
    snake.update();
    snake.show();
    
    if (snake.death()) {
        noLoop();
        print("END");
    }

    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);
}   