export const studentsdata = [
    new Student("Meshach", "JavaScript", 85),
    new Student("John", "Python", 65),
    new Student("David", "JavaScript", 45),
    new Student("Sarah", "React", 90),
    new Student("Esther", "Python", 75)
];

// Constructor Function
function Student(name, course, score) {
    this.name = name;
    this.course = course;
    this.score = score;

    this.getGrade = function() {
        if (this.score >= 80) {
            return "Grade A";
        } else if (this.score >= 70) {
            return "Grade B";
        } else if (this.score >= 60) {
            return "Grade C";
        } else {
            return "Grade D";
        }
    };
}

// 1. Display all students (forEach)
console.log("ALL STUDENTS");


studentsdata.forEach((student) => {
    console.log(`${student.name}: ${student.getGrade()}`);
});

// 2. Filter students who passed
const passedStudents = studentsdata.filter((student) => {
    return student.score >= 60;
});

console.log("PASSED STUDENTS:", passedStudents);

// 3. Find a particular student
const selectedStudent = studentsdata.find((student) => {
    return student.name === "Meshach";
});

console.log("SELECTED STUDENT:", selectedStudent);

// 4. Get only student names (map)
const studentNames = studentsdata.map((student) => {
    return student.name;
});

console.log("STUDENT NAMES:", studentNames);

// 5. Calculate total scores (reduce)
const totalScore = studentsdata.reduce((total, student) => {
    return total + student.score;
}, 0);

console.log("TOTAL SCORE:", totalScore);

// 6. Calculate average score
const averageScore = totalScore / studentsdata.length;

console.log("AVERAGE SCORE:", averageScore);

// 7. Rank students (sort)
const rankings = [...studentsdata].sort((a, b) => {
    return b.score - a.score;
});

console.log("STUDENT RANKINGS:", rankings);

// 8. Check if everyone passed (every)
const allPassed = studentsdata.every((student) => {
    return student.score >= 60;
});

console.log("DID EVERYONE PASS?", allPassed);

// 9. Check if anyone scored above 90 (some)
const excellentStudent = studentsdata.some((student) => {
    return student.score >= 90;
});

console.log("EXCELLENT STUDENT EXISTS?", excellentStudent);

import {students} from "./data";

function calculateTotal(student) {
    return (
        student.scores.mathematics +
        student.scores.english +
        student.scores.computer
    );
}

function calculateAverage(student) {
    return calculateTotal(student) / 3;
}

console.log(calculateTotal(students[0]));
console.log(calculateAverage(students[0]));


students.forEach((student) => {

    const total = calculateTotal(student);
    const average = calculateAverage(student);
    const grade = getGrade(average);

    console.log(`
        Student: ${student.name}
        Total Score: ${total}
        Average: ${average.toFixed(2)}
        Grade: ${grade}
    `);

});