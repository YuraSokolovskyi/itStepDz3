function Student() {
    this.subjects = []
}

Student.prototype.addSubject = function (subject) {
    if (!this.subjects.includes(subject)) this.subjects.push(subject)
}

Student.prototype.removeSubject = function (subject) {
    this.subjects = this.subjects.filter(i => i !== subject)
}

student = new Student()

// Дані для перевірки:
student.addSubject("Математика"); // Предмет Математика додано.
student.addSubject("Історія"); // Предмет Історія додано.
student.addSubject("Математика"); // Ви вже вивчаєте предмет Математика.
console.log(student.subjects); // ["Математика", "Історія"]
student.removeSubject("Історія"); // Предмет Історія видалено.
console.log(student.subjects); // ["Математика"]
student.removeSubject("Англійська"); // Ви не вивчаєте предмет Англійська.