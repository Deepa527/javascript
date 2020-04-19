// Scope:
function sayMyName() {
    var a = 'a';
    return function findName() {
        var b = 'b';
        console.log(c);
        return function printName() {
            var c = 'c';
            return 'Andrei Neagoie'
        }
    }
}

sayMyName();

function findName() {
    var b = 'b';
    return printName();
}

function printName() {
    var c = 'c'
    return 'Andrei Neagoie'
}

function sayMyName() {
    var a = 'a';
    return findName();
}

sayMyName();
//[[scope]] --- you can find in chrome -- a window object
//In JavaScript, our lexical scope (available data + variables where the function was defined)
//determines our available variables. Not where function is called (dynamic scope)