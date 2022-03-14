var Emp = /** @class */ (function () {
    function Emp(id, name) {
        this.id = id;
        this.name = name;
    }
    Emp.prototype.display = function () {
        document.write("<p>ID: ".concat(this.id, ", Name: ").concat(this.name, "</p>"));
    };
    Emp.prototype.getID = function () {
        return this.id;
    };
    Emp.prototype.setName = function (name) {
        this.name = name;
    };
    return Emp;
}());
var e1 = new Emp(100, 'Jay');
var e2 = new Emp(200, 'Ravi');
e1.display();
e2.display();
document.write("ID: ".concat(e1.getID(), "<br>"));
document.write("ID: ".concat(e2.getID()));
