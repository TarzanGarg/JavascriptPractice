function add(a, b){
    let type = typeof 0;
    if (typeof a == type && typeof b == type)
        return a+b;

    throw "Input must be valid numbers"
}

let sum = add(2, "3");
console.log(sum) 