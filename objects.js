// const date = new Date("2014/03/15");
// console.log(date);
// const today = new Date();
// const yyyy = today.getFullYear();
// let mm = today.getMonth();
// let dd = today.getDate();
// let hh = today.getHours();
// let mi = today.getMinutes();
// let se = today.getSeconds();
// const formatted = dd + "-" + mm + "-" + yyyy + " " + hh + ":" + mi + ":" + se;
// console.log(formatted);

// const mongol = new Date();
// const yyyy = mongol.getFullYear();
// let mm = mongol.getMonth();
// let dd = mongol.getDate();
// let formatted01 = "Жил" + " " + "-" + " " + yyyy;
// let formatted02 = "Сар" + " " + "-" + " " + mm;
// let formatted03 = "Өдөр" + " " + "-" + " " + dd;
// console.log(formatted01);
// console.log(formatted02);
// console.log(formatted03);

// Find the age
// const today = new Date();
// const birthdate = new Date(1987, 0o1, 20);
// let age = today.getFullYear() - birthdate.getFullYear();
// console.log("нас -", age);

// Birthday
const today = new Date();
const birthDate = new Date("1987/12/01");
if (birthDate.getFullYear() < today.getFullYear()) {
  let difference = today.getFullYear() - birthDate.getFullYear();
  birthDate.setFullYear(birthDate.getFullYear() + difference);
  if (birthDate.getMonth() < today.getMonth()) {
    birthDate.setFullYear(birthDate.getFullYear() + 1);
  }
  //   console.log(birthDate.getFullYear());
}
const oneDay = 1000 * 60 * 60 * 24;
const diff = Math.ceil((birthDate.getTime() - today.getTime()) / oneDay);
console.log("Төрсөн өдөр хүртэл", diff, "хоног үлдсэн байна");

// Exact day
// const today = new Date();
// const weekDays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let day = weekDays[today.getDay()];
// console.log(day);

// find days of birthdate
// const today = new Date();
// let birthDate = new Date(1987, 1, 20);
// if (birthDate.getFullYear() < today.getFullYear()) {
//   let difference = today.getFullYear() - birthDate.getFullYear();
//   birthDate.setFullYear(birthDate.getFullYear() + difference);
//   if (birthDate.getMonth() < today.getMonth()) {
//     birthDate.setFullYear(birthDate.getFullYear() + 1);
//   }
// }
// let time = Math.abs(today - birthDate);
// let days = Math.ceil(time / (1000 * 60 * 60 * 24));
// console.log(days);

// Add days
// const today = new Date();
// console.log(today);
// let additional = 3;
// const newToday = today.setDate(today.getDate() + additional);
// console.log(today);

// Exact days
// const day = new Date();
// // console.log(day);

// const newDay = new Date("2023/1/20");
// console.log(newDay.getMonth());
// console.log(newDay.getDate());
// console.log(newDay);
// let time = Math.abs(day - newDay);
// let days = Math.ceil(time / (1000 * 60 * 60 * 24));
// // console.log(days);

// // birthday to UTC
// const today = new Date();
// const birthDate = new Date(1987, 1, 20);
// if (birthDate.getFullYear() < today.getFullYear()) {
//   let UTCday = today.getUTCFullYear() - birthDate.getUTCFullYear();
//   birthDate.setUTCFullYear(birthDate.getUTCFullYear() + UTCday);
//   if (birthDate.getUTCMonth() < today.getUTCMonth()) {
//     birthDate.setUTCFullYear(birthDate.getUTCFullYear() + 1);
//   }
//   console.log(birthDate.getUTCFullYear());
// }
// const weekDays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wdnesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let day = weekDays[birthDate.getUTCDay()];
// console.log(day);

// // CountDown Timer
// const newdate = new Date("2023/11/20");
// console.log(
//   newdate.getFullYear() + "он",
//   newdate.getMonth() + "сар",
//   newdate.getDate(),
//   "өдөр хүртэл:"
// );
// const second = 1000;
// const minute = second * 60;
// const hour = minute * 60;
// const day = hour * 24;
// let timer;
// timer = setInterval(countDown, second);
// function countDown() {
//   const today = new Date();
//   let time = Math.abs(newdate - today);
//   //   console.log(time);
//   let days = Math.floor(time / day);
//   let hours = Math.floor((time % day) / hour);
//   let minutes = Math.floor((time % hour) / minute);
//   let seconds = Math.floor((time % minute) / second);
//   console.log(
//     days + "өдөр",
//     hours + "цаг",
//     minutes + "минут",
//     seconds + "секунд"
//   );
//   if (time <= 0) {
//     clearInterval(timer);
//     return "Энэ өдөр болов";
//   }
// }

// Birthday
function calcDays(x, a, y, c) {
  let calc = 0;
  calc = calc = (x - 1) * 30 + a - ((y - 1) * 30 + c);
  if (calc <= 0) {
    let final = 365 + calc;
    console.log(final);
  }
  console.log(calc);
}
calcDays(12, 1, 11, 7);
