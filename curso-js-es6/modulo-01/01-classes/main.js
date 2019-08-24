class ItemList {

  //metodo construtor
  constructor(){
    this.items = [];
  }

  addItem(item){
    this.items.push(item);
    console.log(this.items);
  }
}

//criando um objeto da classe ItemList
const itemList = new ItemList();

var btnAdicionar = document.querySelector('button[name = btnAdicionar]');
var txtItem = document.querySelector('input[name = txtItem]');

btnAdicionar.onclick = function() {
  itemList.addItem(txtItem.value);
}
