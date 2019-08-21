var txtUser = document.querySelector('.container input[name = txtUser]');
var btnBuscar = document.querySelector('.container button[name = btnBuscar]');
var list = document.querySelector('.container ul');

function busca(){

 createLi('Carregando...');

 axios.get('https://api.github.com/users/' +txtUser.value+ '/repos')
   .then(function(response){
     list.innerHTML = '';

     for (repository of response.data){
       createLi(repository.name);
     }

   })
   .catch(function(reject){
     list.innerHTML = '';
     createLi('Usuario não encontrado');
   })
};

btnBuscar.onclick = busca;

function createLi(text){
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(text));
  list.appendChild(li);
}
