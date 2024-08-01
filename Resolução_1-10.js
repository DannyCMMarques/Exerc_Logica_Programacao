//1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.
const desafio1 = (a, b, c) => {
  let soma = a + b;
  console.log(`A soma de ${a} e ${b} é: ${soma}`);
  if (soma !== c) {
    soma < c
      ? console.log("A soma é menor que C")
      : console.log("A soma não é menor que C");
  } else {
    console.log("Os valores são iguais");
  }
};

//2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.
const desafio2 = (number) => {
  let parImpar = "";
  let posNeg = "";
  number % 2 === 0 ? (parImpar = "par") : (parImpar = "impar");
  number > 0 ? (posNeg = "positivo") : (posNeg = "negativo");

  console.log(`O número ${number} é ${parImpar} e ${posNeg}.`);
};

//3 - Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores,caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e
//imprimir seu valor na tela.

const desafio3 = (a, b) => {
  let c = "";
  a === b ? (c = a + b) : (c = a * b);
  console.log(c);
};

//4 - Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.
const desafio4 = (number) => {
  console.log(
    `O antecessor de ${number} é ${number - 1} e seu sucessor é : ${number + 1}`
  );
};

//5- Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20).
const desafio5 = (salario) => {
  const salarioMinimo = 1412;
  console.log(`O usuário ganha ${salario / salarioMinimo} salarios minimos`);
};
//6 - Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.
const desafio6 = (number) => {
  console.log(`O novo valor é de: ${number * 1.05} `);
};
//7 - Faça um algoritmo que leia dois valores booleanos (lógicos) e determine se ambos são VERDADEIRO ou FALSO.
const desafio7 = (a, b) => {
  a === true && b === true
    ? console.log("Ambos sao verdadeiros")
    : a === false && b === false
    ? console.log("Ambos sao falsos")
    : console.log(a, "e", b);
};
//8- Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.
const desafio8 = (a, b, c) => {
  const arrayD8 = [a, b, c];
  arrayD8.sort((a, b) => {
    return b - a;
  });
  console.log(arrayD8);
};
//9 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e imprima na tela sua condição de acordo com a tabela abaixo:
//Fórmula do IMC = peso / (altura) ²
//Tabela Condições IMC
//Abaixo de 18,5   | Abaixo do peso
//Entre 18,6 e 24,9 | Peso ideal (parabéns)
//Entre 25,0 e 29,9 | Levemente acima do peso
//Entre 30,0 e 34,9 | Obesidade grau I
//Entre 35,0 e 39,9 | Obesidade grau II (severa)
//Maior ou igual a 40 | Obesidade grau III (mórbida)

const desafio9 = (peso, altura) => {
  const imc = peso / (altura * altura);
  console.log(`Seu IMC é ${imc}`);

  switch (true) {
    case imc <= 18.5:
      console.log("Abaixo do peso");
      break;
    case (imc >= 18.6) & (imc <= 24.9):
      console.log("Peso ideal");
      break;
    case (imc >= 25.0) & (imc <= 29.9):
      console.log("Levemente acima do peso");
      break;
    case (imc >= 30.0) & (imc <= 34.9):
      console.log("Obesidade grau I");
      break;
    case (imc >= 35.0) & (imc <= 39.9):
      console.log("Obesidade grau II (severa)");
    case imc >= 40:
      console.log("Obesidade grau III (mórbida)");
      break;
    default:
      console.log("default");
      break;
  }
};
desafio9(100, 2);
// 10 - Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.
const desafio10 = (a, b, c) => {
  const media = (a + b + c) / 3;
  console.log(`A média é ${media}`);
};
