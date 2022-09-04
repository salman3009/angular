function addition(a:number,b:number):number{
    return a+b;
}
addition(2,3);

// function display(input:string,output?:string){
//     console.log(input,output);
// }
// display("suresh","salary");
// display("suresh");

function display(input:string,output:string="no data"){
    console.log(input,output);
}
display("suresh","salary");
display("suresh");

const details=(a:string):string=>{
    return a;
}
details("monitor");

