var txtUser = document.querySelector('.container input[name = txtUser]');
var btnBuscar = document.querySelector('.container button[name = btnBuscar]');
var list = document.querySelector('.container ul');

btnBuscar.onclick = function busca(){
    axios.get('https://api.github.com/users/' +txtUser.value+ '/repos')
      .then(function(response){
        list.innerHTML = '';

        for (repos of response.data){
          var li = document.createElement('li');
          li.appendChild(document.createTextNode(repos.name));
          list.appendChild(li);
        }

      })
      .catch(function(reject){
        list.innerHTML = '';
        console.log('Usuario não encontrado');
      })
  };
