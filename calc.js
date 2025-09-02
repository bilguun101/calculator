// contents
const calc = document.createElement("div");
const screen = document.createElement("div");
const buttons = document.createElement("div");

const button7 = document.createElement("button");
button7.innerText = "7";
const button8 = document.createElement("button");
button8.innerText = "8";
const button9 = document.createElement("button");
button9.innerText = "9";
const button_add = document.createElement("button");
button_add.innerText = "+";
const button4 = document.createElement("button");
button4.innerText = "4";
const button5 = document.createElement("button");
button5.innerText = "5";
const button6 = document.createElement("button");
button6.innerText = "6";
const button_sub = document.createElement("button");
button_sub.innerText = "-";
const button1 = document.createElement("button");
button1.innerText = "1";
const button2 = document.createElement("button");
button2.innerText = "2";
const button3 = document.createElement("button");
button3.innerText = "3";
const button_mul = document.createElement("button");
button_mul.innerText = "*";
const button_c = document.createElement("button");
button_c.innerText = "C";
const button0 = document.createElement("button");
button0.innerText = "0";
const button_equ = document.createElement("button");
button_equ.innerText = "=";
const button_div = document.createElement("button");
button_div.innerText = "/";

// classes
calc.classList.add("calc");
screen.classList.add("screen");
buttons.classList.add("buttons");

button_add.classList.add("color1");
button_sub.classList.add("color1");
button_mul.classList.add("color1");
button_div.classList.add("color1");
button_equ.classList.add("color1");

button_c.classList.add("color2");

button0.classList.add("color3");
button1.classList.add("color3");
button2.classList.add("color3");
button3.classList.add("color3");
button4.classList.add("color3");
button5.classList.add("color3");
button6.classList.add("color3");
button7.classList.add("color3");
button8.classList.add("color3");
button9.classList.add("color3");

// function
function appendToScreen(value) {
    screen.innerText += value;
}

function action_c() {
    screen.innerText = "";
}

function action_equ() {
    try {
        screen.innerText = eval(screen.innerText);
    } catch {
        screen.innerText = "Error";
    }
}

// click events
button7.onclick = () => appendToScreen("7");
button8.onclick = () => appendToScreen("8");
button9.onclick = () => appendToScreen("9");
button_add.onclick = () => appendToScreen("+");
button4.onclick = () => appendToScreen("4");
button5.onclick = () => appendToScreen("5");
button6.onclick = () => appendToScreen("6");
button_sub.onclick = () => appendToScreen("-");
button1.onclick = () => appendToScreen("1");
button2.onclick = () => appendToScreen("2");
button3.onclick = () => appendToScreen("3");
button_mul.onclick = () => appendToScreen("*");
button_c.onclick = action_c;
button0.onclick = () => appendToScreen("0");
button_equ.onclick = action_equ;
button_div.onclick = () => appendToScreen("/");

// placement
calc.appendChild(screen);
calc.appendChild(buttons);

buttons.appendChild(button7);
buttons.appendChild(button8);
buttons.appendChild(button9);
buttons.appendChild(button_add);
buttons.appendChild(button4);
buttons.appendChild(button5);
buttons.appendChild(button6);
buttons.appendChild(button_sub);
buttons.appendChild(button1);
buttons.appendChild(button2);
buttons.appendChild(button3);
buttons.appendChild(button_mul);
buttons.appendChild(button_c);
buttons.appendChild(button0);
buttons.appendChild(button_equ);
buttons.appendChild(button_div);

document.body.appendChild(calc);
