class Employee{

    public firstName:string;
    private age:number;

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


let akashObj = new Employee("akash",44);
console.log(akashObj.firstName);
// console.log(akashObj.age);
// console.log(akashObj.displayAmount());