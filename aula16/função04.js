function fatorial(n){
    let fat = 1
    for(let c = 2; c <= n; c++)
        fat *= c
    return fat
}

console.log(fatorial(7))

// fatorial