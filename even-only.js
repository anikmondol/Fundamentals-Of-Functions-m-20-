/**
 * 
 * create function that will return only the even numbers
 * 
 * return the sum of even numbers
 * 
 * **/ 


function evenNumbersOnly(numbers){
    let even = [];
    for(let number of numbers){
        if(number % 2 === 0){
            even.push(number)
        }
    }
    return even;
}

const even = evenNumbersOnly([44, 10, 55, 11, 33, 54, 78])
// console.log(even);



function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(let number of numbers){
        if(number % 2 === 0){
            sum += number;
        }
    }
    return sum;
}

const sum = sumOfEvenNumbers([44, 10, 55, 11, 33, 54, 78])

// console.log(sum);
// console.log( 44 + 10 + 54 + 78);
