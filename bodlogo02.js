function example() {
  let age01 = document.getElementById("test");

  // console.log(/^([0-9]{2,})$/.test(age01.value));

  if (!age01.value) {
    document.getElementById("result").innerHTML = "Насаа оруулна уу";
  } else if (age01.value <= 2) {
    document.getElementById("result").innerHTML = "Нярай хүүхэд";
  } else if (2 < age01.value && age01.value < 18) {
    document.getElementById("result").innerHTML = "Хүүхэд";
  } else if (18 < age01.value && age01.value <= 120) {
    document.getElementById("result").innerHTML = "Насанд хүрсэн хүн";
  } else {
    document.getElementById("result").innerHTML = "Насны тоо хэтэрсэн байна";
  }
}
// exercise 02 begins here
function odd() {
  let number = document.getElementById("odd_number");
  let z = (number.value %= 2);
  if (!z) {
    document.getElementById("result_odd").innerHTML = "Тэгш тоо байна";
  } else {
    document.getElementById("result_odd").innerHTML = "Сондгой тоо байна";
  }
}
// exercise 03 begins here
// function large() {
//   let a = document.getElementById("a"),
//     b = document.getElementById("b"),
//     c = document.getElementById("c");
//   if (a.value > b.value && a.value > c.value) {
//     document.getElementById("result_large").innerHTML = "А тоо нь их";
//   } else if (b.value > a.value && b.value > c.value) {
//     document.getElementById("result_large").innerHTML = "В тоо нь их";
//   } else if (c.value > a.value && c.value > b.value) {
//     document.getElementById("result_large").innerHTML = "C тоо нь их";
//   }
// }
function large() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  console.log(num1, num2, num3);
  let largest;
  // check the condition
  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }
  // display the result
  document.getElementById("result_large").innerHTML = largest;
  console.log("The largest number is " + largest);
}
// exercise 04 begins here
function second_large() {
  let a1 = document.getElementById("a1"),
    b1 = document.getElementById("b1"),
    c1 = document.getElementById("c1"),
    d1 = document.getElementById("d1");
  console.log(a1.value, b1.value, c1.value, d1.value);

  if (a1.value > b1.value && a1.value > c1.value && a1.value < d1.value) {
    document.getElementById("result_second_large").innerHTML = a1.value;
  } else if (
    a1.value >= b1.value &&
    a1.value <= c1.value &&
    b1.value >= d1.value
  ) {
    document.getElementById("result_second_large").innerHTML = a1.value;
  } else if (
    a1.value <= b1.value &&
    a1.value >= c1.value &&
    a1.value >= d1.value
  ) {
    document.getElementById("result_second_large").innerHTML = a1.value;
  } else if (
    b1.value >= a1.value &&
    b1.value >= c1.value &&
    b1.value <= d1.value
  ) {
    document.getElementById("result_second_large").innerHTML = b1.value;
  } else if (
    b1.value >= a1.value &&
    b1.value <= c1.value &&
    b1.value >= d1.value
  ) {
    document.getElementById("result_second_large").innerHTML = b1.value;
  } else if (
    b1.value <= a1.value &&
    b1.value >= c1.value &&
    b1.value >= d1.value
  ) {
    document.getElementById("result_second_large").innerHTML = b1.value;
  } else if (
    c1.value >= a1.value &&
    c1.value >= b1.value &&
    c1.value <= d1.value
  ) {
    document.getElementById("result_second_large").innerHTML = c1.value;
  } else if (
    c1.value >= a1.value &&
    c1.value <= b1.value &&
    c1.value >= d1.value
  ) {
    document.getElementById("result_second_large").innerHTML = c1.value;
  } else {
    document.getElementById("result_second_large").innerHTML = c1.value;
  }
}
// exersice 05 repeating exersice 02
