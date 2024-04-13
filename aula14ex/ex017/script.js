// gera uma cor aleatória em hexadecimal
function setRandomColor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
  
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor
}

function counting(){
    var taboada = Number(document.getElementById('taboada').value)
    var res = document.getElementById('res')
    document.body.style.background = setRandomColor()
    res.innerHTML = `Taboada do ${taboada}: <br>`
    for (var c = 1; c <= 10; c++){
        res.innerHTML += `${taboada} x ${c} = ${taboada * c} <br>`
    }
}