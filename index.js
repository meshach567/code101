// students.forEach((student) => {
//     console.log(student.name);
// });

import { studentss } from "./data";

const studentNames = studentss.map((student) => {
    return student.name;
});

console.log(studentNames);


// console.log(students);

const studentResults = studentss.map((student) => {
    return {
        name: student.name,
        grade: student.score >= 80 ? "A" :
               student.score >= 70 ? "B" :
               student.score >= 60 ? "C" : "D"
    };
});

console.log(studentResults);


const passedStudents = studentss.filter((student) => {
    return student.score >= 60;
});

console.log(passedStudents);


const student = studentss.find((student) => {
    return student.id === 3;
});

console.log(student);

const studentIndex = studentss.findIndex((student) => {
    return student.name === "Sarah";
});

console.log(studentIndex);

const hasExcellentStudent = studentss.some((student) => {
    return student.score >= 90;
});

console.log(hasExcellentStudent);

const allStudentsPassed = studentss.every((student) => {
    return student.score >= 60;
});

console.log(allStudentsPassed);

const totalScore = studentss.reduce((total, student) => {
    return total + student.score;
}, 0);

const averageScore = totalScore / studentss.length;

console.log("Total Score:", totalScore);
console.log("Average Score:", averageScore);


const rankedStudents = [...studentss].sort((a, b) => {
    return b.score - a.score;
});

console.log(rankedStudents);

const courses = ["JavaScript", "Python", "React", "Node.js"];

console.log(courses.includes("JavaScript"));
console.log(courses.includes("PHP"));

const topStudents = studentss.slice(0, 3);

console.log(topStudents);