//21 - Faça um algoritmo que leia dois valores inteiros A e B, imprima na tela o quociente e o resto da divisão inteira entre eles.

const desafio21 = (a, b) => {
  console.log(
    `O quociente da divisão entre ${a} e ${b} é ${Math.floor(
      a / b
    )} e o resto da divisão é ${a % b}`
  );
};

//22 - Faça um algoritmo que efetue o cálculo do salário líquido de um professor. As informações fornecidas serão: valor da hora aula, número de aulas lecionadas no mês e percentual de desconto do INSS. Imprima na tela o salário líquido final.

const desafio22 = (valorHoraAula, numeroAula, descontoINSS) => {
  const salarioBruto = valorHoraAula * numeroAula;
  const salarioLiquido = salarioBruto * (1 - descontoINSS / 100);
  console.log(
    `O salário líquido do professor é ${salarioLiquido} reais e o salario bruto ${salarioBruto} reais`
  );
};
//23 - Faça algoritmo que leia o nome e a idade de uma peso e imprima na tela o nome da pessoa e se ela é maior ou menor de idade.

const desafio23 = (nome, idade) => {
  if (idade >= 18) {
    console.log(`${nome} tem ${idade} anos é maior de idade.`);
  } else {
    console.log(`${nome} tem ${idade} anos é menor de idade.`);
  }
};
//24 - Faça um algoritmo que calcule a quantidade de litros de combustível gastos em uma viagem, sabendo que o carro faz 12km com um litro.
//Deve-se fornecer ao usuário o tempo que será gasto na viagem a sua velocidade média, distância percorrida e a quantidade de litros utilizados para fazer a viagem.
//Fórmula: distância = tempo x velocidade.
//litros usados = distância / 12.

const desafio24 = (distancia, velocidade) => {
  const tempo = distancia / velocidade;
  const litrosUsados = Math.floor(distancia / 12);
  console.log(
    `O tempo gasto em um viagem com ${distancia} quilometros e ${velocidade} km/h é de ${tempo} horas e foram usados ${litrosUsados} litros de gasolina`
  );
};
//25-Encontre o maior número em uma lista: Escreva um algoritmo para encontrar o maior número em uma lista de valores.

const desafio25 = (numbers) => {
  const separando = numbers.split(",");
  const numbers25 = separando.map((number) => {
    return parseInt(number);
  });
  const ordemCrescente = numbers25.sort((a, b) => {
    return a - b;
  });
  const maiorNumero = ordemCrescente.pop();
  console.log(`O maior numero da lista ${numbers} é o ${maiorNumero}`);
};
//26-Encontre o menor número em uma lista: Escreva um programa para encontrar o menor número em uma lista de valores.
const desafio26 = (numbers) => {
    const separando = numbers.split(",");
    const numbers25 = separando.map((number) => {
      return parseInt(number);
    });
    const ordemCrescente = numbers25.sort((a, b) => {
      return a - b;
    });
    const menorNumero = ordemCrescente.shift();
    console.log(`O maior numero da lista ${numbers} é o ${menorNumero}`);
  };
//27-Inverta uma string: Desenvolva um algoritmo que inverta uma string fornecida como entrada.

const desafio27 = (palavra) => {
  const arrayLetras = palavra.split("");
  const inverso = arrayLetras.reverse().join("");
  console.log(inverso);
};
//28-Calcule o fatorial de um número: Escreva um programa que calcule o fatorial de um número dado.
const desafio28 = (number) => {
  const arrayNumeros = [number];
  for (let i = 1; ; i++) {
    const numeroAnterior = number - i;
    arrayNumeros.push(numeroAnterior);
    if (i === number - 1) {
      break;
    }
  }
  const fatoracao = arrayNumeros.reduce((accum, curr) => accum * curr);
  console.log(`O fatorial de ${number}! é ${fatoracao}`);
};
//29-Ordenação de lista: Implemente um algoritmo de ordenação para ordenar uma lista de valores.
const desafio29 = (numbers) => {
  const separando = numbers.split(",");
  const numbers25 = separando.map((number) => {
    return parseInt(number);
  });
  const ordemCrescente = numbers25.sort((a, b) => {
    return a - b;
  });
  console.log(`A lista em ordem crescrente fica assim:${ordemCrescente}`);
};
//30-Verifique se uma palavra é um palíndromo: Crie um programa que identifique se uma palavra é um palíndromo.

const desafio30 = (palavra) => {
  const arrayLetras = palavra.split("");
  const inverso = arrayLetras.reverse().join("");
  palavra === inverso
    ? console.log(`A palavra ${palavra} é um palíndromo`)
    : console.log(`A palavra ${palavra} não é um palíndromo`);
};
