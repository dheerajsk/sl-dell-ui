
// returntype nameOfFunction(params) 
// int add(int num1, int num2); // c#, Java, C, C++

// function nameOfFunction(params); // JavaScript
// function add(num1, num2);

function add(num1, num2){
    console.log(num1+num2);
}

function addWithValue(num1, num2){
    return num1+num2;
}

add(10, 20);
console.log(addWithValue(10, 20));