//REST -> pega o resto de um objeto ou propriedade
const usuario = {
  nome: "Henrique",
  idade: 19,
  profissao: "Desenvolvedor"
}

const { nome, ...rest } = usuario;

console.log(nome);
console.log(rest);

// SPREAD -> passar as informações de um array ou objeto para uma outra estrutura de dados
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [ ...array1, ...array2];
console.log(array3);

const user1 = {
  nome: "Henrique",
  idade: 19,
  profissao: "Desenvolvedor"
}

const user2 = { ...user1, nome: "Claudio", idade: 18 };

console.log(user1, user2);
