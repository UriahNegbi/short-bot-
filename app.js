let robot = require("robotjs");

let prompt = require("prompt-sync")();
//sleep func
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }


function start() {
    console.log("cheackStart")
console.log("welcom this is the bot app")
console.log("do you want to start")

let ans = prompt("Y/N: ")
if(ans.toUpperCase() == "Y") {
console.log("good")
//call bot after start
bot()
}


else if (ans.toUpperCase() == "N") {
console.log("bye")
process.exit();
}

else{

    console.clear()
console.log("pliz type Y/N")
start()
}

}

function bot() {
    console.clear()
    //res vaule to 0
let xValue = 0;
let yValue = 0;
console.log("choose were do you want to click")
console.log("you have 5 seconds")
console.log("just put your mouse there")
sleep(5000)
let pos_click = robot.getMousePos();
console.log("Current mouse position:", pos_click);


//conform pos
function confirmPOS() {
    console.clear
 let cheackPos = prompt("Are these the coordinates Y/N? ")
 if(cheackPos.toUpperCase() == "Y") {
    console.log("good!")
xValue = pos_click.x;
yValue = pos_click.y;
stringASK()
 }
 else if (cheackPos.toUpperCase() === "N") {
    console.log("Okay, let's try again.");
    bot()
 }
 else {
    console.log("type Y/N")
    confirmPOS()

 }
}


function stringASK() {
    console.log("Do you want to put str? N for no")
ans = prompt("what do you want? ")
let time = parseInt(prompt("how much times do you want this to run?"))
if(ans.toUpperCase() == "N") {
    console.log("4 seconds to start")
    sleep(4000)
    robot.moveMouse(xValue,yValue)
    robot.mouseClick()
}
else {
            console.log("4 seconds to start");
        sleep(4000);  // pause execution for 4 seconds
    for (let A = 0; A < time; A++) {
        sleep(200)
        robot.moveMouse(xValue, yValue);
        robot.mouseClick();
        robot.typeString(ans);
        robot.keyTap('enter')
}

}
}






confirmPOS()

console.log("cheack2")
}


function bot2() {
    console.clear()
    //res vaule to 0
let xValue = 0;
let yValue = 0;
console.log("choose were do you want to click")
console.log("you have 5 seconds")
console.log("just put your mouse there")
sleep(5000)
let pos_click = robot.getMousePos();
console.log("Current mouse position:", pos_click);


//conform pos
function confirmPOS() {
    console.clear
 let cheackPos = prompt("Are these the coordinates Y/N? ")
 if(cheackPos.toUpperCase() == "Y") {
    console.log("good!")
xValue = pos_click.x;
yValue = pos_click.y;
stringASK()
 }
 else if (cheackPos.toUpperCase() === "N") {
    console.log("Okay, let's try again.");
    bot()
 }
 else {
    console.log("type Y/N")
    confirmPOS()

 }
}


function stringASK() {
    console.log("Do you want to put str? N for no")
ans = prompt("what do you want? ")
let time = parseInt(prompt("how much times do you want this to run?"))
if(ans.toUpperCase() == "N") {
    console.log("4 seconds to start")
    sleep(4000)
    robot.moveMouse(xValue,yValue)
    robot.mouseClick()
}
else {
            console.log("4 seconds to start");
        sleep(4000);  // pause execution for 4 seconds
    for (let A = 0; A < time; A++) {
        sleep(200)
        robot.moveMouse(xValue, yValue);
        robot.mouseClick();
        robot.typeString(ans);
        robot.keyTap('enter')
}

}
}






confirmPOS()

console.log("cheack2")
}




start()
console.log("finish")

