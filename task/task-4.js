// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function countZero(str){
    let sum = 0;
    for(let s of str){
        if(s === '0'){
            sum += 1;
        }
    }
    return sum;
}


const ans = countZero('01010100')
console.log(ans);