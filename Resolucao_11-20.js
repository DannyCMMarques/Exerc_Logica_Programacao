//11 - Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota obtidas, imprima na tela o nome do aluno e se o aluno foi aprovado ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7.
const desafio11 = (nome, nota1, nota2, nota3, nota4) => {
  const media = (nota1 + nota2 + nota3 + nota4) / 4;
  let status = "";
  media >= 7 ? (status = "Aprovado") : (status = "Reprovado");
  console.log(`${nome} - ${status} com média ${media}`);
};

//12 - Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.
//-Tabela de Código de Condições de Pagamento
//A- À Vista em Dinheiro ou Pix, recebe 15% de desconto
//B- À Vista no cartão de crédito, recebe 10% de desconto
//C - Parcelado no cartão em duas vezes, preço normal do produto sem juros
//D- Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%

const desafio12 = (valor, codigoPagamento) => {
  let novoValor = "";
  switch (true) {
    case codigoPagamento === "A":
      novoValor = valor * 0.75;
      console.log(`O pagamento vai ser de ${novoValor.toFixed(2)}`);
      break;
    case codigoPagamento === "B":
      novoValor = valor * 0.9;
      console.log(`O pagamento vai ser de ${novoValor.toFixed(2)}`);
      break;
    case codigoPagamento === "C":
      novoValor = valor;
      console.log(`O pagamento vai ser de ${novoValor.toFixed(2)}`);
      break;
    case codigoPagamento === "D":
      novoValor = valor * 1.1;
      console.log(`O pagamento vai ser de ${novoValor.toFixed(2)}`);
      break;
    default:
      console.log("Código de pagamento inválido");
  }
};
//13 - Faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por A e imprima na tela os valores.

const desafio13 = (a, b) => {
  const A = b;
  const B = a;
  console.log(`Os novos valores sao A vale: ${A} e B: ${B}`);
};

//14 - Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, meses e dias essa pessoa ja viveu. Leve em consideração o ano com 365 dias e o mês com 30 dias.(Ex: 5 anos, 2 meses e 15 dias de vida)
const desafio14 = (dataNascimento) => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth() + 1;
  const diaAtual = dataAtual.getDate();
  const diasPecorridosTotal = anoAtual * 365 + mesAtual * 30 + diaAtual;
  const aniversario = dataNascimento.split("/");
  console.log(aniversario);
  const diaNascimento = parseInt(aniversario[0]);
  const mesNascimento = parseInt(aniversario[1]);
  const anoNascimento = parseInt(aniversario[2]);
  const diasAteNascer =
    anoNascimento * 365 + mesNascimento * 30 + diaNascimento;
  const diasVivos = diasPecorridosTotal - diasAteNascer;
  const anosPercorridos = Math.floor(diasVivos / 365);
  const mesesPercorridos = Math.floor((diasVivos - anosPercorridos * 365) / 30);
  const diasPercorridos =
    diasVivos - (mesesPercorridos * 30 + anosPercorridos * 365);
  console.log(
    `A pessoa que nasceu em ${dataNascimento} possui ${anosPercorridos} anos, ${mesesPercorridos} meses, ${diasPercorridos} dias`
  );
};

//15- Faça um algoritmo que leia três valores que representam os três lados de um triângulo e verifique se são válidos, determine se o triângulo é equilátero, isósceles ou escaleno.
const desafio15 = (lado1, lado2, lado3) => {
  let validade = "";
  let classificacao = "teste";

  lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2
    ? (validade = "É valido")
    : (validade = "Não é válido");

  switch (validade === "É valido") {
    case lado1 == lado2 && lado2 == lado3:
      classificacao = "Equilatero";
      break;
    case (lado1 === lado2 && lado1 !== lado3) ||
      (lado2 === lado3 && lado2 !== lado1) ||
      (lado1 === lado3 && lado1 !== lado2):
      classificacao = "Isósceles";
      break;
    case lado1 !== lado2 && lado1 !== lado3:
      classificacao = "Escaleno";
      break;
    default:
      classificacao = "Erro";
  }
  validade === "É valido"
    ? console.log(
        `Esse triângulo ${validade} e possui a seguinte classificaçao:${classificacao}`
      )
    : console.log(`Esse triângulo ${validade}`);
};
//16 - Faça um algoritmo que leia uma temperatura em Fahrenheit e calcule a temperatura correspondente em grau Celsius. Imprima na tela as duas temperaturas.
//Fórmula: C = (5 * ( F-32) / 9)
const desafio16 = (F) => {
  const Celsius = (5 * (F - 32)) / 9;
  console.log(
    `A temperatura em Celsius é: ${Celsius.toFixed(
      2
    )}°C equivale a ${F} Fahrenheit `
  );
};
//17 - Francisco tem 1,50m e cresce 2 centímetros por ano, enquanto Sara tem 1,10m e cresce 3 centímetros por ano. Faça um algoritmo que calcule e imprima na tela em quantos anos serão necessários para que Francisco seja maior que Sara.

const desafio17 = () => {
  for (let x = 0; ; x++) {
    const alturaFrancisco = 150 + 2 * x;
    const alturaSara = 110 + 3 * x;
    console.log(alturaFrancisco, alturaSara);
    const arrayAnos = [x];
    const anosNecessarios = arrayAnos.pop();
    console.log(
      `Anos necessarios: ${anosNecessarios} anos para que Francisco permaneça maior que Sara`
    );
    if (alturaFrancisco <= alturaSara) {
      break;
    }
  }
};

//18 - Faça um algoritmo que imprima na tela a tabuada de 1 até 10.
const desafio18 = () => {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
};
//19 - Faça um algoritmo que receba um valor inteiro e imprima na tela a sua tabuada.
const desafio19 = (number) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
};
//20- Faça um algoritmo que mostre um valor aleatório entre 0 e 100.

const desafio20 = () => {
  const max = 100;
  const min = 0;
  const valorAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(valorAleatorio);
};
