const arr = [2,4,6,7,9,13];

//map function  
// const DOUBLEARR = arr.map( (double)  => (double *2)); 
// console.log (DOUBLEARR);


const triple = arr.map ( (triple) => { return triple *3 } )
// console.log(triple);

// filter function 
const filter = arr.filter ( (oddNumber) => { return oddNumber % 2 == 0 } )

// console.log(filter);


// reduce function
const array = [2,4,6,7,9,13, 45, 58];

function findSum (arr)  {

    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum = sum + array[index];
        
    }
    return sum;
}
// console.log(findSum(arr));


const output = array.reduce ( (acc, curr) => { 
acc = acc + curr;
return acc;
}, 0)

// console.log(output);

const arrayy = [2,4,6,7,9,13, 45, 58];

function findMax(arrayy) {
     let max = 0;

     for (let i = 0; i < arrayy.length; i++) {
         if (array[i] > max) {
             max = arrayy[i];
         }
     }
     return max;
}

// console.log(findMax(array));

const outputMax = arrayy.reduce( function (acc,curr) {
    if(curr > acc)
    {
            acc = curr;
    } 
    return acc;
},0 )

console.log(outputMax);

const outputTwo= array.reduce(function (acc,curr) {
    return curr > acc ? curr : acc;

 }, 0 )

 console.log(outputTwo);


 const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },];


    const userFullname = users.map(function (x) {
        // return x.firstName + " " + x.lastName;

        return `${x.firstName} ${x.lastName}`
    })

    // console.log(userFullname);


    const outputAge = users.reduce((acc, curr) => {
        if (acc[curr.age]) {
acc[curr.age] = ++acc[curr.age]

        } else { acc[curr.age] = 1;
            return acc;
}, {});

console.log(outputAge);


    console.log(outputAge);