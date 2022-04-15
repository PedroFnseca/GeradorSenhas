function copiar(){
    // Copia para a area de trânsferencia do usuario a senha gerada
    
    let conteudo = document.getElementById('senha')
    
    if (conteudo.value.length <= 0){
        alert('Sem conteudo para ser copiado!') // Mostra para o usuario que nao copiou
    }
    else{
        conteudo.select() // Seleciona o conteudo para ser copiado
        document.execCommand('copy') // Copia para a area de trabalho

        alert('Copiado com sucesso!') // Mostra para o usuario que foi copiado
    }
}


function criar(){
    // Cria a senha para o usuario

    tamanho = document.getElementById('tamanho')
    msg = document.getElementById('senha')

    // Verifica se o usuario digitou um numero válido
    if (tamanho.value.length == 0 || tamanho.value <= 0){
        alert('Digite um valor valido')

        // Limpa os campos para o usuario digitar novamente
        msg.value = ''
        tamanho.value = ''
    }
    else{
        tamanho = parseInt(tamanho.value) // Transforam o tamanho para inteiro
        msg.value = '' // Limpa a senha antiga
        
        // Definição das opções para a senha
        var lower_case = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                          'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

        var upper_case = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                          'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

        var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        var simbol = ['*', '#', '@', '!']

        // Parte que gera a senha aleatoriamente
        let senha = []

        for(let i = 0; i <= tamanho - 1; i++){

            opc = escolhe()     // Chama a função que decide a ordem a cada loop

            if(opc == 0){
                senha[i] = lower_case[Math.floor(Math.random() * lower_case.length)] // Adiciona letra minuscula
            }
            else if(opc == 1){
                senha[i] = upper_case[Math.floor(Math.random() * upper_case.length)] // Adiciona letra maiuscula
            }
            else if(opc == 2){
                senha[i] = num[Math.floor(Math.random() * num.length)] // Adiciona numeros
            }
            else{
                senha[i] = simbol[Math.floor(Math.random() * simbol.length)] // Adciona número
            }
        }

        // Mostra ao usuario a senha de modo limpo
        for(let i = 0; i <= tamanho - 1; i++){
            msg.value += senha[i]
        }
    }
    
}

function escolhe(){
    // Função para escolher aleatoriamente a ordenação da senha

    let opc = [0, 1, 2, 3]

    /*
        0 para lower_case
        1 para upper_case
        2 para numeros
        3 para simbulos
    */

    return opc[Math.floor(Math.random() * opc.length)]
}