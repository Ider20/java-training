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
function large() {
  let a = document.getElementById("a"),
    b = document.getElementById("b"),
    c = document.getElementById("c");
  if (a.value > b.value && a.value > c.value) {
    document.getElementById("result_large").innerHTML = "А тоо нь их";
  } else if (b.value > a.value && b.value > c.value) {
    document.getElementById("result_large").innerHTML = "В тоо нь их";
  } else if (c.value > a.value && c.value > b.value) {
    document.getElementById("result_large").innerHTML = "C тоо нь их";
  }
}
