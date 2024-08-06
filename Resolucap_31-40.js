// 31-Dado um array de números inteiros, crie uma função que retorne um novo array contendo apenas os números pares, mas com seus valores elevados ao quadrado.
const desafio31 = (array) => {
  const arrayPares = array.filter((number) => number % 2 === 0);
  const novoArray = arrayPares.map((number) => number * number);
  console.log(novoArray);
};
// 32-Crie uma função que receba um objeto representando um usuário com as propriedades nome, idade e email. A função deve retornar uma string formatada contendo os detalhes do usuário, por exemplo: "Nome: João, Idade: 30, Email: joao@example.com".
const desafio32 = (objeto) => {
  console.log(
    `Nome: ${objeto.nome}, Idade: ${objeto.idade}, Email: ${objeto.email}`
  );
};

// 33-Implemente uma função chamada createCounter que retorna um contador. O contador deve ter dois métodos: increment para aumentar o valor do contador em 1 e getValue para retornar o valor atual.
const desafio33 = () => {
  let counter = 0;

  const createCounter = () => {
  const getValue = () => {
    console.log("Valor atual:", counter);
  };
  const increment = () => {
    setTimeout(() => {
      counter++;
      console.log("Contador após incremento:", counter);
    }, 100);
  };
  return { getValue, increment };

}

  return createCounter();
};
// 34-Crie uma função fetchData que simule uma requisição de dados com um atraso de 2 segundos e retorne uma Promise que resolve com um objeto { data: 'some data' }. Implemente outra função que utilize fetchData e imprima os dados recebidos no console.

const desafio34 = () => {
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = "some data";

        resolve(data);
      }, 2000);
    });
  };

  fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

// 35- Dado um array de objetos representando produtos com preco e quantidade, crie uma função que calcule o valor total dos produtos. Utilize os métodos map e reduce para realizar essa tarefa
const desafio35 = (arrayProdutos) => {
  const total = arrayProdutos
    .map((item) => {
      return item.preco * item.quantidade;
    })
    .reduce((acc, valorAtual) => {
      return acc + valorAtual;
    });
  console.log(total);
};

// 36-Crie uma função que receba uma data no formato YYYY-MM-DD e retorne o dia da semana correspondente
const desafio36 = (data) => {
  const valorData = data + " " + "00:01:00";
  const dataTransForme = new Date(valorData);
  const diaSemana = dataTransForme.getDay();
  let diaSemanaNome = "";
  switch (diaSemana) {
    case 0:
      diaSemanaNome = "Domingo";
      break;
    case 1:
      diaSemanaNome = "Segunda";
      break;
    case 2:
      diaSemanaNome = "Terça";
      break;
    case 3:
      diaSemanaNome = "Quarta";
      break;
    case 4:
      diaSemanaNome = "Quinta";
      break;
    case 5:
      diaSemanaNome = "Sexta";
      break;
    case 6:
      diaSemanaNome = "Sábado";
      break;
    default:
      console.log("Ocorreu um erro");
  }
  console.log(diaSemanaNome);
};
desafio36("2024-08-05");

// 37-Dado um array de strings, crie uma função que filtre e retorne apenas as strings que contêm a letra 'a'.
const desafio37 = (array) => {
  const arrayContemA = array.filter((item) => item.includes("a"));
  console.log(arrayContemA);

  return arrayContemA;
};
// 38-Crie uma função que gere uma senha aleatória de um comprimento especificado, contendo letras maiúsculas, minúsculas e números
const desafio38 = (comprimento) => {
  const letrasMinusculas = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "w",
    "x",
    "y",
    "z",
  ];
  const letrasMaiusculas = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    " P",
    "Q",
    "R",
    "S",
    "T",
    "W",
    "X",
    "Z",
  ];
  const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const senha = [];

  for (let i = 0; i < comprimento; i++) {
    const min = 0;
    let array = [];
    const tipo = Math.floor(Math.random() * (2 - min + 1)) + min;
    if (tipo === 0) array = letrasMaiusculas;
    else if (tipo === 1) array = letrasMinusculas;
    else array = numeros;
    const indexAleatorio =
      Math.floor(Math.random() * (array.length - min)) + min;

    const caracteres = array[indexAleatorio];

    senha.push(caracteres);
  }
  console.log(senha);
  return senha;
};

//39- Crie uma função que conte o número de palavras em uma string. Considere que as palavras são separadas por espaços.
const desafio39 = (frase) => {
  const contagem = frase.split(" ");
  console.log(`Essa frase possui ${contagem.length} palavras`);
};
// 40- Crie uma função que receba um array de números e retorne a soma de todos os números.

const desafio40 = (array) => {
  const somaValoresArray = array.reduce((accum, curr) => accum + curr);
  console.log(somaValoresArray);
};
