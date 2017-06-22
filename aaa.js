var canvas;
var numbersChecked;
var blockSize = 10;
var maxN;
var curN;
var curM;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    //canvas = createCanvas(200, 200); 
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    noSmooth();
    noStroke();
    colorMode(HSB, 1.0);
    rectMode(CENTER);
    maxN = Math.floor(width / blockSize) * Math.floor(height / blockSize);
    restart();
}

function restart() {
    background(0);
    curN = 0;
    numbersChecked = new Array(maxN);
    numbersChecked[0] = true;
    numbersChecked[1] = true;
    for (var i = 2; i < maxN; i++) {
        numbersChecked[i] = false;
    }
    nextN();
}

function drawPoint(n) {
    var x = (n - 1) % Math.floor(width / blockSize);
    var y = Math.floor((n - 1) / Math.floor(width / blockSize));
    //  point(x, y);
    rect(x * blockSize, y * blockSize, blockSize, blockSize);
}

function nextN() {
    while (numbersChecked[curN]) {
        curN++;
        if (curN >= maxN) {
            restart();
        }
    }
    fill(0);
    numbersChecked[curN] = true;
    drawPoint(curN);
    curM = 2 * curN;
    fill(color(random(1), 1, 1));
}

function nextM() {
    drawPoint(curM);
    numbersChecked[curM] = true;
    curM += curN;
}

function draw() {
    if (curM > maxN) {
        nextN();
    } else {
        for (var i = 0; i < maxN / curN / 100 && curM <= maxN; i++) {
            nextM();
        }
    }
    ellipse(mouseX, mouseY, 100, 100)
}
