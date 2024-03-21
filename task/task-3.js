// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.



function makeAvg(numbers){
    let sum = 0;
    for(const number of numbers){
        sum += number;
    }
    const result = sum / numbers.length;
    return result;
}


const ans = makeAvg([10, 22, 74])
// console.log(ans);
// console.log((10 + 22 + 74)/ 3);