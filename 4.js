function Student(name, lastName, mathGrades=[], physGrades=[]){
    this.name = name
    this.lastName = lastName
    this.mathGrades = mathGrades
    this.physGrades = physGrades
}

Student.prototype.average = function (){
    return (this.mathGrades.reduce((a, b) => a + b) + this.physGrades.reduce((a, b) => a + b)) / (this.mathGrades.length + this.physGrades.length)
}

let name = prompt("Enter student name")
let lastName = prompt("Enter student lastName")
let mathGrades = []
let mathGrade = -1
do {
    if (mathGrade !== -1) mathGrades.push(mathGrade)
    mathGrade = parseInt(prompt("Enter math grade (-1 to stop)"))
}while (mathGrade !== -1)

let physGrades = []
let physGrade = -1
do {
    if (physGrade !== -1) physGrades.push(physGrade)
    physGrade = parseInt(prompt("Enter physics grade (-1 to stop)"))
}while (physGrade !== -1)

let student = new Student(name, lastName, mathGrades, physGrades)
console.log(student.average())