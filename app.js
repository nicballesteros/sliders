//init
let canvasSize = {
    x: 500,
    y: 500
};
let numOfShapes = 3;
let circleDiameter = 20;
let isMousePressed = false;
let check = [];
let singleSliderSol = {
    x: 0,
    y: numOfShapes
}
let lineDim = {
    x: 400,
    y: 10,
    c: 4
};

let shapePos = {
    x: 20,
    y: [100, 200, 300]
};

let circles = []; //3 circles
let lines = []; //3 lines

//setup
function setup() {
    createCanvas(canvasSize.x, canvasSize.y);

    for (let x = 0; x < numOfShapes; x++) {
        let temp = new Circle(shapePos.x, shapePos.y[x], circleDiameter);
        circles.push(temp);
        check.push(false);
    }

    for (let x = 0; x < numOfShapes; x++) {
        let temp = new Line(shapePos.x, shapePos.y[x], lineDim.x, lineDim.y, lineDim.c);
        lines.push(temp);
    }
}
//draw
function draw() {
    background(0);
    for (let x = 0; x < numOfShapes; x++) {
        rect(lines[x].getX(), lines[x].getY() - (.25 * circleDiameter), lines[x].getWidth(), lines[x].getDepth(), lines[x].getCurve());

        ellipse(circles[x].getX(), circles[x].getY(), circles[x].getSize(), circles[x].getSize());
    }
    if (isMousePressed) {
        for (let i = singleSliderSol.x; i < singleSliderSol.y; i++) {
            let x = circles[i].getX();
            let y = circles[i].getY();
            if (sqrt(pow((mouseX - x), 2) + pow((mouseY - y), 2)) < circleDiameter || check[i]) {
                if (mouseX > shapePos.x - circleDiameter/4 && mouseX < (shapePos.x + lineDim.x + circleDiameter/4)) {
                    circles[i].setX(mouseX);
                    singleSliderSol.x = i;
                    singleSliderSol.y = i+1;
                    check[i] = true;
                }
            }
        }
    }
    console.log((shapePos.x + lineDim.x + circleDiameter/2),(shapePos.x - circleDiameter/2), mouseX);
}
//functions
function mousePressed() {
    isMousePressed = true;
    console.log(isMousePressed);
}

function mouseReleased() {
    isMousePressed = false;
    console.log(isMousePressed)

    for (let x = 0; x < numOfShapes; x++) {
        check[x] = false;
    }
    singleSliderSol.x = 0;
    singleSliderSol.y = numOfShapes;
}
