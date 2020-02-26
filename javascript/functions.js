// let accnumber = 50449921
// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50449921)

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp(2,5));

// return is just remembering values, logging it to the consoles

// function square(number) {
//     return number * number;
// };
// console.log(square(5));

// function factorial (n) {
//     if ((n===0) || (n===1)) {
//         return 1;
//     }else{
//         return(n*factorial(n-1));
//     }
// }
// console.log(factorial)

// const square = function(number){
//     return number*number;
// };
// console.log(square(5));

//use arrow function =>

// change into arrow fucntion via const and =

// let orderCount=0;

// const takeOrder=(topping)=>{
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }

// takeOrder("pineapple");

// let orderCount=0;

// const takeOrder=(topping, topping2)=>{
//     console.log(`Pizza with ${topping} and ${topping2}`);
//     orderCount++
//     console.log(`Your order count is ${orderCount}`)
// }
// takeOrder("pineapple", "ham");

// // liams

// // let orderCount = 0;
// // const takeOrder = (topping1, topping2, topping3) => {
// //     orderCount ++;
// //     console.log(`Order number ${orderCount}. A pizza with ${topping1}, ${topping2} and ${topping3}.`);
// // }
// // takeOrder("pepperoni", "extra cheese", "garlic")
// // takeOrder("anchovies", "mushroom", "pineapple")

// //for cash machine, variable actual pin, varial account balance

// let age = 19


// if (age <=17) { 
//     console.log("The ticket price for a child is £8")
// }
// else if (age <=18 || age <=59) {
//     console.log("The ticket price fo an adult is £10.95")
// }
// else if (age >=60){
//     console.log("Ticket price for seniors is £7.50 ")
// }


// const pressGrindBeans = () => {
//     console.log ("Grinding for 20 seconds")
// }

// pressGrindBeans();

// let coffeeIsGrinding = false

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false
//     } else{
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding=true;
//     }
// }

// pressGrindBeans()

// const takeOrder = (size, drinkType) => {
//     console.log(`Order recieved: ${size} ${drinkType}`)
// }
// takeOrder("Tall", "Latte")

// let actualPin = 1234
// let accBal = 500

// const cashMachine = (inputPin, amount) => {
//     if (inputPin == actualPin && amount <= accBal) {
//         console.log(`Please take your ${amount}`)
//     }
//     else if (inputPin==actualPin &&amount > accBal) {
//         console.log("Insufficent funds.")
//     }
//     else{
//         console.log("incorrect PIN")
//     }
// }

// cashMachine(1234, 200)
// cashMachine(1233, 500)
// cashMachine(1234, 600)

const subtract=(num1, num2)=>{
    console.log(num1 - num2);
}