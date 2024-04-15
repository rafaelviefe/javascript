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

    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){

        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Incontável'

    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        res.innerHTML = 'Contando: <br>'
        document.body.style.background = setRandomColor()

        if (i < f){
            for (let c = i; c <= f; c += p){
                res.innerHTML += `&#x1F449 ${c}`
            }
        }else{
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `&#x1F449 ${c}`
            }

        }
        
        res.innerHTML += '&#x1F3F4'

    }

    
}