/**
 * 
 People who scoren 80 abovce get Grade A
 Student who score 70 - 79 get Grade B
 Student who scoren 60 - 69 get Grade C
 Student who score below get Grade D
 */

//  function processStudentResult(name, score, callback) {
//     console.log(`Processing result for ${name}...`);

//     callback(score);
// }

function Student(name, score) {
    this.name = name;
    this.score = score;

    this.processResult = function(callback) {
        console.log(`Processing result for ${this.name}...`);

        callback(this.score);
    };
}

function getStudentGrade(score) {
    if (score >= 80 ) {
        console.log(`The student has a Grade A`)
    } else if ( score >= 70 ) {
        console.log(`The student has a Grade B`)
    } else if ( score >= 60 ) {
        console.log(`The student has a Grade C`)
    } else {
        console.log(`The student has a Grade D`)
    }

    switch (true) {
        case score >= 80:
            console.log(`The student has a Grade A`);
            break;

        case score >= 70:
            console.log(`The student has a Grade B`);
            break;

        case score >= 60:
            console.log(`The student has a Grade C`);
            break;

        default:
            console.log(`The student has a Grade D`);
            break;
    }

    const grade = score >= 80 ? "The student has a Grade A" 
    : score >= 70 ? "The student has a Grade B" : score >= 60 ?
    "The student has a Grade C" : "The student has a Grade D";

    console.log(`The student has a Grade D ${grade}`)
}

// Create student objects
const student1 = new Student("Meshach", 90);
const student2 = new Student("John", 75);
const student3 = new Student("David", 55);

// Execute the methods
student1.processResult(getStudentGrade);
student2.processResult(getStudentGrade);
student3.processResult(getStudentGrade);

// processStudentResult("Meshach",90, getStudentGrade);
// processStudentResult("John",75, getStudentGrade);
// processStudentResult("Jane",65, getStudentGrade);
// processStudentResult("Bob",50, getStudentGrade);


// const calculateTotal = function(price, quantity) {
//     let total = price * quantity;
//     console.log(`Total price: ₦${total}`);
// };


const calculateTotal = (price, quantity) => {
    let total = price * quantity;
    console.log(`Total price: ₦${total}`);
};
calculateTotal(5000, 3);
calculateTotal(2000, 5);

const calculateDiscount = function(price) {
    const discount = price * 0.10;
    const finalPrice = price - discount;

    return finalPrice;
};

console.log(calculateDiscount(50000));
console.log(calculateDiscount(20000));

let a = ["HTML", "CSS", "JS"];

// Accessing Last Array Elements
let lst = a[a.length - 1];

console.log("Last Item: ", lst, a);

// Removes and returns the first element
let fst = a.shift();
console.log("After Removing the First: " + a);

// Creating an Array and Initializing with Values
let b = ["HTML", "CSS", "JS"];

for (let i = 0; i < a.length; i++) {
    console.log(b[i])
}

// Add Element to the end of Array
b.push("Node.js");

// Add Element to the beginning
b.unshift("Web Development");

// Removes 2 elements starting from index 1
b.splice(1, 2);

console.log(b   );

// Concatenate both arrays
let concateArray = a.concat(b);

console.log("Concatenated Array: ", concateArray);