//Ajax é uma requisição assincrona que realizamos no Back End. Com o Ajax é possivel fazermos requisições ao servidor sem atualizar a pagina

var server = new XMLHttpRequest();

server.open('GET', 'https://api.github.com/users/HenriqueHS19');
server.send(null);

server.onreadystatechange = function(){
  if (server.readyState === 4){
    console.log(JSON.parse(server.responseText));
  }
}
