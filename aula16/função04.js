function fatorial(n){
    let fat
    for(let c = 1; c <= n; c++)
        fat *= c
    return fat
}

console.log(fatorial(5))

// fatorial