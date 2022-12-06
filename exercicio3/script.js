// # Exercício 3

// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

// ```jsx
// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"
// ```

const array5 = ["Rússia", "Canadá", "China", "EUA", "Brasil"]
let novoP = confirm("Quer adicionar mais um país?")

for(let i = 0; i < array5.length; i++){
    while (novoP === true){
    novoPadd = prompt("Qual país?")
    array5.push(novoPadd)
    novoP = confirm("Quer adicionar mais um país?")
    }
    console.log(`${(array5.indexOf(array5[i]))+1} - ${array5[i].toUpperCase().slice(0,1)+array5[i].toLowerCase().substring(1)}`);
}
