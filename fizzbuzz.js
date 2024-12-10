const fizzbuzzOn = function(nNumber){
    let result = [];
    const select = function(i){
        if (i % 3 == 0 && i % 5 == 0) return result.push("FizzBuzz");
        if (i % 5 == 0) return result.push("Buzz")
        if (i % 3 == 0) return result.push("Fizz");
        return result.push(i)
    }
    for (let i = 1; i <= nNumber; i++){
        select(i)
    }
    return result
}

console.log(fizzbuzzOn(100));