//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
//https://dorey.github.io/JavaScript-Equality-Table/
//https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3

//Always use 3 equals unless you have a good reason to use 2.

console.log("Is false == '' ?", false == "");
console.log("Is false == [] ?", false == []);
console.log("Is false == {} ?", false == {});
console.log("Is '' == 0 ?", "" == 0);
console.log("Is '' == [] ?", "" == []);
console.log("Is '' == {} ?", "" == {});
console.log("Is 0 == [] ?", 0 == []);
console.log("Is 0 == {} ?", 0 == {});
console.log("Is 0 == null ?", 0 == null);
console.log("Is false == null ?", false == null);
console.log("Is '' == null ?", '' == null);