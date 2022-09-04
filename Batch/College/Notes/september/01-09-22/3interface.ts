
interface Person{
    firstName:string;
    age:number;
    address:string;
}

class Employee implements Person{

    public firstName:string;
    public age:number;
    public address:string;

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
