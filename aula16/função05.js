function fatorial(n){
    if (n < 0 || n % 1 != 0){
        return 'Indefinido/inexistente'
    }
    if (n <= 1){
        return 1
    }
    return n * fatorial(n-1)
}

console.log(fatorial(3))


//n! = n x (n-1)!
