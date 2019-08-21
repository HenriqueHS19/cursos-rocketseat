var promise = function(){
  return new Promise(function(resolve, rejact){
    var server = new XMLHttpRequest();

    server.open('GET', 'https://api.github.com/users/HenriqueHS19');
    server.send(null);

    server.onreadystatechange = function(){
      if (server.readyState === 4){
        if (server.status === 200){
          resolve(JSON.parse(server.responseText));
        }
        else{
          rejact('Erro na requisição');
        }
      }
    }
  });
}

promise().
  then(function(response){
    console.log(response);
  })
  .catch(function(rejact){
    console.warn(error);
  })
