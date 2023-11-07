const data = [
  {
    productName: "Bakery",
    unitPric: 5000,
    amount: 200,
    totalPrice: 1000000,
    cashierID: "01",
    date: "2022-11-01",
  },
  {
    productName: "Tsuivan",
    unitPric: 3000,
    amount: 200,
    totalPrice: 600000,
    cashierID: "01",
    date: "2022-11-01",
  },
  {
    productName: "IndianCurry",
    unitPric: 12000,
    amount: 200,
    totalPrice: 2400000,
    cashierID: "01",
    date: "2022-11-01",
  },
  {
    productName: "ChineseFood",
    unitPric: 3500,
    amount: 200,
    totalPrice: 700000,
    cashierID: "01",
    date: "2022-11-01",
  },
  {
    productName: "Dumpling",
    unitPric: 2500,
    amount: 200,
    totalPrice: 500000,
    cashierID: "01",
    date: "2022-11-01",
  },
  {
    productName: "Pasta",
    unitPric: 1500,
    amount: 200,
    totalPrice: 300000,
    cashierID: "01",
    date: "2022-11-01",
  },
  {
    productName: "Noodle",
    unitPric: 3700,
    amount: 200,
    totalPrice: 740000,
    cashierID: "01",
    date: "2022-11-01",
  },
  {
    productName: "Ramen",
    unitPric: 3200,
    amount: 200,
    totalPrice: 640000,
    cashierID: "01",
    date: "2022-11-01",
  },
  {
    productName: "Pork",
    unitPric: 5500,
    amount: 200,
    totalPrice: 1100000,
    cashierID: "01",
    date: "2022-11-01",
  },
  {
    productName: "Beef",
    unitPric: 9000,
    amount: 200,
    totalPrice: 1800000,
    cashierID: "01",
    date: "2022-11-01",
  },
];
// 1. Нийт борлуулалтын дүнг тооцох
let sum = 0;
for (i = 0; i < data.length; i++) {
  sum += data[i].totalPrice;
}
console.log("Нийлбэр дүн:", sum + "₮");

// 2. Нийт барааны тоог тооцоолох
let sumAmount = 0;
for (i = 0; i < data.length; i++) {
  sumAmount += data[i].amount;
}
console.log("Нийт барааны тоо:", sumAmount + "ш");

// 3,4. Хамгийн их борлогдсон 5 барааны жагсаалт
for (i = 0; i < data.length; i++) {
  for (j = i; j < data.length; j++) {
    if (data[i].totalPrice >= data[j].totalPrice) {
      let subTotal = data[i];
      data[i] = data[j];
      data[j] = subTotal;
    }
  }
}
console.log("--------------------");
console.log("Их дүнгээр зараглсан эхний 5 бараа");
console.log(
  "Борлуулалтын нэр:",
  data[9].productName,
  "Борлуулалтын дүн:",
  data[9].totalPrice
);
console.log(
  "Борлуулалтын нэр:",
  data[8].productName,
  "Борлуулалтын дүн:",
  data[8].totalPrice
);
console.log(
  "Борлуулалтын нэр:",
  data[7].productName,
  "Борлуулалтын дүн:",
  data[7].totalPrice
);
console.log(
  "Борлуулалтын нэр:",
  data[6].productName,
  "Борлуулалтын дүн:",
  data[6].totalPrice
);
console.log(
  "Борлуулалтын нэр:",
  data[5].productName,
  "Борлуулалтын дүн:",
  data[5].totalPrice
);
console.log("--------------------");
console.log("Бага дүнгээр зарагдсан 5 бараа");
console.log(
  "Борлуулалтын нэр:",
  data[0].productName,
  "Борлуулалтын дүн:",
  data[0].totalPrice
);
console.log(
  "Борлуулалтын нэр:",
  data[1].productName,
  "Борлуулалтын дүн:",
  data[1].totalPrice
);
console.log(
  "Борлуулалтын нэр:",
  data[2].productName,
  "Борлуулалтын дүн:",
  data[2].totalPrice
);
console.log(
  "Борлуулалтын нэр:",
  data[3].productName,
  "Борлуулалтын дүн:",
  data[3].totalPrice
);
console.log(
  "Борлуулалтын нэр:",
  data[4].productName,
  "Борлуулалтын дүн:",
  data[4].totalPrice
);
console.log("--------------------");
// Хувь бодох
let sumTotalPrice = 0;
for (let i = 0; i < data.length; i++) {
  sumTotalPrice = sumTotalPrice + data[i].totalPrice;
}
let topFiveProductsPrice =
  data[9].totalPrice +
  data[8].totalPrice +
  data[7].totalPrice +
  data[6].totalPrice +
  data[5].totalPrice;
// console.log(topFiveProductsPrice);
let percentage_high = (topFiveProductsPrice * 100) / sumTotalPrice;
console.log("'Борлуулалт өндөр 5 барааны эзлэх хувь':", percentage_high + "%");
let lowstFiveProductPrice =
  data[4].totalPrice +
  data[3].totalPrice +
  data[2].totalPrice +
  data[1].totalPrice +
  data[0].totalPrice;
let percentage_low = (lowstFiveProductPrice * 100) / sumTotalPrice;
console.log("'Борлуулалт бага 5 барааны эзлэх хувь':", percentage_low + "%");
