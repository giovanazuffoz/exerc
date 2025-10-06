let resposta = document.getElementById('resposta')

function imprimir(x){
   if(x < 0 || x > 10){
    return 'Valor fora da faixa de cálculo permitida'
   }else{
    return calcular(x)
    }
   
}

function calcular(x){
    
    let fx = (5 * x + 4) / (2 * x + 1)
    return fx.toFixed(2)
}

function principal(){
    let x = Number(document.getElementById('x').value)
 
    // console.log(calcular(x))

    resposta.innerHTML = ``
    resposta.innerHTML += imprimir(x)
}
