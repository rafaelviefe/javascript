function add(){
    let number = document.getElementById('number')
    let tab = document.getElementById('seltab')

    res.innerHTML = ``
    
    if (number.value.length == 0 || number.value < 1 || number.value > 100){
        alert('Invalid Number!')
        return
    }

    let n = Number(number.value)
    if (list.indexOf(n) != -1){
        alert('Number already exists!')
        return
    }

    list.push(n)
    let item = document.createElement('option')
    item.text = `Value ${n} added.`
    tab.appendChild(item)
}

function calculate(){
    let soma = 0
    for(let i in list){
        soma += list[i]
    }

    list.sort(sortFunction)
    
    res.innerHTML = `You have registered ${list.length} numbers. <br>`
    res.innerHTML += `The highest value finded was ${list[list.length - 1]}. <br>`
    res.innerHTML += `The lowest value finded was ${list[0]}. <br>`
    res.innerHTML += `The sum of the values is ${soma}. <br>`
    res.innerHTML += `The average of the values is ${soma/list.length}. <br>`

}

function sortFunction(a, b){
    return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
  }

let list = []
let res = document.getElementById('res')