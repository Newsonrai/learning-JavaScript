// const name=["John","Jane","Jill"];
// name.push("Newson");
// name[1]="Hero";

// console.log(name);


// const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(days[1]);

// push operation

// const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
// days.push("Saturday");
// console.log(days);

// pop operaton

// const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// days.pop();
// console.log(days);

// unshift operation

// const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
// days.unshift("Saturday");
// console.log(days);


// shift operation

// const day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];
// day.shift();
// console.log(day);
// console.log(day.length)


// slice ---> used to extract part of an array and it doesnt modify the original array.
// slice(startIndex,stopIndex) here startindex is 2 and stopindex is 5.that means the items from index 2 to index 5 will be sliced.
// const num=[1,2,3,4,5,6,7,8,9,10]; 
// const newSlicedArray=num.slice(2,5);
// console.log(num)
// console.log(newSlicedArray)


// splice ---> used to extract part of an array and it modifies the original array.
// splice(start,deleteCount,item1,item2) here deleteCount is optional.Here, the start index is 2 and deleteCount is 5 and item1 and item2 are added in the original array.
// const num=[1,2,3,4,5,6,7,8,9,10]; 
// const newSlicedArray=num.splice(2,5,0,11);
// console.log(num)
// console.log(newSlicedArray)

// split ---> used to split a string into an array of substrings.
// let text="I love JavaScript";
// let newText=text.split(" ");
// console.log(newText)

// const person={
    // name:"Newson Rai",
    // address:"Kathmandu",
    
// }
// Object.freeze(person)
person.age=24
// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(person)