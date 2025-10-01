let resposta = document.getElementById('resposta')

function calcular(cel){
 
    let fah = (cel * (9/5)) + 32
    return fah
}

function principal(){
    let cel = Number(document.getElementById('cel').value)
   
    resposta.innerHTML = ``
    resposta.innerHTML += calcular(cel)
}
