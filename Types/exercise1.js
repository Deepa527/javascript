var user1 = {
    name: "nerd",
    org: "dev"
};
var user2 = {
    name: "nerd",
    org: "dev"
};
var eq = user1 == user2;
console.log(eq); // gives false
//https://stackoverflow.com/questions/1068834/object-comparison-in-javascript

eq = JSON.stringify(user1) === JSON.stringify(user2);
console.log(eq);