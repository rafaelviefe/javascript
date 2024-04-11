function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora < 12){
        img.src = "img/fotomanha.jpg"
        document.body.style.background = '#7aac42'
    } else if (hora < 18){
        img.src = "img/fototarde.jpg"
        document.body.style.background = '#aa2c5c'
    }else{
        img.src = "img/fotonoite.jpg"
        document.body.style.background = '#0d0d20'
    }
}
