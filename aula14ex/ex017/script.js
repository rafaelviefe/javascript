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
    var t = document.getElementById('taboada')
    var res = document.getElementById('res')
    document.body.style.background = setRandomColor()
    
    if (t.value.length == 0){

        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Esperando valor...'

    }else{
        var taboada = Number(t.value)
        res.innerHTML = `Taboada do ${taboada}: <br>`
        for (var c = 1; c <= 10; c++){
            res.innerHTML += `${taboada} x ${c} = ${taboada * c} <br>`
        }
    }
    
}