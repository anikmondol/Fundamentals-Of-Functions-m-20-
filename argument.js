function doubleIt(number) {
    const doubled = number * 2;
    console.log(number, doubled);
}

console.log('I will call the function');
doubleIt(2);
console.log('-------------------');
doubleIt(88);
console.log('----------------');
doubleIt(45)
console.log('-----------');
const number = 55;
doubleIt(number);
console.log('----------------');
const money = 112;
doubleIt(money)



// --------------------

function difference(num1, num2) {
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff);
}

const myAge = 10;
const fatherAge = 40;

difference(fatherAge, myAge)