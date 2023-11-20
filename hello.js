// Escreva em sua linguagem favorita uma forma de validar a seguinte demanda: Verificar se a palavra "olá" está contida na frase "olá joão".

function FindTheHello(str) {
    if (str.includes("olá")) {
        console.log("A palavra 'Olá' foi encontrada");
    } else {
        console.log("A palavra 'Olá' não foi encontrada");
    }
}
FindTheHello("olá joão"); // output = A palavra 'Olá' foi encontrada
FindTheHello("Grande João"); // output = A palavra 'Olá' não foi encontrada
