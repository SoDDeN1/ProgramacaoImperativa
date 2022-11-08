//Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado.
//- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
// Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


//* Starting project, Super Wave!

// ** MENU CARDAPIO ** //
// PRATOS;
// 1 - Pipoca
// 2 - Macarrão
// 3 - Carne
// 4 - Feijão
// 5 - Brigadeiro

function microondas (prato, tempo) {
    //1 - PIPOCA
    if(prato == 1 && tempo >= 10 && tempo <= 18){
        console.log('Pipoca pronta, bom apetite!');
    }
    else if( prato == 1 && tempo >= 20 && tempo <= 29){
        console.log('Seu prato queimou');
    }
    else if( prato == 1 && tempo >= 30){
        console.log('KABUMM!');
    }
    else if( prato == 1 && tempo <=9){
        console.log('Tempo insuficiente');
    }   
    
    //2 - MACARRAO
    if(prato == 2 && tempo >= 8 && tempo <= 15){
        console.log('Macarrão está pronto, bom apetite!');
    }
    else if( prato == 2 && tempo >= 16 && tempo <= 24){
        console.log('Seu prato queimou');
    }
    else if( prato == 2 && tempo >= 25){
        console.log('KABUMM!');
    }
    else if( prato == 2 && tempo <=8){
        console.log('Tempo insuficiente');
    }

    // 3 - Carne
    if(prato == 3 && tempo >= 15 && tempo <= 29){
        console.log('Carne está pronta, bom apetite!');
    }
    else if( prato == 3 && tempo >= 30 && tempo <= 44){
        console.log('Seu prato queimou');
    }
    else if( prato == 3 && tempo >= 45){
        console.log('KABUMM!');
    }
    else if( prato == 3 && tempo <=14){
        console.log('Tempo insuficiente');
    }

// 4 - Feijão
    if(prato == 4 && tempo >= 12 && tempo <= 23){
        console.log('Feijão está pronto, bom apetite!');
    }
    else if( prato == 4 && tempo >= 24 && tempo <= 35){
        console.log('Seu prato queimou');
    }
    else if( prato == 4 && tempo >= 36){
        console.log('KABUMM!');
    }
    else if( prato == 4 && tempo <=11){
        console.log('Tempo insuficiente');
    }

    // 4 - Feijão
    if(prato == 4 && tempo >= 12 && tempo <= 23){
        console.log('Feijão está pronto, bom apetite!');
    }
    else if( prato == 4 && tempo >= 24 && tempo <= 35){
        console.log('Seu prato queimou');
    }
    else if( prato == 4 && tempo >= 36){
        console.log('KABUMM!');
    }
    else if( prato == 4 && tempo <=11){
        console.log('Tempo insuficiente');
    }

    // 5 - Brigadeiro
    if(prato == 5 && tempo >= 8 && tempo <= 15){
        console.log('Feijão está pronto, bom apetite!');
    }
    else if( prato == 8 && tempo >= 16 && tempo <= 23){
        console.log('Seu prato queimou');
    }
    else if( prato == 8 && tempo >= 24){
        console.log('KABUMM!');
    }
    else if( prato == 8 && tempo <=7){
        console.log('Tempo insuficiente');
    }

    // # - PRATO FORA DO MENU*
    if(prato >= 6){
        console.log('Prato inexistente!');
    }
    else if (prato <=-1) {
        console.log('Prato inexistente!')
    }
}

microondas (-1, 10)
