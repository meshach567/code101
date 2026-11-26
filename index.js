const students = [
    {
        id: 1,
        name: "Meshach",
        age: 25,
        course: "JavaScript",
        score: 85
    },
    {
        id: 2,
        name: "John",
        age: 22,
        course: "Python",
        score: 65
    },
    {
        id: 3,
        name: "David",
        age: 24,
        course: "JavaScript",
        score: 45
    },
    {
        id: 4,
        name: "Sarah",
        age: 21,
        course: "React",
        score: 90
    },
    {
        id: 5,
        name: "Esther",
        age: 23,
        course: "Python",
        score: 75
    }
];
// students.forEach((student) => {
//     console.log(student.name);
// });

const studentNames = students.map((student) => {
    return student.name;
});

console.log(studentNames);


// console.log(students);

const studentResults = students.map((student) => {
    return {
        name: student.name,
        grade: student.score >= 80 ? "A" :
               student.score >= 70 ? "B" :
               student.score >= 60 ? "C" : "D"
    };
});

console.log(studentResults);