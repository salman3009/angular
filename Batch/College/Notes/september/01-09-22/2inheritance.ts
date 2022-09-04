class Employee{

    public firstName:string;
    protected age:number;

    constructor(registerUserName,registerAge){
         this.firstName = registerUserName;
         this.age = registerAge;
    }

    getDisplayAge():number{
       return this.age;
    }

    private displayAmount():number{
        return 5000;
    }
}

class FoodToken extends Employee{


    public salary:number;

    constructor(username,age,salary){
        super(username,age);
        this.salary = salary;
    }

    getDisplaySalary():number{
        return this.salary;
    }

} 
let akashFoodTaken = new FoodToken("akash",33,43434);
let akashObj = new Employee("akash",44);
