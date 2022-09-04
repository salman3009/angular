var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var FoodToken = /** @class */ (function (_super) {
    __extends(FoodToken, _super);
    function FoodToken(username, age, salary) {
        var _this = _super.call(this, username, age) || this;
        _this.salary = salary;
        return _this;
    }
    FoodToken.prototype.getDisplaySalary = function () {
        return this.salary;
    };
    return FoodToken;
}(Employee));
var akashFoodTaken = new FoodToken("akash", 33, 43434);
var akashObj = new Employee("akash", 44);
