function verificarIdade(idade){
  return new Promise(function(response, reject){
    if (idade > 17){
      setTimeout(response(), 2000);
    }
    else{
      setTimeout(reject(), 2000);
    }
  });
}

verificarIdade(19)
  .then(function(){
    console.log('Maior de idade');
  })
  .catch(function(reject){
    console.log('Menor de idade');
  })
