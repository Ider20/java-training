// 1.
let Triangle_P = 0,
  a = 10,
  b = 20,
  c = 15;
Triangle_P = a + b + c;
console.log(Triangle_P);
// 2.
let x = 6,
  y = 4,
  y1 = 0,
  y2 = 0,
  x1 = 0;
x2 = 0;
m = 0;
y1 = y **= 1;
y2 = y **= 2;
x1 = x **= 1;
x2 = x **= 2;
m = y2 - y1 / x2 - x1;
console.log("m =", m);
// 3.
let bit = 1,
  byte = 0,
  kilobyte = 0,
  megabyte = 0,
  gegabyte = 0;
unit = 1024;
byte = bit * 8;
kilobyte = byte * unit;
megabyte = kilobyte * unit;
gegabyte = megabyte * unit;
console.log("1 гегабайтад =", gegabyte, "бит байна");
// 4.
let MBps = 1000000;
Bps = 0;
bps = 0;
MB_three_sec = 1 * MBps;
MB_per_sec = MBps / 3;
console.log(MB_per_sec);
Bps = MB_per_sec * 0.000001;
console.log("Byte rate =", Bps, "Byteps");
bps = Bps * 8 * 1000000000000;
console.log("Bit rate =", bps, "bitps");
// 5.
let side1 = 20,
  side2 = 9,
  side3 = 15,
  area = 0,
  h = 0;
semiP = 0;
p = 0;
p = side1 + side2 + side3;
semiP = p / 2;
area = Math.sqrt(
  semiP * (semiP -= side1) * (semiP -= side2) * (semiP -= side3)
);
console.log("Triangle area =", area, "cm");
h = (2 * area) / side1;
console.log("Triangle height =", h, "cm");
// 6.
let fahrenheit = 0,
  celsius = -5;
console.log("Celsius =", celsius);
fahrenheit = celsius * 1.8 + 32;
console.log("Fahrenheit =", fahrenheit);
// 7.
let fahrenheit01 = 32;
celsius01 = 0;
console.log("Fahrenheit =", fahrenheit01);
celsius01 = ((fahrenheit01 - 32) * 5) / 9;
console.log("Celsius01 =", celsius01);
