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
// let sum = 0
// for (i = 0; i < data.length; i++){
//   sum += data[i].totalPrice
// }
// console.log("Niilber dun:",sum)  

// 2. Нийт барааны тоог тооцоолох
// let sumAmount = 0
// for (i = 0; i < data.length; i++){
//   sumAmount += data[i].amount
// }
// console.log("Нийт барааны тоо:", sumAmount)

// 3. Хамгийн их борлогдсон 5 барааны жагсаалт

for (i = 0; i < data.length; i++){
  for(j = i; j < data.length; j++){
    if(data[i].totalPrice >= data[j].totalPrice){
      let subTotal = data[i].totalPrice
      data[i].totalPrice = data[j].totalPrice
      data[j].totalPrice = subTotal
    }console.log(data)
  }
}