function imprimir(x){
    if(x < 0){
        console.log('Valor fora da faixa de cálculo permitida')
    }else if(x > 10){
        console.log('Valor fora da faixa de cálculo permitida')
    }
}

function calcular(x){
    
    let fx = (5 * x + 4) / (2 * x + 1)
    return fx
}

function principal(){
    let x = 11
    imprimir(x)
    console.log(calcular(x))
}
principal()