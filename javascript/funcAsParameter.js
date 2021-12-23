
const funAdd = (num1, num2)=> num1+num2;

function print(func, num1, num2){
    const result= func(num1, num2);
    console.log(result);
}

print(funAdd, 10, 20);