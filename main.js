const sumFor = (numberList) => {
    let sum = 0;
    for(const number of numberList){
        const newSum = sum + number;
        sum = newSum;
    }
    return sum;
}
console.log(sumFor([1,2,3,4,5]));