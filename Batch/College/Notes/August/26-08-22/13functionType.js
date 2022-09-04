function addition(a, b) {
    return a + b;
}
addition(2, 3);
// function display(input:string,output?:string){
//     console.log(input,output);
// }
// display("suresh","salary");
// display("suresh");
function display(input, output) {
    if (output === void 0) { output = "no data"; }
    console.log(input, output);
}
display("suresh", "salary");
display("suresh");
var details = function (a) {
    return a;
};
details("monitor");
