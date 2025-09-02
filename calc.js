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
// contents' end


// classes
calc.classList.add("calc");
screen.classList.add("screen");
buttons.classList.add("buttons");
// class' end


// click

// click's end


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
// placement's end