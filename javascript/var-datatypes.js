

// Variables in DataTypes
// JavaScript in dynamically typed language

// STatically typed
// int x; // c, c#, java

// Dynamically typed
var x=10; // number;
x="Myname"; // string

// Data Types
// number; (int,long, float, doubles)
var num=100;
console.log(typeof num);
console.log(num);

// string (alpha, numeric, specials)
var str = "abc123$%";
console.log(typeof str);
console.log(str);

// boolean (tyue, false)
var isTrue = false;
console.log(typeof isTrue);
console.log(isTrue);

// Object type (json, complex type)
var obj = {name: "Jon", age:"35"};
console.log(typeof obj);
console.log(obj);

// undefined
var u;
console.log(typeof u);
u = null;
console.log(typeof u);
console.log(u);

console.log(undefined==null); // true (checking values)
console.log(undefined===null); // false (check values and typeOfVar)

var x = 0;
var y = "0";
var y2="1"
console.log(x==y); // true (0==0)
console.log(x===y); // false (num!=string)
console.log(y===y2); // false (value doesnt match)