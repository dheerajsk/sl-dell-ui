
// syntax - (num1, num2) => {return num1+num2}

// example 1

var funcAdd = (num1, num2) => {return num1+num2};
console.log(typeof funcAdd);

var result = funcAdd(20, 30);
console.log(result);

funcAdd = (num1, num2) => num1+num2;
result = funcAdd(20, 30);
console.log(result);

funcAdd = () => console.log("printing.."); // funcAdd function with zero parameters
result = funcAdd();
console.log(result);
