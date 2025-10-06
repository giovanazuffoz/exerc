let resposta = document.getElementById('resposta')

function verificar(idade){
    if(idade >= 18 && idade <= 70){
        return 'Seu voto é obrigatorio'
    }else if( (idade >= 16 && idade < 18) || idade > 70){
        return 'Seu voto é opcional'
    }else{
        return 'Você não pode votar'
    }
}

function principal(){
    let idade = Number(document.getElementById('idade').value)
   



    console.log(verificar(idade))
    resposta.innerHTML = ``
    resposta.innerHTML += verificar(idade)
}
