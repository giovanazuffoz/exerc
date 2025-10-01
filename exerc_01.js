let resposta = document.getElementById('resposta')

function gerarDesconto(desconto, preco){
    if(preco > 550){
        let totalDesconto = (100 - desconto) / 100
        let precoFinal = preco * totalDesconto  
        return precoFinal
    }else{
        return preco
    }
    }
    
    
    function calcularPreco(qtVolei, qtFutebol, qtBasquete){
    
            let preco = (qtVolei * 247.58) + (qtFutebol * 179.57) + (qtBasquete * 260.89)
            return preco
    }
    
    function principal(){
    
        //entrada de dados
        let qtVolei = Number(document.getElementById('qtVolei').value)
        let qtFutebol = Number(document.getElementById('qtFutebol').value)
        let qtBasquete = Number(document.getElementById('qtBasquete').value)
        let desconto = 8
    
        //processamento e o cálculo => chamada de funções
            let valortotal= calcularPreco(qtVolei, qtFutebol, qtBasquete)
            let valorFinal = gerarDesconto(desconto, valortotal)
        
        //saída de dados
        console.log(valorFinal.toFixed(2))

        resposta.innerHTML = ``
        resposta.innerHTML += `Valor final: R$${valorFinal.toFixed(2)}`

    }

    
    
    
    
    
    
    
    
    
    
    /*1 - Uma loja de artigos esportivos precisa desenvolver um sistema para cálculo do preço de venda que considere o desconto conforme a quantidade vendida. Para testar a primeira versão do programa, foi pedido para considerar que se o usuário comprar mais de R$ 550.00, ele ganha um desconto de 8% no preço final. Os itens de teste e preços da primeira versão do sistema são do tipo tênis: de vôlei que custa R$ 247.58, de futebol que custa R$ 179.57 e de basquete que custa R$ 260.89, respectivamente. Faça um programa que pergunte ao usuário quantos itens ele deseja comprar de cada produto e apresente o valor final de venda, considerando o possível desconto de 8%.*/