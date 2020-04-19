//In javascript, our lexical scope (available data + variables where the function was defined)
//determines our available variables. Not where the function is called (dynamic scope)
//JS is weird:
const obj = {
    name: 'Billy',
    sing: function () {
        console.log(this) // in this case, it's a method on an object.
        var anotherFunc = function () {
            console.log(this) // this points to windows!
        }
        anotherFunc();
    }
}

obj.sing();

//We can solve this issue in 2 ways 
//1. Arrow functions --- arrow functions are lexically bound
//arrow functions have a lexical "this" behaviour
//solve 1
const obj1 = {
    name: 'Billy',
    sing: function () {
        console.log(this) // in this case, it's a method on an object.
        var anotherFunc = () => {
            console.log(this) // this points to windows!
        }
        anotherFunc();
    }
}
obj1.sing();
//solve 2 before ES6
const obj2 = {
    name: 'Billy',
    sing: function () {
        console.log(this) // in this case, it's a method on an object.
        var anotherFunc = function () {
            console.log(this) // this points to windows!
        }
        return anotherFunc.bind(this);
    }
}

obj2.sing()();