// const numbers = [10, 20, 30, 40, 55]
// let sum = 0
// let average = 0
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i] 
// }average = sum/numbers.length
// console.log(average)


// const numbers = [10, 20, 30, 40, 50]
// numbers.pop(4)
// numbers.push(30)
// console.log(numbers)

// let sum = 0
// const numbers = [2, -3, 5, 6, -8, 10]
// for (let i = 0; i < numbers.length; i++){
//   if (numbers[i] > 0 && numbers[i]%2==0){
//         sum += numbers[i]
//   }
// }console.log(sum)
  
let min = 0
const numbers = [6, 3, 5, 22, 46, 17, 1]
for (let i = 0; i < numbers.length; i++){
   if (numbers[0] < numbers[i]){
    min = numbers[0]
   }else if (numbers[1] < numbers[i]){
    min = numbers[1]
   }else if (numbers[2] < numbers[i]){
    min = numbers[2]
   }else if (numbers[3] < numbers[i]){
    min = numbers[3]
   }else if (numbers[4] < numbers[i]){
    min = numbers[4]
   }else if (numbers[5] < numbers[i]){
    min = numbers[5]
   }else if (numbers[6] < numbers[i]){
    min = numbers[6]
   }
}   console.log(min)
