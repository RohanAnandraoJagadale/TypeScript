// class = data + function
// class = Characteristics + Behaviours
var Student = /** @class */ (function () {
    function Student(N, M, A, C) {
        this.Name = N;
        this.Marks = M;
        this.Age = A;
        this.City = C;
    }
    Student.prototype.Display = function () {
        console.log("Name of student : " + this.Name);
        console.log("Marks of student : " + this.Marks);
        console.log("Age of student : " + this.Age);
        console.log("City of student : " + this.City);
    };
    return Student;
}());
var Obj123 = new Student("Ranjit", 98, 24, "Pune");
var Obj124 = new Student("Dev", 90, 22, "Jalgaon");
Obj123.Display();
Obj124.Display();
