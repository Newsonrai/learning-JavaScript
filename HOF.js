// higher order functions in JavaScript:

// 1. .filter
// 2. map
// 3. reduce
// 4. forEach


// callback function are the functions passed as an argument to another function:

// function sayHello(name,callback){
//     console.log(name)
//     callback()
// }
// function sayGoodbye(){
//     console.log("Goodbye")
// }
// sayHello("Newson",sayGoodbye)



// High order functions are functions that take other functions as arguments or return a function.

// 1.forEach HOF --->
// const fruits=["Apple","Banana","Orange","Mango"];
// fruits.forEach(function(fruit){
//     console.log(fruit)
// })



// const numbers=[1,2,3,4,5,6,7,8,9,10]
// const squarednumbers=[]

// numbers.forEach(function(number){
//     squarednumbers.push(number*number)
// })
// console.log(squarednumbers)


// 2.map HOF --->


// const numbers=[1,2,3,4,5]
// const squarednumbers=numbers.map(function(number){
//     return number**2
// })

// console.log(squarednumbers)


// const users=[
//     {
//         id:1,
//         firstName:"Newson",
//         lastName:"Rai",
//         city:"Kathmandu"
//     },
//     {
//         id:2,
//         firstName:"Kiran ",
//         lastName:"Rai",
//         city:"Lalitpur"
//     },
//     {
//         id:3,
//         firstName:"Jerry",
//         lastName:"Sharma",
//         city:"Biratnagar"
//     }
// ]


// users.forEach(function(user){
//     console.log(user.firstName+" "+user.lastName)
// })

// const result=users.map((user)=>{
//     return{
//     ...user,  //spread operator
//     fullName:user.firstName+" "+user.lastName
//     }
// })
// console.log(result)
   

const numbers=[1,2,3,4]
// [
//     {
//     number:1,
//     name:"A"
// //     },
//     {
//     number:2,
//     name:"B"
//     },
//     {
//     number:3,
//     name:"C"
//     },
//     {
//     number:4,
//     name:"D"
//     }
// ]
const output = numbers.map((number)=>{
    return{
        number: number,
        name:"A"
    }
})
console.log(output)