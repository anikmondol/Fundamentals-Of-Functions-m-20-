/**
 * 
 * for a given string tell me it has even number of characters or not
 * 
 * 
 * **/ 


function evenSizedString(str){
    const size = str.length;
    if(size % 2 === 0){
        return true;
    }else{
        return false;
    }
}

const ans = evenSizedString('anik');
// console.log(ans);


function doubleOrTriple(number, doDoubled){
    if(doDoubled){
        const result = number * 2;
        return result;
    }else{
        const result = number * 3;
        return result;
    }
}


// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));


function numberOfElement(numbers){
    const len = numbers.length;
    return len;
}

// console.log(numberOfElement([10, 50, 22, 14]));


function objAge(obj){
    const result = obj.age
    const result1 = obj.name
    return [result, result1];
}

console.log(objAge({name:'anik', age: 10}));