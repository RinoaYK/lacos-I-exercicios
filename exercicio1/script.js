// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let coxinha
let count= 0
let conta

while (coxinha !== "N") {
    coxinha = prompt (`Vc quer comer mais uma coxinha?
Digite "S" para sim e "N" para não.`).toUpperCase()
    if (coxinha === "S") {
        count++
        alert(`Vc comeu mais uma coxinha!\nVc comeu, ${count+1} coxinhas.`)
        if(count+1 > 2 && count+1 < 6) {
            alert("Nossa, é melhor parar hein, vai passar mal!")}
        if(count+1 >= 6 && count+1 <= 9) {
            alert("Por sua conta e risco!")}
        if(count+1 == 10) {
            alert("Fico feliz q tenha gostado!")}
    }
    else if (coxinha === "N") {
     console.log("Encerrando a conta...")
    }
    else {alert("Valor inválido!")}
    conta = count * 2.50 +(2.50)
}

console.log("Vc comeu",count+1,"coxinhas.")
console.log(`O valor total da sua conta é de: R$ ${conta.toFixed(2)}`);
if(count+1 >= 10) {
    console.log("\nFico feliz q tenha gostado!\nVolte sempre!\n:)")}