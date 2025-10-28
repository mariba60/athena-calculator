let keyCount;
let equation = [];

function setup() {
    keyCount = 0;
    
    createCanvas(500, 500);
    background(156, 61, 108); // dark pink

    // outer square, contains buttons and screen
    fill(255, 220, 230); // lightest pink
    noStroke();
    rect(20, 20, 460, 460, 10);

    // screen
    fill(255, 192, 203); // light pink
    rect(40, 40, 420, 120, 10);

    // buttons
    fill(156, 61, 108);
    // top row
    rect(40, 180, 90, 50, 10);
    rect(150, 180, 90, 50, 10);
    rect(260, 180, 90, 50, 10);
    rect(370, 180, 90, 50, 10);
    // second row
    rect(40, 250, 90, 50, 10);
    rect(150, 250, 90, 50, 10);
    rect(260, 250, 90, 50, 10);
    rect(370, 250, 90, 50, 10);
    // third row
    rect(40, 320, 90, 50, 10);
    rect(150, 320, 90, 50, 10);
    rect(260, 320, 90, 50, 10);
    rect(370, 320, 90, 50, 10);
    // fourth row
    rect(40, 390, 90, 50, 10);
    rect(150, 390, 90, 50, 10);
    rect(260, 390, 90, 50, 10);
    rect(370, 390, 90, 50, 10);

    // keys
    fill(355);
    textSize(30);
    text("1", 75, 215);
    text("2", 185, 215);
    text("3", 295, 215);
    text("+", 408, 215);
    text("4", 75, 285);
    text("5", 185, 285);
    text("6", 295, 285);
    text("-", 408, 285);
    text("7", 75, 355);
    text("8", 185, 355);
    text("9", 295, 355);
    text("x", 408, 355);
    text("0", 75, 425);
    text(".", 190, 425);
    text("DEL", 280, 425);
    text("/", 408, 425);
}

function draw() {
}

function keyPressed() {
    if (keyCode == 32) {
        setup();
        equation = [];
    } else if (keyCode == 8) {
        keyCount--;
    } else {
        keyCount++;
    }
    if (keyCount > 8) {
        return;
    }
    textSize(80);
    fill(0);
    if (key === '1') {
        text("1", 50 * keyCount, 130);
        equation.push('1');
    } else if (key === '2') {
        text("2", 50 * keyCount, 130);
        equation.push('2');
    } else if (key === '3') {
        text("3", 50 * keyCount, 130);
        equation.push('3');
    } else if (key === '4') {
        text("4", 50 * keyCount, 130);
        equation.push('4');
    } else if (key === '5') {
        text("5", 50 * keyCount, 130);
        equation.push('5');
    } else if (key === '6') {
        text("6", 50 * keyCount, 130);
        equation.push('6');
    } else if (key === '7') {
        text("7", 50 * keyCount, 130);
        equation.push('7');
    } else if (key === '8') {
        text("8", 50 * keyCount, 130);
        equation.push('8');
    } else if (key === '9') {
        text("9", 50 * keyCount, 130);
        equation.push('9');
    } else if (key === '0') {
        text("0", 50 * keyCount, 130);
        equation.push('0');
    }
}