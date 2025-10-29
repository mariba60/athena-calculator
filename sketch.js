let keyCount;
let equation = [];
let lastInput; // 0 = number, 1 = operation

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
    text("DEL", 170, 425);
    text("=", 295, 425);
    text("/", 410, 425);

    textSize(80);
    fill(0);
}

function performOperation(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2;
    } else if (operator == '-') {
        return num2 - num1;
    } else if (operator == '*') {
        return num1 * num2;
    } else if (operator == '/') {
        return num2 / num1;
    }
}

function calculate() {
    var result = 0;
    var equation2 = [];
    // first pass - make all numbers together
    var i = 1;
    for (var i = 0; i < equation.size(); i++) {
        if (equation[i] != '+' | '-' | '*' | '/' && equation[i - 1] != '+' | '-' | '*' | '/') {
            equation[i] = "" + (unchar(equation[i - 1]) * 10 + equation[i]);
            equation[i - 1] = '-1';
        }
    }
    // second pass
    for (var i = 0; i < equation.size(); i++) {
        if (unchar(equation[i]) >= 0) {
            equation2.push(equation[i]);
        }
    }
    setup();
    //text(equation2, 0, 0);
    return result;
}

function keyPressed() {
    if (keyCode == 32 || key == 'Backspace') {
        setup();
        equation = [];
    } else if (keyCount > 7) {
        return;
    }
    if ((keyCode > 47 && keyCode < 58)) { // if it's a number
        keyCount++;
        text(key, 50 * keyCount, 130);
        lastInput = 0;
    }
    // if (key == '1') {
    //     text("1", 50 * keyCount, 130);
    // } else if (key == '2') {
    //     text("2", 50 * keyCount, 130);
    // }
    if (lastInput == 0) {
        if (key == '+') {
            keyCount++;
            text("+", 50 * keyCount, 130);
            equation.push("+");
        } else if (key == '-') {
            keyCount++;
            text("-", 50 * keyCount, 130);
            equation.push("-");
        } else if (key == '*') {
            keyCount++;
            text("x", 50 * keyCount, 130);
            equation.push("*");
        } else if (key == '/') {
            keyCount++;
            text("/", 50 * keyCount, 130);
            equation.push("/");
        }
    }
    if (keyCode == '13') {
        text(calculate(), 50, 130);
    }
}

function mousePressed() {
    if ((mouseX > 150 && mouseX < 240 && mouseY > 390 && mouseY < 440)) {
        setup();
        equation = [];
    }
    if (keyCount > 7 && !enterkey) {
        return;
    }
    if (mouseX > 40 && mouseX < 130 && mouseY > 180 && mouseY < 230) {
        keyCount++;
        text("1", 50 * keyCount, 130);
        equation.push('1');
    } else if (mouseX > 150 && mouseX < 240 && mouseY > 180 && mouseY < 230) {
        keyCount++;
        text("2", 50 * keyCount, 130);
        equation.push('2');
    } else if (mouseX > 260 && mouseX < 350 && mouseY > 180 && mouseY < 230) {
        keyCount++;
        text("3", 50 * keyCount, 130);
        equation.push('3');
    } else if (mouseX > 40 && mouseX < 130 && mouseY > 250 && mouseY < 300) {
        keyCount++;
        text("4", 50 * keyCount, 130);
        equation.push('4');
    } else if (mouseX > 150 && mouseX < 240 && mouseY > 250 && mouseY < 300) {
        keyCount++;
        text("5", 50 * keyCount, 130);
        equation.push('5');
    } else if (mouseX > 260 && mouseX < 350 && mouseY > 250 && mouseY < 300) {
        keyCount++;
        text("6", 50 * keyCount, 130);
        equation.push('6');
    } else if (mouseX > 40 && mouseX < 130 && mouseY > 320 && mouseY < 370) {
        keyCount++;
        text("7", 50 * keyCount, 130);
        equation.push('7');
    } else if (mouseX > 150 && mouseX < 240 && mouseY > 320 && mouseY < 370) {
        keyCount++;
        text("8", 50 * keyCount, 130);
        equation.push('8');
    } else if (mouseX > 260 && mouseX < 350 && mouseY > 320 && mouseY < 370) {
        keyCount++;
        text("9", 50 * keyCount, 130);
        equation.push('9');
    } else if (mouseX > 40 && mouseX < 130 && mouseY > 390 && mouseY < 440) {
        keyCount++;
        text("0", 50 * keyCount, 130);
        equation.push('0');
    }
    if (mouseX > 370 && mouseX < 460 && mouseY > 180 && mouseY < 230) {
        keyCount++;
        text("+", 50 * keyCount, 130);
        equation.push("+");
    } else if (mouseX > 370 && mouseX < 460 && mouseY > 250 && mouseY < 300) {
        keyCount++;
        text("-", 50 * keyCount, 130);
        equation.push("-");
    } else if (mouseX > 370 && mouseX < 460 && mouseY > 320 && mouseY < 370) {
        keyCount++;
        text("x", 50 * keyCount, 130);
        equation.push("*");
    } else if (mouseX > 370 && mouseX < 460 && mouseY > 390 && mouseY < 440) {
        keyCount++;
        text("/", 50 * keyCount, 130);
        equation.push("/");
    }
    if (key === 'Enter') {
        calculate();
    }
}