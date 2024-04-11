function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){

        alert('[ERRO] Verifique os dados e tente novamente!')

    }else{

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade <= 10){
                img.setAttribute('src', 'img/menino.jpg')
            }else if (idade <= 21){
                img.setAttribute('src', 'img/guri.jpg')
            }else if (idade <= 50){
                img.setAttribute('src', 'img/adulto.jpg')
            }else{
                img.setAttribute('src', 'img/velho.jpg')
            }

        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade <= 10){
                img.setAttribute('src', 'img/menina.jpg')
            }else if (idade <= 21){
                img.setAttribute('src', 'img/guria.jpg')
            }else if (idade <= 50){
                img.setAttribute('src', 'img/adulta.jpg')
            }else{
                img.setAttribute('src', 'img/velha.jpg')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}