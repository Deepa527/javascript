//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
//this - is the object that the function is a property of
//obj.someFunction(this)
//DRY - do not repeat yourself
//Who called me?
//1. gives methods access to their object -- here sing has access to obj

const obj = {
    name: 'Billy',
    sing: function () {
        return 'llala ' + this.name + '!'
    },
    singAgain: function () {
        return this.sing()
    }
}
//2. execute same code for multiple objects 
function importantPerson() {
    console.log(this.name)
}

const name = 'Sunny';
const obj1 = {
    name: 'Cassy',
    importantPerson: importantPerson
}
const obj2 = {
    name: 'Jacob',
    importantPerson: importantPerson
}

obj2.importantPerson()