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
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')
    res.innerHTML = 'Contando: <br>'
    document.body.style.background = setRandomColor()
    for (var c = inicio; c <= fim; c += passo){
        res.innerHTML += `&#x1F449 ${c}`
    }
    res.innerHTML += '&#x1F3F4'
}