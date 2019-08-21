axios.get('https://api.github.com/users/HenriqueHS19')
  .then(function(response){
    console.log(response);
  })
  .catch(function(rejact){
    console.warn(error);
  })
