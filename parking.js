// // let time = new Date()
// let counter = 1000
// const second = 1000;
// const minute = second * 60;
// const hour = minute * 60;
// function parkingLot(x){
// x = hour
// if (minute > 30 )
// console.log(total)
// }
// parkingLot(3)

const enter = new Date()
const out = new Date(2023,10,7,18,0,0,0)
console.log("Орсон цаг",enter)
console.log("Гарсан цаг",out)
let sub = Math.abs(out-enter)
console.log(sub, "Милсекунд")
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let hours = Math.floor((sub % day) / hour);
let minutes = Math.floor((sub % hour) / minute);
let seconds = Math.floor((sub % minute) / second);
console.log(hours+"цаг", minutes+"минут", seconds+"секунд")
let money=1000
let every30=0
const count = (minute*30+1);
if (minutes > count){
    every30 = every30 + money
}console.log(every30,"₮")