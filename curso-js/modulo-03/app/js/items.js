var list = document.querySelector('.container ul');
var txtItem = document.querySelector('.container input[name = txtItem]');
var btnAdd = document.querySelector('.container button[name = btnAdicionar]');

var itens = JSON.parse(localStorage.getItem('list_item')) || [];


//adiciona itens na lista
function renderItems(){

  //limpando a lista
  list.innerHTML = '';

  //foreach
  for (item of itens){
    //li
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    //posicao de cada item do vetor
    var index = itens.indexOf(item);

    //links
    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.appendChild(document.createTextNode('Excluir'));
    a.setAttribute('onclick', 'deleteItem(' +index+ ')');

    li.appendChild(a);
    list.appendChild(li);

    saveItemStorage();
  };
}

renderItems();

//adiciona um novo item no vetor "itens"
function addItem(){
  //push é uma função que cria um novo indice em um vetor
  itens.push(txtItem.value);
  txtItem.value = '';
  renderItems();
}

//remover items
function deleteItem(index){
    /*
     * a função splice exclui um ou mais itens de um vetor. Os parametros passados são: posicao do item a ser excluido e a quantidade de itens a serem excluidos.
     * Exemplo: splice(0, 2) -> vão ser excluidos os itens de indice 0 e 1, já que o segundo parametro indica que dois itens devem ser excluidos
     */
    itens.splice(index, 1);
    renderItems();
}

function saveItemStorage(){
  localStorage.setItem('list_item', JSON.stringify(itens));
}

//Click do button
btnAdd.onclick = addItem;
