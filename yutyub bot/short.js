let robot = require('robotjs')
let prompt = require('prompt-sync')()
let press = robot.mouseClick
function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
  }

function shortBot() {

loop = parseInt(prompt('how much shorts do you want to scroll?'))


console.log("5 second until start")
sleep(5000)
for (let i = 0; i < loop;i++) {
//like beggers
  const randomIndexlike = Math.floor(Math.random() * commentslike.length);
  const randomItemlike = commentsWTF[randomIndexlike];
//WTF
const randomIndexWTF = Math.floor(Math.random() * commentsWTF.length);
const randomItemWTF = commentsWTF[randomIndexWTF];
//copy
import('clipboardy').then(clipboardy => {
    clipboardy.writeSync('💀');
  })


robot.moveMouse(1360,774)
sleep(1000)
press()
sleep(1000)
robot.moveMouse(1497,989)
sleep(100)
press()
robot.typeString(randomItemWTF)
robot.keyTap('v', ['control']);
sleep(100)
robot.moveMouse(1497,989)
sleep(100)
press()

sleep(1000)
robot.moveMouse(1861,652)
sleep(10)
press()
}
}







//coments
const emoji_like = '👇'
const emojis_wtf = ['💀','😭']
const commentsWTF = ["nahhh his COOKING today man!", "bladi hell idk what to say","somthing doesnt feel right am i","lol wtf did i see know","did they just talk","if you see that you are gay"]
const commentslike = ["people who don't like skibidi toilet", "pepole who saw him in the back","people who don't like greenScreenKids","People who are still straight in 2024"]
shortBot()