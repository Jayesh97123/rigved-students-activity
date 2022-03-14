function test1(a, b, c) {
    document.write("<p>a = ".concat(a, ", b = ").concat(b, ", c = ").concat(c, "</p>"));
}
test1(20);
test1(20, 10);
test1(20, 10, 30);
var user;
user = { firstname: 'Jay', phone: 98778522 };
document.write("<p>Name: ".concat(user.firstname, ",phone: ").concat(user.phone, "</p>"));
user = { firstname: 'Jay', lastname: 'Sai', phone: 98778522 };
document.write("<p>Name: ".concat(user.firstname, ", Lastname: ").concat(user.lastname, ", phone: ").concat(user.phone, "</p>"));
