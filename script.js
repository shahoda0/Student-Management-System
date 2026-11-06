
class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }
    getAverage() {
    let total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
}

    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }
    getResult(average) {
        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}
let studentsList = [
    new Student(101, "Ahmed", [80, 90, 70], 90),
    new Student(102, "Shahd", [45, 40, 48], 80),
    new Student(103, "Aser", [90, 85, 95], 95),
    new Student(104, "Salma", [42, 45, 48], 70)
];
let strugglingStudents = studentsList.filter(student => {
    let average = student.getAverage();

    return average >= 40 && average <= 49;
});
let studentsAfterGrace = strugglingStudents.map(student => {
    return {
        name: student.name,
        newAverage: student.getAverage() + 5
    };
});
let totalAfterGrace = studentsAfterGrace.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);
let graceAverage = studentsAfterGrace.length > 0
    ? totalAfterGrace / studentsAfterGrace.length
    : 0;
    console.log("===== STUDENTS REPORT =====");

studentsList.forEach(student => {
    let average = student.getAverage();

    console.log({
        name: student.name,
        average: average,
        grade: student.getGrade(average),
        result: student.getResult(average)
    });
});
console.log("===== GRACE STUDENTS =====");
console.log(studentsAfterGrace);

console.log("===== GRACE AVERAGE =====");
console.log(graceAverage);