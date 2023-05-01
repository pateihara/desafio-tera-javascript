/*1. Verifique se um número é par ou ímpar usando uma instrução.
let numero = prompt("digite um número:")
if(numero%2==0){
    console.log("é par")
}else{
    console.log("é impar")
}*/


//2. Determine se um número é positivo, negativo ou zero.
// let numero = prompt("digite um número:")
// if ( numero >0){
//     console.log("é positivo")
// }
// if(numero == 0){
//     console.log("número igual a zero")
// }
// if(numero <0){
//     console.log("é negativo")
// }

// 3. Crie um loop for que itere de 0 a 10.
// for(i=0;i<11;i++){
//     console.log(i)
// }

// 4. Crie um loop while que itere de 0 a 10.
// let controle = 0
// while (controle < 11) {
//     console.log(controle)
//     controle++
// }

//5. Verifique se um número digitado pelo usuário é divisível por outro número digitado pelo usuário
// let primeiro = prompt("Digite o primeiro numero:")
// let segundo = prompt("Digitee o segundo numero")

// if (primeiro % segundo == 0){
//     console.log("é divisível")
// }else{
//     console.log("não é divisível")
// }


// 6. Crie um programa que calcule a soma de todos os números de 1 a 10
// let controle = 1
// for(i=1; i<11;i++){
//     console.log(controle)
//     controle = controle + i
// }


// 7. Crie um programa que calcule a soma de todos os números pares de 1 a 10
// let controle = 0
// for (i = 1; i < 11; i++) {
//     if (i % 2 == 0) {
//         controle = controle + i
//         console.log(controle)
//     } else {

//     }
// }

//8. Crie um programa que calcule a soma de todos os números ímpares de 1 a 10
// let controle = 0
// for (i = 1; i < 11; i++) {
//     if (i % 2 != 0) {
//         controle = controle + i
//         console.log(controle)
//     } else {
//     }
// }

// 9. Verifique se um número é primo
// let numero = prompt("Digite um número:")
// let controle = 0
// for (i = 0; i <= numero; i++) {
//     if (numero % i== 0) {
//         controle += 1
//     }
// }
// if(controle == 2){
//     console.log("é primo")
// }else{
//     console.log("não é primo")
// }

//10. Crie um programa que determine se uma palavra é um palíndromo
// let palavra = prompt("Digite uma palavra")
// let final = palavra
// let controlePalavra = palavra.length
// let controle = 0

// for(i=0; i < palavra.length; i++){   
//     if(palavra[i] === palavra[controlePalavra-1]){
//         controlePalavra -= 1
//         controle +=1
//     }
// }
// if(controle == final.length){
//     console.log("é palindromo")
// }else{
//     console.log("não é palindromo")
// }

// 11. Crie um loop for que itere de 10 a 0.
// for(i=10;i>=0;i--){
//     console.log(i)
// }

// 12. Crie um loop while que itere de 10 a 0.
// let controle = 10
// while (controle >=0){
//     console.log(controle)
//     controle -=1
// }

//13. Crie um programa que determine se um número é negativo
// let numero = prompt("digite um número:")
// if ( numero >0){
//     console.log("é positivo")
// }
// if(numero == 0){
//     console.log("número igual a zero")
// }
// if(numero <0){
//     console.log("é negativo")
// }

//14. Crie um programa que determine se um número é positivo
// let numero = prompt("digite um número:")
// if ( numero >0){
//     console.log("é positivo")
// }
// if(numero == 0){
//     console.log("número igual a zero")
// }
// if(numero <0){
//     console.log("é negativo")
// }

//15. Crie um loop for que itere de 1 a 100, imprimindo "Fizz" para múltiplos de 3
//e "Buzz" para múltiplos de 5 e "FizzBuzz" para múltiplos de 3 e 5.
// for (i = 1; i <= 100; i++) {
//     console.log(i)

//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(`${i} é múltiplo de 3 e 5: FizzBuzz`);
//     }
//     if (i % 3 == 0 && i % 5 != 0) {
//         console.log(`é múltiplo de 3:Fizz`);
//     }
//     if (i % 5 == 0 && i % 3 != 0) {
//         console.log(`é múltiplo de 5:Fizz`);
//     }
// }

// 16. Crie um programa que determine se um número é um número perfeito
// let numero = prompt("digite um numero")
// let convertInt = parseInt(numero)
// let soma = 0
// for (i = 0; i < convertInt; i++) {
//     if (convertInt % i == 0) {
//         soma += i
//     }
// }
// if (soma == convertInt) {
//     console.log("é um número perfeito")
// } else {
//     console.log("não é um número perfeito")
// }

// 17. Crie um programa que não aceite uma senha digitada pelo usuário enquanto ela tiver menos que 5 dígitos.
// let senha = prompt("digite a senha com 5 ou mais digitos")
// while (senha.length < 5) {
//     senha = prompt("digite a senha com 5 ou mais digitos")
// }
// console.log("obrigada")

//18. Crie um programa que determine o fatorial de um número usando um loop for.
// let numero =  prompt(`Digite um número para fazer o fatorial`)
// let converteInt = parseInt(numero)
// let controle = converteInt

// for(i=numero-1;i>0;i--){
//     controle = controle * i
// }
// console.log(controle)

//19. Crie um programa que determine o fatorial de um número usando um loop while.
// let numero =  prompt(`Digite um número para fazer o fatorial`)
// let converteInt = parseInt(numero)
// let controle = converteInt
// let i = controle-1

// while(i > 0){
//     controle = controle * i
//     i--
// }
// console.log(controle)

// 20. Crie um programa que calcule a soma de todos os números em um array usando um loop for.
// let array = []
// let soma = 0
// let quantidade = prompt("quantos números você quer digitar?")
// let converteInt = parseInt(quantidade)

// for(i = 0 ; i < converteInt; i++) {
//     let numero = prompt("Informe o número")
//     let numeroConvert = parseInt(numero)
//     array.push(numeroConvert)
//     soma += array[i]
// }
// console.log(soma)

// 21. Crie um programa que peça ao usuário 5 notas e exiba se o Aluno foi aprovado ou
// não sendo 6 a nota mínima para aprovação
// let soma = 0
// let total = 0
// for (i = 0; i < 5; i++) {
//     let nota = prompt("Digite a nota")
//     let numeroConvert = parseInt(nota)
//     soma += numeroConvert
// }

// total = soma / 5
// if (total >= 6) {
//     console.log("passou")
// } else {
//     console.log("não passou")
// }

// 22. Crie um programa que imprima na tela a tabuada de um número digitado pelo usuário
// let numero = prompt("digite um número")
// let converteInt = parseInt(numero)
// let multi = 0
// for(i=0;i<=10;i++){
//     multi = converteInt * i
//     console.log(`${converteInt} * ${i} = ${multi}`);
// }

// 23. Pedir ao usuário para digitar uma palavra e exibir cada letra em uma linha
// let palavra = prompt("Digite uma palavra")
// for(i=0; i<palavra.length;i++){
//     console.log(palavra[i])
// }

// 24. Desenhar um triângulo na tela, utilizando um loop, conforme exemplo
// let tamanho = prompt("qual tamanho de triangulo?")
// let numeroConvert = parseInt(tamanho)
// let hash = "#"
// for(i=1; i<=numeroConvert;i++){
//     console.log(`     ${hash.repeat(i)}`)
// }

