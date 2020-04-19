//function returns undefined if it does not return any value
function returnnothing() {
    var a = "deepa";
    console.log(a);
}

function returnsomething() {
    var a = "deepa";
    return a;
}

var returnnothing = returnnothing();
var returnsomething = returnsomething();
console.log(returnnothing);
console.log(returnsomething);