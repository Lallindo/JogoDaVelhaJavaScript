var jogadas = 1;
var classeBotoes = document.getElementsByClassName('bot');
var resultado = 'empate'

function marcar(value) // Marca o lugar clicado com X ou O
{
    if (value.innerHTML != 'x' && value.innerHTML != 'o') {
        if (((jogadas % 2) == 1))
        {
            value.innerHTML = 'x'
            value.style = 'color: red; font-size: 20px'
        } else {
            value.innerHTML = 'o'
            value.style = 'color: blue; font-size: 20px' 
        }
        jogadas++;
        condicaoVitoria();
    }  
}

function encherArrays() // Arrays com os valores das caixas 
{
    let arrayLi1 = [
        document.getElementById('b1').innerHTML,
        document.getElementById('b2').innerHTML,
        document.getElementById('b3').innerHTML
    ];
    
    let arrayLi2 = [
        document.getElementById('b4').innerHTML,
        document.getElementById('b5').innerHTML,
        document.getElementById('b6').innerHTML
    ];
    
    let arrayLi3 = [
        document.getElementById('b7').innerHTML,
        document.getElementById('b8').innerHTML,
        document.getElementById('b9').innerHTML
    ];
    
    let arrayCaixas // Array com todos os valores, acesso: [linha-1][coluna-1]; 
    =  [ 
        arrayLi1, arrayLi2, arrayLi3
    ]

    /*
         0  1  2
         -------
    0 | [1, 2, 3],
    1 | [4, 5, 6],
    2 | [7, 8, 9]
    */
    return arrayCaixas;
}

function condicaoVitoria() // Condições de vitória e empate
{
    let arrayCaixas = encherArrays();

    for (i = 0; i < 3; i++) // Verificação para vitórias horizontais
    {
        if ((arrayCaixas[i].join('') === 'xxx') || (arrayCaixas[i].join('') === 'ooo'))
        {
            console.log('vitória');
            resultado = 'vitoria'
            desabilitarBots(resultado);
        }
    }

    for (i = 0; i < 3; i++) // Verificação para vitórias verticais
    {
        let charCaixa = '';
        for (j = 0; j < 3; j++)
        {
            charCaixa += arrayCaixas[j][i];
        }  
        if (charCaixa == 'xxx' || charCaixa == 'ooo'){
            console.log('vitória');
            resultado = 'vitoria'
            desabilitarBots(resultado);
        }
    }

    // Verificação para vitórias diagonais
    let diagEsq = arrayCaixas[0][0] + arrayCaixas[1][1] + arrayCaixas[2][2];
    let diagDir = arrayCaixas[0][2] + arrayCaixas[1][1] + arrayCaixas[2][0];

    if (diagEsq === 'xxx' || diagEsq === 'ooo') // Diagonal Esquerda
    {
        console.log('vitória');
        resultado = 'vitoria'
        desabilitarBots(resultado);
    }

    if (diagDir === 'xxx' || diagDir === 'ooo') // Diagonal Direita
    {
        console.log('vitória');
        resultado = 'vitoria';
        desabilitarBots(resultado);
    }

    if (jogadas == 10){ // Condição de empate, caso a função 'desabilitarBots' não for chamada anteriormente, ela irá ser chamada com a variável resultado como 'empate'
        desabilitarBots(resultado);
    }
}

function desabilitarBots(resultado) // Desabilita os botões
{
    for (i = 0; i < 9; i++)
    {
        classeBotoes[i].disabled = true;
    }
    mensVit(resultado)
} 

function mensVit(resultado) // Dá a mensagem de vitória ou empate
{
    document.getElementById('mensVit').style.border = '1px solid black';
    if (resultado == 'vitoria'){
        let sinalVenc = '';
    
        if ((jogadas%2 == 0))
        {
            sinalVenc = 'X';
            document.getElementById('mensVit').style.color = 'red'
        } else {
            sinalVenc = 'O';
            document.getElementById('mensVit').style.color = 'blue'
        }

        document.getElementById('mensVit').innerHTML = 'O sinal vencedor foi o ' + sinalVenc;
    } else if (resultado == 'empate'){
        document.getElementById('mensVit').innerHTML = 'Empate';
    }
}