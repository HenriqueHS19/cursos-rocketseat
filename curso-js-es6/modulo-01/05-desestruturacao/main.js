const usuario = {
  nome: "Henrique",
  idade: 19,
  profissao: "Desenvolvedor",
  endereco: {
    cidade: "São Paulo",
    estado: "SP"
  }
}

const { nome, idade, profissao } = usuario;
console.log(nome, idade, profissao);
