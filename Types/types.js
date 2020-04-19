//Primitive
console.log("typeof 5 is", typeof 5);
console.log("typeof 'deepa' is", typeof "deepa");
console.log("typeof true is", typeof true);
console.log("typeof undefined is", typeof undefined);
console.log("typeof null is", typeof null);
console.log("typeof Symbol(just me) is", typeof Symbol('just me'));

//Non-primitive
console.log("typeof array", typeof []);
console.log("typeof object", typeof {});
console.log("typeof function", typeof
    function () {});

//In Javascript all types other than Object are primitive types
//Arrays and Functions are objects
//All Primitives have object wrappers
//Boolean, String , Number --- object wrappers for primitive types