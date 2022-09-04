var Employee = /** @class */ (function () {
    function Employee(registerUserName, registerAge) {
        this.firstName = registerUserName;
        this.age = registerAge;
    }
    Employee.prototype.getDisplayAge = function () {
        return this.age;
    };
    Employee.prototype.displayAmount = function () {
        return 5000;
    };
    return Employee;
}());
var akashObj = new Employee("akash", 44);
