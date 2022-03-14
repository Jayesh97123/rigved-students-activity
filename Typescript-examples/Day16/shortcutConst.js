var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.display = function () {
        document.write("<p>Name: ".concat(this.name, ", Age: ").concat(this.age, " </p>"));
    };
    return Student;
}());
var s1 = new Student('Jay', 30);
s1.display();
