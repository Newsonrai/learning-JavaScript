// Loops in javascript

// 1.while loop
// 2. for loop
// 3. for in loop
// 4. for of loop

// 1.for loop
// syntax-->for(initialization;condition;increment/decrement){
//     statement
// }

// for(let i=10;i>=5;i--){
    // console.log(i)
// }

// const names=["John","Jane","Jill","Jim"];
// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// 2.while loop
// syntax-->while(condition){
//     statement
// }

// const names=["John","Jane","Jill","Jim"];
// let i=0;
// while(i<names.length){
//     console.log(names[i]);
//     console.log(i);
//     i++;
// }

// hoisting

// console.log(name)
// var name="Newson";//op-->undefined

// console.log(name)
// let name="Newson";//op-->ReferenceError

// add()
// function add(){
//     console.log(1+1)
// }//op-->2

// add()
// let add=()=>{
//     console.log(1+1)
// }//op-->add before initialization

// add()
// var add=function(){
//     console.log(1+1)
// }//op-->name us not afunction