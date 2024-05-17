const botao=document.getElementById("btn_carro")
const f_nome=document.getElementById("f_nome")
const f_portas=document.getElementById("f_portas")
const f_blindagem=document.getElementById("f_blindagem")
const f_municao=document.getElementById("f_municao")
const f_militar=document.getElementById("f_tipoMilitar")
const f_normal=document.getElementById("f_tipoNormal")
const carros=document.getElementById("carros")

let a_carros = []



f_militar.addEventListener('click', ()=>{
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.removeAttribute("disabled", "disabled")
    f_municao.removeAttribute("disabled", "disabled")
})
f_normal.addEventListener('click', ()=>{
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
})

const gerenciandoCarros = () => {
    carros.innerHTML = ""
    a_carros.forEach((c)=>{
        const div = document.createElement("div")
        div.setAttribute('class', 'carro')
        div.innerHTML = `Nome: ${c.nome}<br/>`
        div.innerHTML += `Portas: ${c.portas}<br/>`
        div.innerHTML += `Cor: ${c.cor}<br/>`
        div.innerHTML += `Blindagem: ${c.blindagem}<br/>`
        div.innerHTML += `Munição: ${c.municao}<br/>`
        const remover = document.createElement("button")
        remover.innerHTML = "Remover"
        remover.addEventListener('click', ()=>{
            remover.parentElement.setAttribute("id", "removido")
        })
        div.appendChild(remover)
        carros.appendChild(div)
    })
}

botao.addEventListener('click', ()=>{
    if  (f_militar.checked){
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)
    }else{
        const c = new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    }
    gerenciandoCarros()
})

class Carro{
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.cor = undefined
    }
    setCor(cor){
        this.cor = cor
    }
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("verde")
    }
}

