//1. n toonii buh huvaagchiig ol
// let n = 78;
// for (let i = 0; i <= n; i++) {
//   if (n % i == 0) {
//     console.log(i);
//   }
// }

// 3.
// let n = 2;
// let sum = 0;
// for (i = 0; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// 4. 5-d huvaagddag
// let n = 37;
// for (let i = 3; i <= n; i++) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
// }

// 5. ogogdson toonuudin tsufruudiig ol
// let n = 123;
// let m = n;
// let numbers = 0;
// let sum = 0;
// for (let i = n.toString().length; i > 0; i--) {
//   numbers = m % 10;
//   sum = sum + numbers;
//   m = (m - numbers) / 10;
// }
// console.log(sum);

//6. Ogogdson toonii urjveriig garga
// let n = 5;
// let hariu = 0;
// for (i = 10; i > 0; i--) {
//   console.log(i, "*", n, "=", i * n);
// }

// Nested loop
let sum = "";
let n = 5
for (let i = 0; i <= n; i++) {
  let s = "$";
  for (let j = n; j > 0; j--) {
    sum = sum + s;
    console.log(sum);
  }
}
