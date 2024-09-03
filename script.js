let num1 = window.prompt('Escreva um número')
let num2 = window.prompt('Escreva outro número')
num1 = parseInt(num1);
num2 = parseInt(num2);

let soma = num1 + num2
let sub = num1 - num2
let mult = num1*num2
let div = num1/num2
alert(`
${num1} + ${num2} = ${soma}
${num1} - ${num2} = ${sub}
${num1} * ${num2} = ${mult}
${num1} / ${num2} = ${div}`)


let nome = window.prompt('qual seu nome?')
let sobrenome = window.prompt('qual seu sobrenome?')
let curso = window.prompt('qual seu curso da base técnica?')
let nascimento = window.prompt('qual seu ano de nascimento?')
let idade = (2024 - nascimento)

window.alert(`ola, ${nome} ${sobrenome} seu curso da base técinica é ${curso} e voce tem ${idade} anos`)